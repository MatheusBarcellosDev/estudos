import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OPENAI_API_KEY não configurada no .env.local' }, { status: 500 });
    }

    const { pdfUrl, screenshot } = await req.json();
    if (!screenshot) {
      return NextResponse.json({ error: 'Screenshot is required' }, { status: 400 });
    }

    console.log('[DEBUG] Received screenshot from client. Length:', screenshot.length);

    // 1. Prepare image for OpenAI (strip base64 header if present)
    const base64Data = screenshot.replace(/^data:image\/\w+;base64,/, '');

    // 2. Send image to gpt-4o-mini via Chat Completions Vision API
    const prompt = `Você é um especialista em concursos públicos e criação de questões da banca CEBRASPE.

Sua tarefa é criar questões no formato CERTO ou ERRADO baseadas exclusivamente no mapa mental/imagem fornecida.

Regras obrigatórias:
- Crie exatamente 5 questões.
- Cada questão deve ter um "contexto" (um pequeno texto de apoio ou situação hipotética baseada no mapa) e uma "afirmação" (o item a ser julgado).
- As afirmações devem parecer questões reais de prova, explorando conceitos importantes do texto/imagem.
- Podem conter pegadinhas conceituais (inversão, troca de palavras).
- O nível deve ser difícil.
- Não invente conteúdo que não esteja no texto.
- As respostas devem ser apenas "CERTO" ou "ERRADO".
- Misture respostas CERTAS e ERRADAS.

Retorne um objeto JSON exatamente neste formato:
{
  "questions": [
    {
      "contexto": "Texto de apoio ou base para a afirmação...",
      "afirmacao": "A afirmação que deve ser julgada como CERTO ou ERRADO...",
      "resposta": "CERTO ou ERRADO",
      "explicacao": "Uma explicação detalhada e pedagógica sobre o tema, explicando o porquê da resposta para ajudar o aluno a aprender o conceito (mínimo 3 sentenças)."
    }
  ]
}`;

    console.log('[DEBUG] Calling OpenAI Vision API (JSON Mode)...');
    const result = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: {
                url: `data:image/png;base64,${base64Data}`,
                detail: 'high',
              },
            },
            {
              type: 'text',
              text: prompt,
            },
          ],
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
      max_tokens: 3000,
    });

    const rawContent = result.choices[0]?.message?.content || '{}';
    console.log('[OpenAI] Raw response length:', rawContent.length);

    let questions = [];
    try {
      const parsed = JSON.parse(rawContent);
      const items = parsed.questions || parsed.items || (Array.isArray(parsed) ? parsed : Object.values(parsed)[0]);
      
      if (!Array.isArray(items)) {
        throw new Error('Formato JSON inválido: "questions" deve ser um array.');
      }

      // Map Portuguese keys to Internal keys (text, answer, explanation)
      questions = items.map((item: any) => ({
        context: item.contexto || item.context || item.preamble,
        text: item.afirmacao || item.text || item.question,
        answer: (item.resposta || item.answer || "").toUpperCase(),
        explanation: item.explicacao || item.explanation || item.reason,
      }));
    } catch (e: any) {
      console.error('[OpenAI] JSON Parse Fail. Content:', rawContent);
      throw new Error('Erro ao processar resposta da IA: ' + e.message);
    }

    if (questions.length === 0) {
      throw new Error('A IA não retornou questões válidas.');
    }

    return NextResponse.json({ questions });

  } catch (error: any) {
    console.error('Generate API Error:', error);
    return NextResponse.json({ 
      error: error.message || 'Internal Server Error',
      stack: process.env.NODE_ENV === 'development' ? error.stack?.split('\n').slice(0, 3) : undefined
    }, { status: 500 });
  }
}
