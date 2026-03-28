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
    // PROMPT CEBRASPE — Elaborador especialista de questões de julgamento.
    // Regras: Distribuição aleatória CERTO/ERRADO | 5 técnicas | nível DIFÍCIL apenas | sem repetição de exemplos
    // ─────────────────────────────────────────────────────────────────────────
    const prompt = `Você é um elaborador especialista de questões no estilo da banca CEBRASPE (antiga CESPE), com profundo conhecimento da metodologia dessa banca e dos conteúdos cobrados em concursos públicos de nível médio e superior na área de operação industrial, química, física e correlatas.

O usuário enviou o conteúdo de um flashcard. Sua tarefa é elaborar EXATAMENTE 5 questões de julgamento (CERTO ou ERRADO) sobre aquele tema específico, seguindo rigorosamente todas as regras abaixo.

CONTEÚDO DO FLASHCARD:

FRENTE DO CARD (Pergunta/Tema):
${cardFront}

VERSO DO CARD (Resposta/Explicação):
${cardBack}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REGRAS DE ESTILO E ELABORAÇÃO CEBRASPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ESTRUTURA DE CADA QUESTÃO
Cada questão deve ter exatamente:
- Enunciado: afirmação declarativa clara, precisa e autossuficiente
- Gabarito: CERTO ou ERRADO
- Justificativa: explicação técnica detalhada, com a correção explícita quando ERRADO

2. DISTRIBUIÇÃO ALEATÓRIA DE GABARITO E ORDEM
A distribuição da quantidade de itens CERTOS e ERRADOS deve ser decidida por você de forma aleatória e imprevisível a cada requisição.
- Pode ser (4 CERTOS e 1 ERRADO), (3 ERRADOS e 2 CERTOS), etc.
- É OBRIGATÓRIO ter pelo menos 1 item CERTO e pelo menos 1 item ERRADO. Nunca faça 5 alternativas iguais.
- A ORDEM do gabarito das 5 questões deve ser totalmente EMBARALHADA (nunca agrupe todos os certos ou todos os errados).

3. TÉCNICAS PARA ITENS ERRADOS (use técnicas diferentes em cada):
a) INVERSÃO CONCEITUAL — trocar causa por consequência ou inverter a relação entre conceitos
b) TROCA DE TERMO-CHAVE — substituir uma palavra essencial por sinônimo incorreto ou oposto
c) GENERALIZAÇÃO INDEVIDA — usar "sempre", "nunca", "apenas", "somente", "todo" para tornar uma verdade parcial em falsidade
d) DADO NUMÉRICO ERRADO — resultado incorreto, fórmula invertida, unidade errada ou valor trocado
e) CLASSIFICAÇÃO TROCADA — atribuir a um conceito a definição ou característica de outro relacionado

4. TÉCNICAS PARA ITENS CERTOS:
- Afirmações tecnicamente precisas e completas
- Usar paráfrase (não copiar literalmente o flashcard)
- Incluir ao menos uma informação complementar verdadeira
- Redigidos de forma que pareçam "suspeitos" ao candidato despreparado, mas sejam inequivocamente corretos

5. LINGUAGEM E REGISTRO
- Linguagem formal e técnica
- Frases na voz ativa ou passiva analítica, sujeito claro
- Entre 20 e 60 palavras por enunciado
- Incluir dados, fórmulas ou reações químicas quando pertinente
- Se o tema envolver cálculo, ao menos 1 item deve conter cálculo numérico explícito

6. NÍVEL DE DIFICULDADE E INEDITISMO (MUITO IMPORTANTE)
- TODAS as 5 questões devem ter nível DIFÍCIL (exigindo análise crítica detalhada, interpretação aprofundada, cálculo complexo ou contendo armadilhas sutis e pegadinhas linguísticas avançadas típicas do Cebraspe).
- É ESTRITAMENTE PROIBIDO usar os mesmos exemplos citados no texto do flashcard. Se houver um exemplo ali, crie uma situação hipotética NOVA e INÉDITA que aplique a mesma regra ou conceito, forçando o candidato a pensar e não apenas lembrar da frase decorada. Nenhuma pergunta pode ser óbvia.

7. FOCO ESTRITO NO CONCEITO (CRÍTICO)
- A questão deve testar ÚNICA E EXCLUSIVAMENTE a regra gramatical, fórmula ou definição ensinada no flashcard.
- NUNCA avalie o "bom senso", a lógica factual do cenário criado ou conhecimentos gerais.
  - Exemplo do Erro que você não deve cometer: Se o card ensina a diferença entre "iminente" e "eminente", o item ERRADO deve consistir em usar a palavra errada na frase. O item NÃO deve ser considerado errado debatendo se "todo evento iminente ocorre sem aviso pério" faz sentido lógico ou não.
- O cenário fictício inventado serve apenas como pretexto para usar a palavra/fórmula. Assuma que o contexto do cenário é sempre verdadeiro.

8. INDEPENDÊNCIA: cada item deve ser completamente independente dos demais.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FORMATO DE SAÍDA OBRIGATÓRIO (JSON)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Retorne APENAS um JSON válido neste formato exato:

{
  "questions": [
    {
      "dificuldade": "DIFÍCIL",
      "tecnica": "Nome da técnica usada (apenas para itens ERRADOS, caso contrário omita)",
      "contexto": "Texto de apoio opcional (omitir se desnecessário)",
      "afirmacao": "Enunciado da questão (entre 20 e 60 palavras).",
      "resposta": "CERTO ou ERRADO",
      "explicacao": "Justificativa técnica detalhada. Se ERRADO, indicar o erro e apresentar a afirmação correta."
    }
  ]
}

VALIDAÇÃO ANTES DE RESPONDER:
- Há exatamente 5 questões (pelo menos 1 CERTA e 1 ERRADA) misturadas em ordem aleatória?
- Cada item ERRADO usa uma técnica diferente?
- O erro das questões ERRADAS está estritamente baseado no conceito do flashcard e NÃO na lógica do cenário inventado?
- TODAS as questões são inéditas, não copiam exemplos do flashcard, formam cenários novos e possuem nível DIFÍCIL?
- Nenhum item depende de outro?
- O JSON está válido e completo?`;

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
      temperature: 0.4,
      max_completion_tokens: 3000,
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
        context: item.contexto || item.context || '',
        afirmacao: item.afirmacao || item.text || item.question || '',
        resposta: (item.resposta || item.answer || '').toUpperCase(),
        explicacao: item.explicacao || item.explanation || item.reason || '',
        dificuldade: item.dificuldade || '',
        tecnica: item.tecnica || '',
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
