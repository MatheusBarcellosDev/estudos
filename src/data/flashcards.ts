export interface Flashcard {
  id: number;
  front: {
    title: string;
    subtitle?: string;
    body?: string;
  };
  back: {
    body: string;
  };
  tags?: string[];
}

export const flashcards: Flashcard[] = [
  {
    id: 1,
    front: {
      title: 'O Teste do "QUE" 🔍',
      subtitle: 'Como saber se posso trocar o "que" por "o qual / a qual / os quais / as quais"',
    },
    back: {
      body: `**A Regra:** Se o "que" se refere a algo que veio logo antes, ele aceita a troca.

**Como fazer:** Olhe para a palavra anterior e escolha a combinação certa:

• Substantivo Masculino ➡️ **o qual / os quais**
• Substantivo Feminino ➡️ **a qual / as quais**

**Exemplo da Prova:**
"As válvulas [que]..." ➡️ Como *válvulas* é **feminino** e são **várias**, trocamos por **as quais**. ✅`,
    },
    tags: ['Português', 'Pronome Relativo', 'Sintaxe'],
  },
  {
    id: 2,
    front: {
      title: 'O Verbo "HAVER" (Sentido de Existir) ⏳',
      subtitle: 'A frase "Haviam muitos vazamentos" está correta? Qual a regra?',
    },
    back: {
      body: `**A Regra:** Quando o verbo **haver** significa "existir" ou "acontecer", ele é **impessoal** (solitário).

**O Comportamento:** Ele **NUNCA** vai para o plural. Fica sempre no singular, pois não tem sujeito.

**Correção do Exemplo:**
• ❌ *Haviam* muitos vazamentos.
• ✅ **Havia** muitos vazamentos. (Mesmo que "vazamentos" esteja no plural).

**Dica de Ouro:** Se você puder trocar "Haver" por "Existir", ele fica travado no singular. 🔒`,
    },
    tags: ['Português', 'Concordância Verbal', 'Sintaxe'],
  },
  {
    id: 3,
    front: {
      title: 'Vírgula: O "Bloco Intercalado" 🚩',
      subtitle: 'Por que a frase "O operador, ao identificar o vazamento, acionou o alarme" tem vírgulas obrigatórias?',
    },
    back: {
      body: `**A Regra:** Quando você "quebra" a ordem direta da frase (Quem + Fez o quê) para inserir uma explicação ou circunstância longa no meio, as vírgulas são **obrigatórias**.

**O que aconteceu:**
• **Sujeito:** O operador
• **Ação:** acionou o alarme.
• **O Intruso:** ", ao identificar o vazamento," ⬅️ Este é um *adjunto adverbial* que foi deslocado para o meio.

**Como identificar:**
Se você puder remover o trecho entre vírgulas e a frase continuar com sentido completo (**O operador acionou o alarme**), as vírgulas serviram para isolar esse "bloco" intruso. ✅`,
    },
    tags: ['Português', 'Pontuação', 'Sintaxe'],
  },
  {
    id: 4,
    front: {
      title: 'A nível de vs. Em nível de 🚫',
      subtitle: 'É correto usar "a nível de" para indicar âmbito ou esfera?',
    },
    back: {
      body: `**A Regra:** A expressão **"a nível de"** é considerada INCORRETA pela norma culta para indicar âmbito.

**O que usar:**
• O correto é **"em nível de"**. ✅
• Ou substitua por: *no âmbito de, quanto a, em relação a*.

**Dica de Ouro:** Só use o "A" se estiver falando de altura física (ex: **A nível do mar**). Para todo o resto, use **EM**.

**Exemplo da Prova:**
• ❌ A nível de operação.
• ✅ **Em nível de** operação / **No âmbito da** operação.`,
    },
    tags: ['Português', 'Regência', 'Vícios de Linguagem'],
  },
  {
    id: 5,
    front: {
      title: 'Embora: Causa ou Concessão? ⚖️',
      subtitle: 'A palavra "embora" indica o motivo (causa) de algo?',
    },
    back: {
      body: `**A Regra:** A conjunção **embora** é sempre **CONCESSIVA**.

**O que significa:** Ela apresenta um obstáculo que NÃO impede a ação principal (ideia de "apesar de").

**Diferença Crucial:**
• **Causal:** Explica a razão (*porque, visto que*).
• **Concessiva:** Explica uma oposição (*embora, mesmo que, ainda que*).

**Exemplo da Prova:**
"**Embora** a pressão tenha aumentado..." ➡️ Ideia de oposição. Portanto, a questão que diz ser "causal" está **ERRADA**. ❌`,
    },
    tags: ['Português', 'Conjunções', 'Sintaxe'],
  },
  {
    id: 6,
    front: {
      title: 'Adjunto Adnominal 🛰️',
      subtitle: 'O que é e como identificar na frase?',
    },
    back: {
      body: `**A Ideia:** É a palavra que fica "grudada" no substantivo para determinar, quantificar ou caracterizar.

**Como identificar:** São os "satélites" do nome. Se você remover o substantivo, eles perdem a função.

**Classes que exercem essa função:**
• Artigos (o, a, um...)
• Adjetivos (novo, azul, atento...)
• Numerais (dois, triplo...)
• Pronomes (meu, este, aquelas...)

**Exemplo:** "Aquelas **três** máquinas **novas**..."
*Substantivo:* máquinas.
*Adjuntos:* Aquelas, três, novas. ✅`,
    },
    tags: ['Português', 'Análise Sintática', 'Sintaxe'],
  },
  {
    id: 7,
    front: {
      title: 'Lógica: Modus Tollens 🧠',
      subtitle: 'Se "P → Q" é verdade e "Q" não aconteceu, o que podemos concluir?',
    },
    back: {
      body: `**A Regra:** Se uma causa (P) sempre gera um efeito (Q), e o efeito NÃO aconteceu, então a causa certamente não existiu.

**Estrutura Lógica:**
1. Se P, então Q.
2. Não ocorreu Q.
3. Logo, não ocorreu P.

**Exemplo da Prova:**
• "Se há vazamento, o alarme dispara."
• "O alarme NÃO disparou."
• **Conclusão:** Não houve vazamento. ✅

**Dica do Mentor:** Pense como um detetive. Se a consequência obrigatória sumiu, o motivo dela também sumiu!`,
    },
    tags: ['Raciocínio Lógico', 'Lógica Sentencial', 'Argumentação'],
  },
  {
    id: 8,
    front: {
      title: 'Negação Lógica: "TODO" e "E" 🚫',
      subtitle: 'Qual a negação de "Todos os A são B E a frase C é verdadeira"?',
    },
    back: {
      body: `**A Regra (Leis de De Morgan):**
1. Troca-se o **E** pelo **OU**.
2. Nega-se as duas proposições.

**O Pulo do Gato (Negação do TODO):**
A negação de "Todo" é **PEA + NÃO** (Pelo menos um não / Existe um que não / Algum não).

**Exemplo da Prova:**
• Proposição: "Todos estão calibrados E o processo está estável".
• Negação: "**Algum** instrumento **não** está calibrado **OU** o processo **não** está estável". ✅

**Por que "Nenhum" está errado?** Porque "Nenhum" é uma negação forte demais. Para quebrar a ideia de que "todos são", basta que "um não seja".`,
    },
    tags: ['Raciocínio Lógico', 'Lógica Sentencial', 'Quantificadores'],
  },
  {
    id: 9,
    front: {
      title: 'Análise Combinatória: Combinação Simples 🧮',
      subtitle: 'Como calcular a escolha de itens quando a ordem NÃO importa?',
    },
    back: {
      body: `**A Regra:** Usamos Combinação quando a ordem dos elementos não altera o grupo (ex: escolher válvulas para manutenção).

**A Fórmula:** C(n, p) = n! / [p! * (n - p)!]

**Aplicação no Problema:**
Escolher 2 válvulas (p) de um total de 5 (n):
C(5, 2) = 5! / [2! * (5 - 2)!]
C(5, 2) = (5 * 4 * 3!) / (2 * 1 * 3!)
C(5, 2) = 20 / 2 = **10** ✅

**Dica de Ouro:** "Se a ordem não importa, a Combinação é o que te suporta!" 💡`,
    },
    tags: ['Matemática', 'Análise Combinatória', 'Sintaxe'],
  },
  {
    id: 10,
    front: {
      title: 'Probabilidade: Eventos Independentes 🎲',
      subtitle: 'Como calcular a chance de "exatamente um" evento ocorrer em dois testes?',
    },
    back: {
      body: `**1. O Conceito do Complementar:**
Se a chance de falha é **0,1**, a de sucesso é **0,9** (o que falta para 1).

**2. As Duas Possibilidades:**
Para "exatamente um" falhar, temos dois caminhos:
• Válvula A falha (0,1) **E** B funciona (0,9) ➡️ 0,1 × 0,9 = **0,09**
• Válvula A funciona (0,9) **E** B falha (0,1) ➡️ 0,9 × 0,1 = **0,09**

**3. O Resultado Final:**
Somamos as duas situações: 0,09 + 0,09 = **0,18**. ✅

**Dica de Ouro:** "E" você multiplica ✖️, "OU" você soma ➕.`,
    },
    tags: ['Matemática', 'Probabilidade', 'Raciocínio Lógico'],
  },
  {
    id: 11,
    front: {
      title: 'Problemas de Torneiras e Vazão 🚰',
      subtitle: 'Como calcular o tempo quando uma bomba enche e um dreno esvazia?',
    },
    back: {
      body: `**A Lógica do Trabalho por Hora:**
1. Determine quanto cada um faz em 1 hora (use frações ou um valor fictício).
2. Se um enche e outro tira, você **subtrai** as capacidades.

**No exemplo:**
• Bomba: enche 1/4 por hora.
• Dreno: tira 1/6 por hora.
• Juntos em 1h: 1/4 - 1/6 = **1/12 do tanque**.

**Conclusão:**
Se eles enchem **1/12** do tanque a cada hora, o tanque levará **12 horas** para encher totalmente.

**Resposta da Questão:** Errado (pois 12h é mais que 10h). ❌`,
    },
    tags: ['Matemática', 'Vazão', 'Razão e Proporção'],
  },
  {
    id: 12,
    front: {
      title: 'Tabela-Verdade: Condicional (P → Q) ➡️',
      subtitle: 'Em qual situação o condicional é considerado FALSO?',
    },
    back: {
      body: `**A Regra Única:** O condicional só é **FALSO** em um único caso: quando a primeira parte é Verdadeira (V) e a segunda é Falsa (F).

**A Tabela:**
• V → V = V
• **V → F = F** ❌ (Vera Fischer)
• F → V = V
• F → F = V

**Dica de Ouro:** Se a primeira parte for Falsa, o resultado será sempre Verdadeiro, não importa o que venha depois! 🔒`,
    },
    tags: ['Raciocínio Lógico', 'Tabela-Verdade', 'Lógica Sentencial'],
  },
  {
    id: 13,
    front: {
      title: 'Conjuntos: União (∪) vs Interseção (∩) 🧩',
      subtitle: 'Como diferenciar os dois símbolos e seus resultados?',
    },
    back: {
      body: `**A Regra Visual:**
• **Interseção (∩):** Pense em uma "ponte". Só passa quem está nos dois lados. (Elementos em comum).
• **União (∪):** Pense em um "copo". Você despeja tudo dentro. (Todos os elementos, sem repetir).

**Exemplo da Prova:**
A = {1, 2, 3} e B = {2, 3, 4}
• **A ∩ B = {2, 3}** ✅ (Apenas os repetidos)
• **A ∪ B = {1, 2, 3, 4}** ❌ (Isso é a união, não a interseção)

**Dica de Ouro:** O símbolo da Interseção parece um "n" de "No comum".`,
    },
    tags: ['Matemática', 'Teoria dos Conjuntos', 'Lógica'],
  },
  {
    id: 14,
    front: {
      title: 'Conjuntos: "Pelo menos um" (União) 🧩',
      subtitle: 'Como calcular o total de pessoas em grupos que se sobrepõem?',
    },
    back: {
      body: `**A Regra:** Para achar o total de pessoas que pertencem a pelo menos um grupo, somamos os grupos e subtraímos quem foi contado duas vezes (a interseção).

**Fórmula:** União = A + B - (A ∩ B)

**No exemplo da prova:**
• Química: 60%
• Mecânica: 40%
• Ambos: 20%
• **Cálculo:** 60 + 40 - 20 = **80%**. ✅

**Conclusão:** A afirmação está **CERTA**, pois 80% conhecem pelo menos uma das duas áreas.`,
    },
    tags: ['Matemática', 'Teoria dos Conjuntos', 'Diagrama de Venn'],
  },
];
