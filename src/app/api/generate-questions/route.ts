import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OPENAI_API_KEY não configurada no .env.local' }, { status: 500 });
    }

    const { pdfUrl, screenshot, fileName } = await req.json();

    let base64Data = '';

    if (fileName) {
      // 1. New Efficient Way: Read directly from server disk
      const filePath = path.join(process.cwd(), 'sample-images', path.basename(fileName));
      if (!fs.existsSync(filePath)) {
        throw new Error('Arquivo não encontrado no servidor: ' + fileName);
      }
      const buffer = fs.readFileSync(filePath);
      base64Data = buffer.toString('base64');
      console.log(`[DEBUG] Read image from disk: ${fileName}. Size: ${(buffer.length / 1024 / 1024).toFixed(2)}MB`);
    } else if (screenshot) {
      // 2. Legacy/Fallback: Receive from client (prone to 413 errors)
      base64Data = screenshot.replace(/^data:image\/\w+;base64,/, '');
      console.log('[DEBUG] Using screenshot from client. Length:', base64Data.length);
    } else {
      return NextResponse.json({ error: 'fileName or screenshot is required' }, { status: 400 });
    }

    // 2. Send image to gpt-4o-mini via Chat Completions Vision API
    const prompt = `Você é um especialista em concursos públicos e criação de questões no padrão CEBRASPE (CERTO ou ERRADO), com profundo domínio teórico das disciplinas cobradas.

Sua tarefa é analisar minuciosamente o mapa mental, imagem, gráfico ou texto fornecido e gerar questões de alto nível.

ETAPA ADICIONAL — IDENTIFICAÇÃO DA DISCIPLINA (OBRIGATÓRIA):

Antes de criar as questões, identifique se o conteúdo pertence à disciplina de Língua Portuguesa.

- Se NÃO for Língua Portuguesa → siga TODAS as regras normalmente, sem alterações.
- Se FOR Língua Portuguesa → ative o MODO PORTUGUÊS abaixo.

MODO PORTUGUÊS (APLICAÇÃO PRÁTICA):

Quando o conteúdo for de Língua Portuguesa, você deve adaptar a forma das questões da seguinte maneira:

- NÃO fazer perguntas teóricas sobre o conteúdo (ex: definições, conceitos diretos).
- NÃO perguntar diretamente sobre o que está escrito no material.
- Criar FRASES ou pequenos TEXTOS inéditos para análise.
- As questões devem exigir que o aluno APLIQUE a regra estudada.

Exemplos de aplicação:
- "Porquês" → criar frases com uso de porque/por que/por quê/porquê
- Crase → frases com uso correto ou incorreto
- Concordância → frases com erros sutis
- Pontuação → uso de vírgulas
- Regência → uso correto/incorreto

Regras específicas do modo português:
- O "contexto" pode ser uma frase ou pequeno texto.
- A "afirmação" deve julgar se o uso da língua está correto.
- Utilize pegadinhas clássicas:
  - erros sutis
  - ambiguidade
  - confusão entre regras
  - uso aparentemente correto, mas incorreto
- O nível deve ser DIFÍCIL (padrão CEBRASPE).
- A explicação deve ensinar a regra e justificar o erro/acerto com clareza.

OBJETIVO:
Criar 5 questões inéditas no formato CERTO ou ERRADO, exigindo raciocínio profundo e domínio conceitual.

REGRAS OBRIGATÓRIAS:

1. QUANTIDADE:
- Crie exatamente 5 questões.

2. ESTRUTURA:
Cada questão deve conter:
- "contexto": situação, explicação ou mini-caso baseado no conteúdo fornecido
- "afirmacao": item a ser julgado (estilo CEBRASPE)
- "resposta": "CERTO" ou "ERRADO"
- "explicacao": explicação detalhada, didática e técnica (mínimo 3 frases)

3. FIDELIDADE AO CONTEÚDO:
- NÃO invente conteúdos fora do material fornecido.
- Toda questão deve estar fundamentada direta ou indiretamente no conteúdo.
- É permitido aprofundar o conceito, mas sem sair do tema central.

4. NÍVEL DE DIFICULDADE:
- As questões devem ser difíceis, com nível de prova real.
- Evite questões óbvias ou diretas.

5. USO DE RACIOCÍNIO (ESSENCIAL):
As questões NÃO devem ser apenas cópia do material.
Você deve:
- Explorar implicações do conceito
- Relacionar causa e efeito
- Aplicar o conceito em situações hipotéticas
- Testar entendimento profundo

6. TÉCNICAS ESTILO CEBRASPE (OBRIGATÓRIO USAR PELO MENOS 3):
- Inversão de conceitos (ex: relação direta vs inversa)
- Troca de nomenclaturas (descrever certo, nome errado)
- Uso de termos absolutos ("sempre", "nunca", "apenas")
- Generalizações indevidas
- Extrapolações plausíveis porém incorretas
- Confusão entre conceitos semelhantes

7. DISTRIBUIÇÃO:
- Misture respostas CERTAS e ERRADAS.
- Evite padrões previsíveis (ex: alternância perfeita).

8. QUALIDADE DAS EXPLICAÇÕES:
- Explique o conceito envolvido, não apenas diga que está certo ou errado.
- A explicação deve ensinar o conteúdo ao aluno.

FORMATO DE SAÍDA (OBRIGATÓRIO):

Retorne APENAS um JSON válido, exatamente neste formato:

{
  "questions": [
    {
      "contexto": "Texto de apoio ou situação baseada no conteúdo...",
      "afirmacao": "A afirmação a ser julgada...",
      "resposta": "CERTO ou ERRADO",
      "explicacao": "Explicação detalhada e pedagógica com no mínimo 3 frases."
    }
  ]
}
`;

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

      // Map Portuguese keys to match the frontend interface
      questions = items.map((item: any) => ({
        context: item.contexto || item.context || item.preamble || "",
        afirmacao: item.afirmacao || item.text || item.question || "",
        resposta: (item.resposta || item.answer || "").toUpperCase(),
        explicacao: item.explicacao || item.explanation || item.reason || "",
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
