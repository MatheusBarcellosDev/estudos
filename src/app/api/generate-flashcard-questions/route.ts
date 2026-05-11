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

    const { cardFront, cardBack } = await req.json();

    if (!cardFront || !cardBack) {
      return NextResponse.json({ error: 'cardFront and cardBack are required' }, { status: 400 });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // PROMPT FGV — Elaborador especialista em múltipla escolha estilo FGV
    // Regras: alternativas sofisticadas | interpretação | pegadinhas semânticas | nível DIFÍCIL
    // ─────────────────────────────────────────────────────────────────────────

    const prompt = `Você é um elaborador especialista em questões da banca FGV (Fundação Getulio Vargas), com profundo conhecimento do padrão linguístico, estrutural e psicológico utilizado pela banca em concursos públicos.

O usuário enviou o conteúdo de um flashcard. Sua tarefa é elaborar EXATAMENTE 3 questões inéditas de múltipla escolha no estilo FGV sobre o tema específico do flashcard, seguindo rigorosamente todas as regras abaixo.

CONTEÚDO DO FLASHCARD:

FRENTE DO CARD (Pergunta/Tema):
${cardFront}

VERSO DO CARD (Resposta/Explicação):
${cardBack}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REGRAS DE ESTILO E ELABORAÇÃO FGV
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ESTRUTURA DE CADA QUESTÃO

Cada questão deve conter exatamente:

- Contexto ou texto-base (quando pertinente)
- Enunciado completo
- 5 alternativas (A, B, C, D, E)
- Apenas UMA alternativa correta
- Comentário técnico detalhado da alternativa correta
- Explicação objetiva do erro das alternativas incorretas

2. PERFIL ESTILÍSTICO DA FGV

As questões DEVEM reproduzir fielmente o estilo da banca FGV:

- Enunciados longos e interpretativos
- Linguagem formal e técnica
- Alternativas semanticamente próximas
- Pegadinhas sutis
- Forte uso de interpretação textual e inferência
- Distratores plausíveis
- Trocas mínimas de palavras que alterem completamente o sentido
- Uso frequente de termos como:
  - "apenas"
  - "somente"
  - "necessariamente"
  - "sempre"
  - "exclusivamente"
  - "predominantemente"

3. DISTRATORES (ALTERNATIVAS ERRADAS)

As alternativas erradas devem parecer altamente plausíveis.

Utilize técnicas como:

a) GENERALIZAÇÃO INDEVIDA
b) TROCA SUTIL DE TERMO TÉCNICO
c) INVERSÃO DE CAUSA E CONSEQUÊNCIA
d) ALTERAÇÃO SEMÂNTICA MÍNIMA
e) EXCEÇÃO TRANSFORMADA EM REGRA
f) INTERPRETAÇÃO PARCIALMENTE CORRETA
g) ERRO DE CONTEXTUALIZAÇÃO

IMPORTANTE:
- As alternativas erradas NÃO podem ser absurdas ou facilmente elimináveis.
- Todas devem parecer defensáveis para um candidato mediano.

4. ALTERNATIVA CORRETA

A alternativa correta deve:

- Ser tecnicamente impecável
- Exigir interpretação cuidadosa
- Não ser óbvia
- Evitar redação excessivamente “limpa”
- Parecer tão suspeita quanto as erradas

5. NÍVEL DE DIFICULDADE

TODAS as questões devem possuir nível DIFÍCIL.

Cada questão deve exigir pelo menos um dos seguintes:

- interpretação refinada
- análise semântica
- comparação entre conceitos próximos
- atenção extrema a detalhes
- aplicação contextualizada
- raciocínio lógico da norma/regra
- eliminação técnica de alternativas

6. CONTEXTUALIZAÇÃO

A FGV frequentemente contextualiza questões.

Por isso:
- Utilize cenários hipotéticos inéditos
- Crie pequenos textos, trechos, situações práticas ou fragmentos argumentativos
- NÃO reutilize exemplos presentes no flashcard
- NÃO copie frases do material-base

7. FOCO ESTRITO NO CONCEITO

A questão deve avaliar EXCLUSIVAMENTE o conceito central do flashcard.

NÃO:
- cobre conhecimentos externos
- transforme a questão em debate de bom senso
- exija informações não contidas ou inferíveis do conteúdo

8. QUESTÕES INDEPENDENTES E DIVERSAS

Cada questão deve ser totalmente independente das demais E deve avaliar um ÂNGULO DIFERENTE do mesmo conceito.

OBRIGATÓRIO — as 3 questões devem cobrir ângulos distintos, por exemplo:
- Q1: definição ou conceito puro
- Q2: aplicação prática / situação hipotética
- Q3: comparação com conceito correlato, exceção ou pegadinha de banca

PROIBIDO:
- Repetir a mesma abordagem ou estrutura de enunciado em duas questões
- Usar o mesmo tipo de pegadinha nas 3 questões
- Iniciar dois enunciados da mesma forma
- Questões que pareçam variações mínimas umas das outras

As 3 questões devem parecer retiradas de provas DIFERENTES, não de uma única prova.

9. DISTRIBUIÇÃO OBRIGATÓRIA DA RESPOSTA CORRETA

Cada questão DEVE ter a resposta correta em uma letra DIFERENTE.
As 3 questões devem ter as respostas corretas em 3 letras distintas (ex: A, C, E — ou B, D, A — nunca todas iguais).
IMPORTANTE: É PROIBIDO colocar a resposta correta na mesma letra em mais de uma questão.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ESTILO ESPECÍFICO DE PORTUGUÊS FGV
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Quando o tema envolver Língua Portuguesa:

- priorize interpretação e inferência
- explore reescrita de frases
- preserve ou altere sentido propositalmente
- trabalhe efeitos semânticos
- utilize ambiguidades sutis
- cobre conectivos, pontuação e valor discursivo
- utilize textos curtos com linguagem jornalística, institucional ou argumentativa

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FORMATO DE SAÍDA OBRIGATÓRIO (JSON)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Retorne APENAS um JSON válido no formato:

{
  "questions": [
    {
      "dificuldade": "DIFÍCIL",
      "contexto": "Texto-base opcional",
      "enunciado": "Texto completo da questão",
      "alternativas": {
        "A": "Texto da alternativa A",
        "B": "Texto da alternativa B",
        "C": "Texto da alternativa C",
        "D": "Texto da alternativa D",
        "E": "Texto da alternativa E"
      },
      "resposta_correta": "A",
      "comentario": "Explicação COMPLETA e DETALHADA de POR QUE a alternativa correta está certa: fundamento jurídico/técnico, regra aplicada, e por que as demais estão erradas em comparação direta."
    }
  ]
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VALIDAÇÃO ANTES DE RESPONDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Há exatamente 3 questões?
- Todas possuem 5 alternativas?
- Apenas UMA alternativa está correta?
- O campo "correta" explica COMPLETAMENTE por que a alternativa é correta (não apenas repete o enunciado)?
- As alternativas erradas são plausíveis e sofisticadas?
- O estilo está compatível com a FGV?
- As questões estão difíceis?
- Não houve reutilização literal do flashcard?
- O foco está exclusivamente no conceito central?
- As 3 questões cobrem ÂNGULOS DIFERENTES (definição / aplicação / comparação-exceção)? Se duas parecerem semelhantes, reescreva uma delas antes de responder.
- O JSON está válido?
`;

    console.log('[Flashcard] Calling OpenAI API...');
    const result = await openai.chat.completions.create({
      model: 'gpt-5.4-mini',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 1.0,
      max_completion_tokens: 4000,
    });

    const rawContent = result.choices[0]?.message?.content || '{}';
    console.log('[Flashcard] Raw response length:', rawContent.length);

    let questions = [];
    try {
      const parsed = JSON.parse(rawContent);
      const items = parsed.questions || parsed.items || (Array.isArray(parsed) ? parsed : Object.values(parsed)[0]);

      if (!Array.isArray(items)) {
        throw new Error('Formato JSON inválido: "questions" deve ser um array.');
      }

      questions = items.map((item: any) => ({
        mode: 'fgv',
        dificuldade: item.dificuldade || 'DIFÍCIL',
        context: item.contexto || item.context || '',
        enunciado: item.enunciado || item.text || item.question || '',
        alternativas: item.alternativas || { A: '', B: '', C: '', D: '', E: '' },
        resposta_correta: (item.resposta_correta || item.resposta || 'A').toUpperCase(),
        // comentario can be a plain string (new) or object with .correta (old)
        comentario: typeof item.comentario === 'string'
          ? item.comentario
          : (item.comentario?.correta || item.explicacao || item.explanation || ''),
      }));


    } catch (e: any) {
      console.error('[Flashcard] JSON Parse Fail:', rawContent);
      throw new Error('Erro ao processar resposta da IA: ' + e.message);
    }

    if (questions.length === 0) {
      throw new Error('A IA não retornou questões válidas.');
    }

    return NextResponse.json({ questions });

  } catch (error: any) {
    console.error('Flashcard questions API Error:', error);
    return NextResponse.json({
      error: error.message || 'Internal Server Error',
    }, { status: 500 });
  }
}
