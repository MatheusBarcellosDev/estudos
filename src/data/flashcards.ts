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
  {
    id: 15,
    front: {
      title: 'Regência: Obedecer e a Crase 👮‍♂️',
      subtitle: 'Por que dizemos "obedeceu às normas" com crase?',
    },
    back: {
      body: `**A Regra do Verbo:**
O verbo **Obedecer** é Transitivo Indireto. Ele sempre exige a preposição **"A"**.
*(Quem obedece, obedece A algo).*

**A Formação da Crase:**
• Preposição **A** (do verbo) + Artigo **AS** (das normas) = **ÀS**. ✅

**O Teste do Masculino (Infalível):**
Troque "normas" por "regulamentos":
"Obedeceu **AOS** regulamentos."
*(Se deu **AO** no masculino, dá **À** no feminino!)*

**Cuidado:** Nunca use apenas "obedeceu as normas" na norma culta. ❌`,
    },
    tags: ['Português', 'Regência Verbal', 'Crase'],
  },
  {
    id: 16,
    front: {
      title: 'Pronome Relativo: CUJO 🔗',
      subtitle: 'Quais as duas regras de ouro para usar o "cujo"?',
    },
    back: {
      body: `**1. Posse:** Indica que o termo seguinte pertence ao anterior (Ex: O motor cujo óleo... = óleo do motor). 🛢️

**2. Proibido Artigo:** Nunca se usa artigo (o, a, os, as) logo após o cujo.
• ❌ Cujo o / Cuja a
• ✅ Cujo / Cuja

**Exemplo da Prova:** "O equipamento cujo o manual..." está INCORRETO porque o artigo "o" não pode estar ali.`,
    },
    tags: ['Português', 'Pronomes', 'Sintaxe'],
  },
  {
    id: 17,
    front: {
      title: 'Parônimos: Iminente vs. Eminente 🚨🌟',
      subtitle: 'Qual a diferença entre algo "iminente" e alguém "eminente"?',
    },
    back: {
      body: `**1. Iminente (com I):** Refere-se a algo imediato, que está prestes a acontecer agora.
• Exemplo: "Havia um risco **iminente** de desabamento." 🚨

**2. Eminente (com E):** Refere-se a algo ou alguém excelente, ilustre, que se destaca.
• Exemplo: "Convidamos um **eminente** jurista para a palestra." 🎓

**Dica de Ouro:**
• **I**minente = **I**mediato.
• **E**minente = **E**xcelente/Elevado.`,
    },
    tags: ['Português', 'Ortografia', 'Semântica'],
  },
  {
    id: 18,
    front: {
      title: 'Pronomes: EU vs. MIM ✍️',
      subtitle: 'Quando usar cada um antes de um verbo no infinitivo?',
    },
    back: {
      body: `**A Regra de Ouro:** • **EU:** É sujeito. Ele faz a ação. (Eu vou, eu falo, eu assino). 🏃‍♂️
• **MIM:** É complemento. Ele não faz ação. 🛑

**Macete do Concurseiro:** "Mim não faz nada". Se tem um verbo no infinitivo (terminado em -ar, -er, -ir) logo depois, o correto é usar **EU**.

**Exemplo da Prova:**
• ❌ "Para **mim** assinar" (Incorreto: mim não assina).
• ✅ "Para **eu** assinar" (Correto: eu pratico a ação).

**Dica:** O "mim" só encerra frases ou aparece após preposição sem verbo depois: "Entregue o relatório para **mim**."`,
    },
    tags: ['Português', 'Gramática', 'Pronomes'],
  },
  {
    id: 19,
    front: {
      title: 'Conjunções: Embora (Concessiva) 💡',
      subtitle: 'Qual a diferença entre uma oração Condicional e uma Concessiva?',
    },
    back: {
      body: `**1. Concessiva (Embora):** Indica um contraste, algo que acontece "apesar de". 
• Ex: "Embora chova, eu vou." (Vou mesmo com chuva).

**2. Condicional (Se):** Indica uma dependência, algo que só acontece "se" outra ocorrer.
• Ex: "Se chover, eu não vou." (A chuva impede a ida).

**Na Prova:** A questão afirmou que "embora" é condicional. Está **ERRADO**, pois "embora" é a conjunção concessiva mais famosa das provas! ❌`,
    },
    tags: ['Português', 'Conjunções', 'Sintaxe'],
  },
  {
    id: 20,
    front: {
      title: 'Colocação Pronominal: Próclise 🧲',
      subtitle: 'Por que o pronome aparece antes do verbo em "que se mantivesse"?',
    },
    back: {
      body: `**A Regra do Ímã:** Palavras atrativas exigem Próclise.
• O **"QUE"** é uma das palavras atrativas mais comuns.

**A Regra do Início de Frase:**
• Na norma culta, **NUNCA** se inicia frase ou período com pronome oblíquo (me, te, se, lhe...). 🚫
• Ex: Incorreto: "Se acalme". / Correto: "Acalme-se".

**Na Prova:** A questão diz que o "se" está em próclise porque "inicia o período". 
1. Ele não inicia o período (quem inicia é "O supervisor").
2. Se iniciasse, a próclise seria proibida.
**Gabarito: ERRADO.** ❌`,
    },
    tags: ['Português', 'Gramática', 'Colocação Pronominal'],
  },
  {
    id: 21,
    front: {
      title: 'Morfologia: Plural de "Qualquer" 🔄',
      subtitle: 'Como o pronome "qualquer" se comporta no plural?',
    },
    back: {
      body: `**A Regra Única:** O plural de **qualquer** é **quaisquer**. Note que o "s" entra no meio da palavra (quais + quer).

**Substituição em Provas:**
• "Sob qualquer circunstância" (Singular)
• "Em quaisquer circunstâncias" (Plural)

**Por que está certo?**
1. O plural de qualquer está correto (**quaisquer**).
2. O substantivo concordou (**circunstâncias**).
3. O sentido de "em qualquer caso" foi preservado. ✅

**Cuidado:** Nunca use "qualqueres". Isso não existe! ❌`,
    },
    tags: ['Português', 'Morfologia', 'Concordância'],
  },
  {
    id: 22,
    front: {
      title: 'Química: Reação de Neutralização 🧪',
      subtitle: 'O que acontece quando misturamos HCl e NaOH?',
    },
    back: {
      body: `**A Reação:** HCl (Ácido) + NaOH (Base) → **NaCl (Sal) + H₂O (Água)**

**Perfil Térmico:** É uma reação **EXOTÉRMICA** 🔥.
*(Liberta calor ao formar as novas ligações).*

**Gabarito da Questão:** CERTO ✅

**Dica de Ouro:** "Ácido com base, sal e água faz. E o calor? Esse sempre sai de trás!" (Neutralização é quase sempre exotérmica).`,
    },
    tags: ['Química', 'Reações Químicas', 'Termoquímica'],
  },
  {
    id: 23,
    front: {
      title: 'Química: Identificando Força de Ácidos e Bases 🧪',
      subtitle: 'Como saber se a reação será forte sem decorar tudo?',
    },
    back: {
      body: `**Bases Fortes:** Metais das colunas 1 e 2 da Tabela Periódica (ex: NaOH, KOH, Ca(OH)₂).

**Ácidos Fortes:** • Hidrácidos: HCl, HBr, HI.
• Oxiácidos: (Nº de Oxigênios) - (Nº de Hidrogênios). Se sobrar 2 ou mais, é forte!

**Por que importa?** Reações entre Ácido Forte + Base Forte são altamente **Exotérmicas** 🔥 e produzem sais neutros.`,
    },
    tags: ['Química', 'Funções Inorgânicas', 'Ácidos e Bases'],
  },
  {
    id: 24,
    front: {
      title: 'Química: Escala de pH 🧪',
      subtitle: 'Como calcular a diferença de acidez entre dois valores de pH?',
    },
    back: {
      body: `**A Regra de Ouro:** O pH é logarítmico. Cada unidade de diferença equivale a uma variação de **10 vezes** na concentração de H⁺.

**O Cálculo Rápido:**
1. Subtraia os valores de pH: 5 - 3 = **2 unidades**.
2. Eleve 10 ao resultado: 10² = **100**.

**Conclusão:** Uma solução de pH 3 é **100 vezes** mais ácida que uma de pH 5. Se fosse pH 6 para pH 3, seriam 3 unidades (10³ = 1000 vezes). ✅`,
    },
    tags: ['Química', 'Equilíbrio Químico', 'pH'],
  },
  {
    id: 25,
    front: {
      title: 'Química: Oxirredução (Redox) 🧪',
      subtitle: 'Como identificar o Agente Oxidante e o Agente Redutor?',
    },
    back: {
      body: `**Regra de Ouro:** O agente é o oposto do processo.
• Quem **se oxida** (perde e- / Nox sobe) é o **Agente Redutor**.
• Quem **se reduz** (ganha e- / Nox desce) é o **Agente Oxidante**.

**Na questão:**
4Fe + 3O₂ → 2Fe₂O₃
• Fe: Nox 0 → +3 (Oxidou). Logo, é o **Agente Redutor**. 
• O₂: Nox 0 → -2 (Reduziu). Logo, é o **Agente Oxidante**.

**Veredito:** Errado. O ferro perde elétrons, mas isso o torna agente redutor, não oxidante. ❌`,
    },
    tags: ['Química', 'Eletroquímica', 'Redox'],
  },
  {
    id: 26,
    front: {
      title: 'Química: Como Calcular o Nox 🧮',
      subtitle: 'Passo a passo para não errar a conta na hora da prova.',
    },
    back: {
      body: `**1. As Regras Fixas (Âncoras):**
• **Substância Simples:** Sempre é **0** (Ex: Fe, O₂, H₂).
• **Oxigênio (O):** Geralmente **-2**.
• **Hidrogênio (H):** Geralmente **+1**.
• **Metais Alcalinos (G1):** Sempre **+1** (Ex: Na, K).

**2. A Regra da Balança:**
A soma de todos os Nox de uma molécula neutra deve ser **ZERO**.

**3. Exemplo Prático (Fe₂O₃):**
• O oxigênio é -2. Como são 3, temos total de **-6**.
• Para zerar, os 2 ferros precisam somar **+6**.
• Dividindo pelo número de átomos: +6 ÷ 2 = **+3**. ✅

**Dica:** Monte a "equaçãozinha": (2 * x) + (3 * -2) = 0`,
    },
    tags: ['Química', 'Nox', 'Cálculo'],
  },
  {
    id: 27,
    front: {
      title: 'Química: Nox "Invisível" 🕵️‍♂️',
      subtitle: 'Quais valores a banca espera que eu saiba de cor?',
    },
    back: {
      body: `**DECORE ESSAS ÂNCORAS:**
1. **Simples é Zero:** Se o elemento está sozinho ($O_2, Fe, Al$), Nox = 0.
2. **Família 1A (Li, Na, K):** +1.
3. **Família 2A (Mg, Ca, Ba):** +2.
4. **Hidrogênio (H):** +1.
5. **Oxigênio (O):** -2.
6. **Alumínio (Al):** +3.

**Como usar:** Use esses valores para montar a conta e descobrir o elemento que "muda" (como o Ferro, Carbono ou Enxofre).`,
    },
    tags: ['Química', 'Nox', 'Memorização'],
  },
  {
    id: 28,
    front: {
      title: 'Redox: Montando a Equação de Nox 🧮',
      subtitle: 'Como descobrir o elemento que "muda" em um composto?',
    },
    back: {
      body: `**Exemplo: CO₂**
1. **Identifique a Âncora:** Oxigênio (O) = -2.
2. **Multiplique pela quantidade:** 2 átomos x -2 = **-4**.
3. **Crie a Equação:** C + (-4) = 0.
4. **Resolva:** C = **+4**. ✅

**Conclusão para a Prova:**
• O Carbono foi de **0** (simples) para **+4** (composto).
• Ele **PERDEU** elétrons (Oxidou).
• Ele é o **AGENTE REDUTOR**.`,
    },
    tags: ['Química', 'Nox', 'Cálculo'],
  },
  {
    id: 29,
    front: {
      title: 'Dicionário de Prova: Oxirredução 📖',
      subtitle: 'Como traduzir o que a questão está pedindo?',
    },
    back: {
      body: `**Se a questão disser...**
• **"Sofreu Oxidação":** O Nox aumentou (perdeu e-).
• **"Sofreu Redução":** O Nox diminuiu (ganhou e-).
• **"Agente Redutor":** É a substância que **oxidou**.
• **"Agente Oxidante":** É a substância que **reduziu**.

**Cuidado:** O Agente é a molécula INTEIRA do reagente.
*Ex: Se o H do HCl reduziu, o Agente Oxidante é o **HCl**.*`,
    },
    tags: ['Química', 'Redox', 'Terminologia'],
  },
  {
    id: 30,
    front: {
      title: 'Química Industrial: Nox do Nitrogênio (N) 🏭',
      subtitle: 'Valores fixos nos principais compostos da ANSA.',
    },
    back: {
      body: `**Para a prova da ANSA/Petrobras:**
• **N₂ (Ar):** Nox = 0 (Simples).
• **NH₃ (Amônia):** Nox = -3.
• **HNO₃ (Ácido Nítrico):** Nox = +5.

**Dica de Ouro:** Na Amônia ($NH_3$), o Hidrogênio (+1) "manda" na conta. Como são 3 Hs ($+3$), o Nitrogênio é obrigado a ser **-3**.

**Processo Haber-Bosch:**
$N_2 (0) \rightarrow NH_3 (-3)$
O Nitrogênio **reduziu**, logo o $N_2$ é o **Agente Oxidante**.`,
    },
    tags: ['Química', 'ANSA', 'Nitrogênio'],
  },
  {
    id: 31,
    front: {
      title: 'Química: O Oxigênio (O₂) é sempre o quê? 💨',
      subtitle: 'Cuidado com a confusão entre "Agente" e "Processo".',
    },
    back: {
      body: `**Análise do O₂ em reações:**
• O O₂ adora roubar elétrons (ele é eletronegativo).
• Quem rouba elétrons **REDUZ** o próprio Nox (0 p/ -2).
• Quem **REDUZ** é o **AGENTE OXIDANTE**.

**Por que a questão estava errada?**
A questão disse que ele era "Agente Redutor". 
**Correção:** Ele é o Agente Oxidante porque ele oxida o outro, mas ele mesmo sofre Redução.`,
    },
    tags: ['Química', 'Redox', 'Pegadinhas'],
  },
  {
    "id": 32,
    "front": {
      "title": "O Jogo do Sobe e Desce (Redox) 🎢",
      "subtitle": "Como saber quem ganhou ou perdeu elétrons?"
    },
    "back": {
      "body": "**Regra da Dívida (Elétron = Carga Negativa):**\n\n1. **O NÚMERO SUBIU (Ex: 0 → +3):**\n   - **O que houve:** Perdeu \"dívidas\" (elétrons).\n   - **Processo:** OXIDOU (ficou mais positivo).\n   - **Título:** AGENTE REDUTOR (O Doador).\n\n2. **O NÚMERO DESCEU (Ex: 0 → -3):**\n   - **O que houve:** Ganhou \"dívidas\" (elétrons).\n   - **Processo:** REDUZIU (ficou mais negativo).\n   - **Título:** AGENTE OXIDANTE (O Ladrão).\n\n**Dica de Ouro:** Se o número **D**iminuiu, ele **R**eduziu (**DR**). Se ele Reduziu, ele é o Agente **O**xidante (**RO**)."
    },
    "tags": ["Química", "Redox", "Lógica"]
  },
  {
    "id": 33,
    "front": {
      "title": "Cálculo de Concentração (g/L vs mol/L) 🧪",
      "subtitle": "Como transformar mol/L em gramas por litro rapidamente?"
    },
    "back": {
      "body": "**A Fórmula Mágica:**\nConcentração (g/L) = Molaridade (mol/L) × Massa Molar (g/mol)\n\n**Exemplo NaCl (58,5 g/mol):**\n• Se a solução é 1 mol/L → tem 58,5 g/L.\n• Se a solução é 2 mol/L → tem 117 g/L (58,5 × 2).\n\n**Macete:** Pense no mol como uma 'caixa'. Se cada caixa pesa 58,5kg e você tem 2 caixas por litro, você tem 117kg por litro. Simples assim!"
    },
    "tags": ["Química", "Soluções", "Cálculo"]
  },
  {
    "id": 34,
    "front": {
      "title": "Macetes de Soluções: O Triângulo Mágico 🔺",
      "subtitle": "Como isolar o que a questão pede (Massa, Mol ou Volume)?"
    },
    "back": {
      "body": "**Memorize a pirâmide:**\n      m (massa)\n    -----------\n    n (mol) | M (massa molar)\n\n**Como usar:**\n1. Quer a MASSA (g)? Multiplique o mol pela massa molar (n × M).\n2. Quer o MOL (n)? Divida a massa pela massa molar (m / M).\n3. Quer a CONCENTRAÇÃO? Divida o total de mols pelo Volume (n / V).\n\n**Cuidado ANSA:** Se o volume for 500mL, divida o resultado de 1L por 2!"
    },
    "tags": ["Química", "Cálculo", "Soluções"]
  },
  {
    "id": 35,
    "front": {
      "title": "O Pacote Hidroxila (OH) 💧",
      "subtitle": "Quanto vale o grupo OH nas fórmulas?"
    },
    "back": {
      "body": "**Regra de Ouro:**\nO grupo (OH) sempre vale **-1** no total.\n\n**Como usar para achar o Metal:**\n• NaOH: OH é -1 → Na é **+1**.\n• Ca(OH)₂: Dois OH dão -2 → Ca é **+2**.\n• Fe(OH)₃: Três OH dão -3 → Fe é **+3**.\n\n**Por que vale -1?**\nPorque o Oxigênio (-2) se junta com o Hidrogênio (+1). O saldo final é -1."
    },
    "tags": ["Química", "Nox", "Bases", "ANSA"]
  },
  {
    "id": 36,
    "front": {
      "title": "Polos da Pilha: Quem é quem? 🔋",
      "subtitle": "Onde ocorre a Oxidação e onde ocorre a Redução?"
    },
    "back": {
      "body": "**Regra das Letras (Vogal com Vogal / Consoante com Consoante):**\n\n1. **Ânodo (Vogal):** Ocorre a **Oxidação (Vogal)**.\n   - É o polo NEGATIVO da pilha.\n   - É onde os elétrons saem.\n\n2. **Cátodo (Consoante):** Ocorre a **Redução (Consoante)**.\n   - É o polo POSITIVO da pilha.\n   - É para onde os elétrons vão.\n\n**Macete:** Decore a palavra **CRAO** (Cátodo Redução / Ânodo Oxidação). Se a questão misturar vogal com consoante, está ERRADA!"
    },
    "tags": ["Química", "Eletroquímica", "Pilhas", "ANSA"]
  },
  {
    "id": 37,
    "front": {
      "title": "Corrosão de Tubulações (ANSA/Petrobras) 🏗️",
      "subtitle": "Como identificar os processos no cano enferrujado?"
    },
    "back": {
      "body": "**Regras de Ouro na Corrosão:**\n\n1. **Ânodo (Vogal):** É o próprio metal da tubulação. Ele sofre **Oxidação** (Vogal), perde elétrons e 'fura' (perde massa).\n\n2. **Cátodo (Consoante):** É a região onde o 'ladrão' (O₂ ou H⁺) sofre **Redução** (Consoante).\n\n3. **Agente Oxidante:** É quem vem de fora (ar/água) para roubar os elétrons do metal.\n\n**Resumo:** Metal Oxidou no Ânodo = Tubulação estragada."
    },
    "tags": ["Química", "Corrosão", "Indústria", "Redox"]
  },
  {
    "id": 38,
    "front": {
      "title": "A Exceção do Peróxido (H₂O₂) 🧴",
      "subtitle": "Qual o Nox do Oxigênio aqui?"
    },
    "back": {
      "body": "**Cuidado com a Armadilha:**\nNo H₂O₂ (água oxigenada), o Nox do Oxigênio é **-1** (e não -2).\n\n**A Reação de Dismutação:**\n2H₂O₂ → 2H₂O + O₂\n• Parte do O vai de -1 para -2 (REDUZ).\n• Parte do O vai de -1 para 0 (OXIDA).\n\n**Conclusão:** O Oxigênio é o Agente Oxidante E o Agente Redutor ao mesmo tempo. Isso se chama DISMUTAÇÃO."
    },
    "tags": ["Química", "Nox", "Exceções", "ANSA"]
  },
  {
    "id": 39,
    "front": {
      "title": "Conversão: g/L para mol/L 🔄",
      "subtitle": "Como transformar massa em concentração molar rápido?"
    },
    "back": {
      "body": "**A Fórmula de Cabeça:**\nDivida a concentração em gramas (g/L) pela Massa Molar (g/mol).\n\n**Exemplo do NaOH (40 g/mol):**\n- 40 g/L = 1 mol/L\n- 80 g/L = 2 mol/L\n- 20 g/L = 0,5 mol/L\n\n**Dica ANSA:** Se a questão te der a massa em gramas e pedir o mol, é sempre uma conta de divisão simples. Geralmente são números fáceis de dividir (múltiplos)."
    },
    "tags": ["Química", "Cálculo", "Soluções", "Conversão"]
  },
  {
    "id": 40,
    "front": {
      "title": "NaCl: O Número Mágico 58,5 🧂",
      "subtitle": "Como identificar 0,5 mol/L de cabeça?"
    },
    "back": {
      "body": "**Decore os valores do NaCl (58,5 g/mol):**\n- 58,5 g em 1L = **1,0 mol/L**\n- 29,25 g em 1L = **0,5 mol/L**\n- 117,0 g em 1L = **2,0 mol/L**\n\n**O erro da questão:** Ela deu a massa de MEIO mol (29,25) mas disse que a concentração era de UM mol (1 mol/L). \n\n**Dica:** Sempre divida a massa dada pela massa molar antes de marcar 'Certo'!"
    },
    "tags": ["Química", "Cálculo", "Soluções", "NaCl"]
  },
  {
    "id": 41,
    "front": {
      "title": "Conversão: mol/L para g/L 🔄",
      "subtitle": "Como achar a massa (g) a partir do Mol?"
    },
    "back": {
      "body": "**A Fórmula de Cabeça:**\nMultiplique a concentração molar (mol/L) pela Massa Molar (g/mol).\n\n**Exemplo do H₂SO₄ (98 g/mol):**\n- 1 mol/L = 98 g/L\n- 0,5 mol/L = 49 g/L\n- 2 mol/L = 196 g/L\n\n**Dica ANSA:** 0,5 mol/L é a 'metade'. Se a questão der 0,5 mol/L, basta pegar a massa molar e dividir por 2 para achar os g/L!"
    },
    "tags": ["Química", "Cálculo", "Soluções", "H2SO4"]
  },
  {
    "id": 42,
    "front": {
      "title": "Diluição Reversa: Quanto do estoque eu pego? 🧪",
      "subtitle": "Como achar o V1 (Volume inicial) rápido?"
    },
    "back": {
      "body": "**A Lógica da Proporção:**\n1. Veja quantas vezes a solução final é mais fraca que a inicial.\n   - De 4 mol/L para 1 mol/L, ela é **4x mais fraca**.\n2. Isso significa que o volume final deve ser **4x maior** que o volume que você pegou.\n3. Se o volume final é **2000 mL (2L)**, divida por 4:\n   - 2000 / 4 = **500 mL**.\n\n**Dica de Ouro:** Sempre que o volume final e a concentração final forem '1' e '2' (ou números fáceis), use a proporção para não perder tempo com fórmula!"
    },
    "tags": ["Química", "Diluição", "Cálculo", "ANSA"]
  },
  {
    "id": 43,
    "front": {
      "title": "A Fórmula Mestra de Soluções 🧪",
      "subtitle": "Como calcular Molaridade direto pela Massa?"
    },
    "back": {
      "body": "**A FÓRMULA:**\n**M = m / (MM × V)**\n\n**Onde:**\n- **M:** Concentração Molar (mol/L)\n- **m:** Massa dada no enunciado (g)\n- **MM:** Massa Molar (da tabela ou somada)\n- **V:** Volume (CUIDADO: Sempre em LITROS!)\n\n**Macete para isolar a Massa (m):**\nSe a questão pedir 'Quantos gramas...', use:\n**m = M × MM × V**\n(Massa é o produto de tudo!)"
    },
    "tags": ["Química", "Cálculo", "Soluções", "Fórmulas"]
  },
  {
    "id": 44,
    "front": {
      "title": "Molaridade (M): A Fórmula Raiz 🧪",
      "subtitle": "Como calcular quando a questão já dá o Mol (n)?"
    },
    "back": {
      "body": "**A FÓRMULA:**\n**M = n / V**\n\n**Onde:**\n- **n:** Número de mols (mol).\n- **V:** Volume total (Litros).\n\n**Unidade Final:** mol/L (ou Molar).\n\n**Exemplo Rápido:**\nSe eu tenho 0,5 mol de soluto em 2 Litros de água:\nM = 0,5 / 2 = **0,25 mol/L**.\n\n**Dica:** Se o volume estiver em mL, divida por 1000 antes de colocar no 'V'!"
    },
    "tags": ["Química", "Molaridade", "Fórmulas", "Fundamentos"]
  },
  {
    "id": 45,
    "front": {
      "title": "Cálculo de Mols (n): A Chave da Molaridade 🔑",
      "subtitle": "Como achar o 'n' quando a questão dá a massa (g)?"
    },
    "back": {
      "body": "**A FÓRMULA:**\n**n = m / MM**\n\n**Onde:**\n- **n:** Número de mols (o que você quer).\n- **m:** Massa dada no enunciado (g).\n- **MM:** Massa Molar (g/mol).\n\n**Exemplo Prático:**\nSe a questão diz: 'Dissolveu-se 58,5 g de NaCl em água'.\n1. Massa (m) = 58,5 g.\n2. Massa Molar (MM) do NaCl = 58,5 g/mol.\n3. n = 58,5 / 58,5 = **1 mol**.\n\n**Dica:** Se a massa for igual à massa molar, é sempre 1 mol!"
    },
    "tags": ["Química", "Cálculo", "Mols", "Molaridade"]
  },
  {
    "id": 46,
    "front": {
      "title": "Contagem de Mols para Pressão 🎈",
      "subtitle": "Devo olhar o número grande ou o pequeno?"
    },
    "back": {
      "body": "**Regra de Ouro:**\nPara deslocamento de equilíbrio por PRESSÃO, olhe APENAS os **Coeficientes** (os números grandes da frente).\n\n**Exemplo: N₂ + 3H₂ ⇌ 2NH₃**\n• Reagentes: 1 + 3 = **4 mols**.\n• Produtos: **2 mols**.\n\n**Ação da Pressão:**\n- ↑ Pressão: Vai para o lado com MENOR número de mols (2 mols).\n- ↓ Pressão: Vai para o lado com MAIOR número de mols (4 mols).\n\n**Atenção:** Ignore os números pequenos debaixo (átomos) e ignore substâncias sólidas ou líquidas!"
    },
    "tags": ["Química", "Le Chatelier", "Equilíbrio", "ANSA 2026"]
  },
  {
    "id": 47,
    "front": {
      "title": "Temperatura vs. Kc 🌡️",
      "subtitle": "O valor da constante sempre aumenta?"
    },
    "back": {
      "body": "**CUIDADO:** A afirmação 'independente da reação' está sempre errada!\n\n• **Reação ENDO (ΔH > 0):** ↑ Temp = ↑ Kc. (Amigos do calor).\n• **Reação EXO (ΔH < 0):** ↑ Temp = ↓ Kc. (Inimigos do calor).\n\n**Dica de Prova:** Pressão, concentração e catalisadores deslocam o equilíbrio, mas **NÃO mudam o valor do Kc**. Só a temperatura tem esse poder."
    },
    "tags": ["Química", "Equilíbrio Químico", "Kc", "ANSA 2026"]
  },
  {
    "id": 48,
    "front": {
      "title": "Produção de Amônia: N₂ + 3H₂ ⇌ 2NH₃ + Calor 🌡️",
      "subtitle": "O que acontece se o operador aumentar a temperatura?"
    },
    "back": {
      "body": "**Análise da Reação EXOTÉRMICA (ΔH < 0):**\nO calor é um 'produto'. Se você aumenta a temperatura, o sistema tenta consumir esse excesso.\n\n1. **Deslocamento:** O equilíbrio foge para a ESQUERDA (sentido endotérmico).\n2. **Consequência:** A produção de Amônia (NH₃) DIMINUI.\n3. **Valor de Kc:** O Kc DIMINUI (porque há mais reagentes que produtos agora).\n\n**O Dilema do Operador:** Industrialmente usa-se uma temperatura moderada (450°C) apenas para a reação ser rápida o suficiente, mas não tão alta a ponto de destruir o rendimento."
    },
    "tags": ["Química", "Equilíbrio Químico", "Amônia", "ANSA 2026", "Operação"]
  },
  {
    "id": 49,
    "front": {
      "title": "Equação 'Corretamente Representada' 🧪",
      "subtitle": "O que a banca Cebraspe quer dizer com isso?"
    },
    "back": {
      "body": "**Regra de Ouro:**\nPara estar correta, a equação precisa de duas coisas:\n1. Reagentes e Produtos certos.\n2. **BALANCEAMENTO** (Lei de Lavoisier).\n\n**Como conferir em 10 segundos (Método MACHO):**\nContar na ordem: **M**etais, **A**metais, **C**arbono, **H**idrogênio e **O**xigênio.\n\n**No exemplo do Metano:**\n- Lado esquerdo: 4H.\n- Lado direito: Precisa de 2 H₂O para ter 4H.\n- Total de O na direita: 4 átomos.\n- Lado esquerdo: Precisa de 2 O₂ para ter 4O.\n\n**Ajuste Final:** CH₄ + 2O₂ → CO₂ + 2H₂O."
    },
    "tags": ["Química", "Estequiometria", "Balanceamento", "ANSA 2026"]
  },
  {
    "id": 50,
    "front": {
      "title": "Pressão de Vapor e Temperatura 💨",
      "subtitle": "Qual a relação entre calor e a vontade de evaporar?"
    },
    "back": {
      "body": "**Regra Direta (Proporcional):**\n↑ Temperatura = ↑ Pressão de Vapor.\n↓ Temperatura = ↓ Pressão de Vapor.\n\n**Por que isso acontece?**\nO calor aumenta a energia cinética das moléculas. Com mais energia, mais moléculas escapam da superfície do líquido e viram gás, exercendo mais força (pressão).\n\n**Dica de Prova:** O 'Ponto de Ebulição' é atingido quando a **Pressão de Vapor** se iguala à **Pressão Atmosférica** externa."
    },
    "tags": ["Química", "Termodinâmica", "Estados da Matéria", "ANSA 2026"]
  },
  {
    "id": 51,
    "front": {
      "title": "Alcanos: A Fórmula Geral 🧪",
      "subtitle": "Como saber se a molécula é um alcano?"
    },
    "back": {
      "body": "**Fórmula:** CₙH₂ₙ₊₂\n\n**Macete Mental:** 'O dobro mais dois'.\n- **Metano (1C):** 1x2+2 = CH₄ \n- **Etano (2C):** 2x2+2 = C₂H₆\n- **Propano (3C):** 3x2+2 = C₃H₈\n- **Butano (4C):** 4x2+2 = C₄H₁₀\n\n**Uso Prático (ANSA):** Propano e Butano formam o GLP (Gás Liquefeito de Petróleo). O Metano é o principal componente do Gás Natural[cite: 1407, 1462, 1503]."
    },
    "tags": ["Química Orgânica", "Alcanos", "Hidrocarbonetos", "ANSA 2026"]
  },
  {
    "id": 52,
    "front": {
      "title": "Solução Tampão: A Regra do 'Fraco' 🧪",
      "subtitle": "Ácido forte consegue formar tampão?"
    },
    "back": {
      "body": "**RESPOSTA: NÃO.**\n\n**A Receita do Tampão:**\n1. **Ácido FRACO** + seu Sal (Base conjugada).\n   - Ex: Ácido Acético + Acetato de Sódio.\n2. **Base FRACA** + seu Sal (Ácido conjugado).\n   - Ex: Amônia (NH₃) + Cloreto de Amônio.\n\n**Por que o 'Forte' não serve?**\nO ácido forte libera todos os seus íons de uma vez. O tampão precisa de um sistema em **Equilíbrio Químico** para agir como uma 'esponja' e resistir a variações de pH.\n\n**Aplicação na ANSA:** Essencial no tratamento de efluentes e no controle de processos de síntese."
    },
    "tags": ["Química", "pH", "Solução Tampão", "Equilíbrio", "ANSA 2026"]
  },
  {
    "id": 54,
    "front": {
      "title": "Aromáticos (Benzeno): A Regra do Anel 💍",
      "subtitle": "Por que o benzeno é 'especial'?"
    },
    "back": {
      "body": "**Conceito Chave:** Ressonância (ou Deslocalização).\n\n**O que a prova vai dizer:**\n- 'Possuem estabilidade extra' → VERDADEIRO ✅\n- 'São mais estáveis que alcenos comuns' → VERDADEIRO ✅\n- 'A estrutura é um hexágono com elétrons deslocalizados' → VERDADEIRO ✅\n\n**Por que cai:** O Benzeno é um risco ocupacional grave citado no edital (Higiene Ocupacional). Operadores devem conhecer sua natureza química para segurança."
    },
    "tags": ["Química Orgânica", "Benzeno", "Aromáticos", "ANSA 2026", "Operação"]
  },
  {
    "id": 55,
    "front": {
      "title": "Polimerização do Etileno 🏗️",
      "subtitle": "O que acontece com a ligação dupla C=C?"
    },
    "back": {
      "body": "**Processo de Adição:**\n1. A ligação dupla (C=C) do monômero (etileno) se ABRE.\n2. Não há perda de átomos (por isso é 'adição').\n3. Forma-se o polímero (polietileno) com ligações SIMPLES (C-C).\n\n**Representação:**\nn(CH₂=CH₂) → [—CH₂—CH₂—]ₙ\n\n**Importância na Indústria:** É a base da produção de plásticos. O edital da ANSA exige o conhecimento de polímeros para entender os subprodutos e processos petroquímicos."
    },
    "tags": ["Química Orgânica", "Polímeros", "Etileno", "ANSA 2026", "Operação"]
  },
  {
    "id": 56,
    "front": {
      "title": "Primeira Lei da Termodinâmica 🌡️",
      "subtitle": "ΔU = Q − W"
    },
    "back": {
      "body": "**Regra de Sinais (Cuidado!):**\n- **+Q:** Sistema recebe calor (esquenta).\n- **-Q:** Sistema perde calor (esfria).\n- **+W:** Sistema REALIZA trabalho (expande/gasta energia).\n- **-W:** Sistema RECEBE trabalho (é comprimido).\n\n**Conceito:** A energia não pode ser criada nem destruída, apenas transformada.\n\n**Na Operação ANSA:** Se um gás em um pistão recebe calor e não realiza trabalho, toda essa energia vira aumento de temperatura (Energia Interna)."
    },
    "tags": ["Física", "Termodinâmica", "Energia", "ANSA 2026", "Operação"]
  },
  {
    "id": 57,
    "front": {
      "title": "Processo Isocórico (ou Isométrico) 🌡️",
      "subtitle": "O que acontece com o Trabalho (W)?"
    },
    "back": {
      "body": "**Regra de Ouro:**\nVolume Constante = **Trabalho ZERO (W = 0)**.\n\n**Consequência na 1ª Lei:**\nComo ΔU = Q - W e W é 0, então:\n**ΔU = Q**\n\n**O que isso significa?**\nTodo o calor que você fornece ao sistema vira apenas aumento de temperatura e pressão interna, pois o gás não consegue 'gastar' essa energia realizando trabalho.\n\n**Exemplo:** Uma panela de pressão antes de começar a apitar (volume fixo)."
    },
    "tags": ["Física", "Termodinâmica", "Processos Térmicos", "ANSA 2026", "Operação"]
  },
  {
    "id": 58,
    "front": {
      "title": "NR-15: Atividades e Operações Insalubres ⚠️",
      "subtitle": "Como usar esse argumento na Redação da ANSA?"
    },
    "back": {
      "body": "**O que é:** Norma do Ministério do Trabalho que define limites de tolerância para agentes físicos, químicos e biológicos.\n\n**Argumento para Redação:**\n'A conformidade com a **NR-15** é essencial em plantas de fertilizantes, pois estabelece limites de exposição a agentes como **amônia e ácido nítrico**, garantindo a integridade física através do monitoramento contínuo e uso de **EPIs**.'\n\n**Conexão com o Edital:** O item 15.2.3 (Ênfase 22) exige conhecimento em segurança e saúde; a redação (P3) exige atualidades sobre segurança e tecnologia."
    },
    "tags": ["Segurança do Trabalho", "NR-15", "Redação", "ANSA 2026", "Operação"]
  },
  {
    "id": 59,
    "front": {
      "title": "NR-7: Programa de Controle Médico (PCMSO) 🩺",
      "subtitle": "Qual a obrigatoriedade para a saúde do trabalhador?"
    },
    "back": {
      "body": "**O que é:** Norma que obriga a implementação do Programa de Controle Médico de Saúde Ocupacional (PCMSO).\n\n**Ações Principais:**\n- Realização de exames: Admissional, Periódico, Retorno ao trabalho, Mudança de riscos e Demissional.\n- Objetivo: Diagnosticar precocemente danos à saúde causados pelos riscos ambientais (químicos, físicos, etc.).\n\n**Uso na Redação:**\n'Conforme a **NR-7**, as empresas devem garantir o monitoramento da saúde dos colaboradores por meio do **PCMSO**, prevenindo o surgimento de doenças ocupacionais decorrentes da exposição a agentes nocivos.'\n\n**No Edital:** Citada como conhecimento obrigatório para Operação e Enfermagem (Bloco I e II)."
    },
    "tags": ["Saúde Ocupacional", "NR-7", "PCMSO", "Redação", "ANSA 2026"]
  },
  {
    "id": 60,
    "front": {
      "title": "Dado Crítico: Afastamentos no Setor Químico 🏥",
      "subtitle": "Como fundamentar a gravidade dos riscos ocupacionais?"
    },
    "back": {
      "body": "**Dado:** +18 mil afastamentos/ano por doenças ocupacionais (Observatório SST, 2022).\n\n**Uso na Redação (P3):**\n'A urgência na fiscalização rigorosa é evidenciada pelos dados do **Observatório de Segurança e Saúde no Trabalho**, que registrou mais de **18 mil afastamentos** no setor químico em 2022, evidenciando falhas no monitoramento de agentes tóxicos.'\n\n**Aplicação no Edital:** Reforça os tópicos de 'Higiene Ocupacional', 'Prevenção de doenças relacionadas ao trabalho' e 'Estatísticas de acidentes'[cite: 1313, 1318].\n\n**Dica:** Use este dado para concluir que o custo da prevenção é menor que o custo social e econômico do afastamento."
    },
    "tags": ["Dados", "Redação", "Saúde Ocupacional", "Indústria Química", "ANSA 2026"]
  },
  {
    "id": 61,
    "front": {
      "title": "Lei 9.605/1998: Crimes Ambientais ⚖️",
      "subtitle": "Qual a punição para o descarte irregular na indústria?"
    },
    "back": {
      "body": "**O que é:** Lei que criminaliza condutas lesivas ao meio ambiente (poluição, descarte irregular, danos à fauna/flora).\n\n**Pontos Chave:**\n- Responsabiliza a empresa (Pessoa Jurídica) e os gestores (Pessoa Física).\n- Punições: Multas pesadas, suspensão de atividades e até prisão.\n\n**Uso na Redação (P3):**\n'A **Lei 9.605/1998 (Crimes Ambientais)** é um marco na proteção do ecossistema, pois impõe sanções severas a indústrias que negligenciam o descarte de efluentes químicos, reforçando a necessidade de uma operação sustentável.'\n\n**No Edital:** Essencial para o Bloco II (Legislação Ambiental) e para fundamentar o descarte de resíduos tóxicos."
    },
    "tags": ["Meio Ambiente", "Lei 9.605", "Redação", "ANSA 2026", "Operação"]
  },
  {
    "id": 62,
    "front": {
      "title": "Lei 12.305/2010: PNRS 🏭",
      "subtitle": "Qual a responsabilidade da indústria sobre seus rejeitos?"
    },
    "back": {
      "body": "**Conceito Chave:** Responsabilidade Compartilhada e Logística Reversa.\n\n**O que a lei exige:**\n- Elaboração do Plano de Gerenciamento de Resíduos Sólidos (PGRS) .\n- Ordem de prioridade: Não geração > Redução > Reutilização > Reciclagem > Tratamento > Disposição final adequada .\n\n**Uso na Redação (P3):**\n'A **PNRS (Lei 12.305/2010)** estabelece que a responsabilidade pelo ciclo de vida dos produtos é compartilhada, obrigando indústrias químicas a gerenciarem seus resíduos desde a origem até o descarte ambientalmente adequado' .\n\n**No Edital:** Tópico fundamental em 'Gestão Ambiental' e 'Gerenciamento de Resíduos Sólidos'[cite: 1015, 1262]."
    },
    "tags": ["Meio Ambiente", "Lei 12.305", "Sustentabilidade", "ANSA 2026", "Operação"]
  },
  {
    "id": 63,
    "front": {
      "title": "Brasil: Potência em Fertilizantes 🇧🇷",
      "subtitle": "Qual a posição do país no consumo global?"
    },
    "back": {
      "body": "**Dado Estratégico:** 3º maior consumidor de fertilizantes do mundo (Fonte: ANDA).\n\n**Uso na Redação (P3):**\n'Como o Brasil ocupa a posição de **terceiro maior consumidor mundial de fertilizantes**, a operação eficiente de plantas de nitrogenados é vital para a economia, mas exige rigoroso controle ambiental devido à escala da produção'.\n\n**Contexto ANSA:** Justifica a alta demanda por amônia e ureia. Serve para temas sobre agronegócio, soberania nacional (redução da dependência externa) e sustentabilidade industrial."
    },
    "tags": ["Dados", "Agronegócio", "Fertilizantes", "Redação", "ANSA 2026"]
  },
  {
    "id": 64,
    "front": {
      "title": "Lei 13.709/2018: LGPD 💻",
      "subtitle": "Como os dados pessoais devem ser tratados na ANSA?"
    },
    "back": {
      "body": "**Conceito Chave:** Proteção da liberdade e privacidade do cidadão.\n\n**O que a lei exige:**\n- Consentimento explícito para coleta de dados .\n- Adoção de medidas de segurança para evitar vazamentos [cite: 710].\n- Transparência no uso de dados pessoais e sensíveis .\n\n**Uso na Redação (P3):**\n'A implementação da **LGPD (Lei 13.709/2018)** nas empresas públicas é um pilar da ética digital, pois obriga o uso de protocolos de segurança para proteger informações de trabalhadores contra o uso indevido' .\n\n**No Edital:** Item obrigatório em 'Noções de Informática' para todas as ênfases."
    },
    "tags": ["Informática", "LGPD", "Dados", "Redação", "ANSA 2026"]
  },
  {
    "id": 65,
    "front": {
      "title": "Constituição Federal: Artigo 225 🇧🇷",
      "subtitle": "Qual o dever do Estado e da sociedade com o meio ambiente?"
    },
    "back": {
      "body": "**O Texto Sagrado:**\n'Todos têm direito ao meio ambiente ecologicamente equilibrado... impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações.'\n\n**Por que é um 'Coringa'?**\n1. **Responsabilidade:** Define que a preservação não é só do governo, mas também das empresas (coletividade).\n2. **Solidariedade Intergeracional:** Foca no futuro ('futuras gerações').\n\n**Uso na Redação (P3):**\n'Conforme preconiza o **Artigo 225 da Constituição Federal**, o equilíbrio ecológico é um direito fundamental, o que exige das indústrias químicas um manejo rigoroso de seus impactos para garantir a sustentabilidade das futuras gerações.'\n\n**No Edital:** Base para todos os temas de Meio Ambiente e Legislação Ambiental."
    },
    "tags": ["Direito Constitucional", "Meio Ambiente", "Redação", "ANSA 2026", "Operação"]
  },
  {
    "id": 66,
    "front": {
      "title": "Constituição Federal: Artigo 7º (Inciso XXII) 🇧🇷",
      "subtitle": "Qual a obrigação constitucional sobre riscos do trabalho?"
    },
    "back": {
      "body": "**O que garante:** 'Redução dos riscos inerentes ao trabalho, por meio de normas de saúde, higiene e segurança'.\n\n**Pontos Chave:**\n- Torna a segurança do trabalho um Direito Fundamental.\n- Obriga o empregador a investir em prevenção e equipamentos (EPI/EPC).\n- Fundamenta o adicional de insalubridade e periculosidade.\n\n**Uso na Redação (P3):**\n'O **Artigo 7º da Carta Magna** impõe ao empregador o dever de mitigar os riscos laborais, o que na indústria química traduz-se na aplicação rigorosa de protocolos de higiene e segurança para preservar a saúde do operário'.\n\n**No Edital:** Base para 'Segurança e Medicina no Trabalho' e 'Direitos Constitucionais dos Trabalhadores'."
    },
    "tags": ["Direito do Trabalho", "Constituição", "Segurança", "Redação", "ANSA 2026"]
  },
  {
    "id": 67,
    "front": {
      "title": "Brasil: 4º Lugar em Acidentes Fatais 🌎",
      "subtitle": "Qual a gravidade do cenário nacional segundo a OIT?"
    },
    "back": {
      "body": "**Dado de Impacto:** O Brasil é o 4º país com mais mortes no trabalho no mundo (Fonte: OIT).\n\n**Uso na Redação (P3):**\n'A necessidade de uma cultura de prevenção é urgente, visto que o Brasil ocupa o **quarto lugar no ranking mundial de acidentes fatais**, segundo a OIT. Esse cenário exige que indústrias de alto risco, como a de nitrogenados, sigam rigorosamente as normas de segurança de processo'.\n\n**Conexão com o Edital:** Fundamenta os tópicos de 'Investigação e análise de acidentes' [cite: 1315, 1528] e 'Causas e consequências dos acidentes'[cite: 1313, 1527]."
    },
    "tags": ["Dados", "Segurança do Trabalho", "OIT", "Redação", "ANSA 2026"]
  },
  {
    "id": 69,
    "front": {
      "title": "Cálculo de Eficiência: Exemplo 02 ⚙️",
      "subtitle": "Máquina recebe 800 J e realiza 200 J de trabalho."
    },
    "back": {
      "body": "**Passo a Passo:**\n1. Identifique o Trabalho (W): 200 J.\n2. Identifique o Calor Total (Q): 800 J.\n3. Monte a fração: 200 / 800.\n4. Simplifique: 2 / 8 = 1 / 4.\n\n**Resultado:**\n1 / 4 = 0,25.\nMultiplicando por 100 = **25% de eficiência**.\n\n**Dica de Operador:** Se a eficiência é 25%, significa que 75% da energia foi 'jogada fora' como calor para o ambiente (fonte fria)."
    },
    "tags": ["Física", "Termodinâmica", "Cálculo", "ANSA 2026", "Operação"]
  }, {
    "id": 70,
    "front": {
      "title": "Ciclo de Rankine: O Caminho do Vapor 💨",
      "subtitle": "Quais são os 4 processos e equipamentos principais?"
    },
    "back": {
      "body": "**Processos e Equipamentos:**\n1. **Bombeamento:** Realizado pela BOMBA (Líquido).\n2. **Vaporização:** Realizada pela CALDEIRA (Recebe Calor).\n3. **Expansão:** Realizada pela TURBINA (Gera Trabalho).\n4. **Condensação:** Realizada pelo CONDENSADOR (Esfria o vapor).\n\n**No Edital ANSA:** O Bloco II exige o conhecimento de 'Ciclos de geração de potência' e 'Equipamentos auxiliares' como esses."
    },
    "tags": ["Termodinâmica", "Ciclo de Rankine", "Operação", "ANSA 2026"]
  },
  {
    "id": 71,
    "front": {
      "title": "Adiabático Reversível = Isentrópico 🔄",
      "subtitle": "O que acontece com a Entropia (S)?"
    },
    "back": {
      "body": "**A Regra:**\n- **Adiabático:** Troca de calor (Q) é ZERO.\n- **Reversível:** Não há geração interna de entropia (sem atrito).\n\n**Conclusão:**\nA variação de entropia (ΔS) é **ZERO**. A entropia permanece **CONSTANTE**.\n\n**Cilada do Cebraspe:** Dizer que a entropia aumenta porque a temperatura mudou. **ERRADO.** No adiabático, a temperatura muda por causa do trabalho, mas a entropia só muda se houver troca de calor ou irreversibilidade."
    },
    "tags": ["Física", "Termodinâmica", "Entropia", "ANSA 2026", "Operação"]
  },
  {
    "id": 72,
    "front": {
      "title": "Escala Kelvin (Absoluta) 🌡️",
      "subtitle": "Como converter Celsius para Kelvin?"
    },
    "back": {
      "body": "**A Regra:** Somar 273.\n\n**Exemplos Clássicos de Prova:**\n- 0 °C = 273 K (Gelo)\n- 27 °C = 300 K (Ambiente - cai muito!)\n- 100 °C = 373 K (Ebulição da água)\n\n**Por que Kelvin?** Nas fórmulas de gases e termodinâmica (PV = nRT), a temperatura **OBRIGATORIAMENTE** deve estar em Kelvin. Se usar Celsius, o cálculo dá errado."
    },
    "tags": ["Física", "Termodinâmica", "Gases", "ANSA 2026", "Operação"]
  },
  {
    "id": 73,
    "front": {
      "title": "Condutividade Térmica (k) 🌡️",
      "subtitle": "Metal é isolante ou condutor?"
    },
    "back": {
      "body": "**Regra Simples:**\n- **Alta Condutividade (k alto):** O calor passa fácil. Ex: Metais (Cobre, Alumínio, Aço). São **CONDUTORES**.\n- **Baixa Condutividade (k baixo):** O calor tem dificuldade de passar. Ex: Lã de vidro, isopor, madeira, cerâmica. São **ISOLANTES**.\n\n**Cilada do Cebraspe:** Dizer que um material é isolante PORQUE tem alta condutividade. **ERRADO.** É exatamente o contrário.\n\n**Na Operação:** Permutadores de calor usam metais (condutores) para trocar energia; tubulações de vapor usam isolantes para manter a energia."
    },
    "tags": ["Física", "Transferência de Calor", "Materiais", "ANSA 2026", "Operação"]
  },
  {
    "id": 74,
    "front": {
      "title": "Calor Latente de Vaporização (L) 💨",
      "subtitle": "O que acontece com a temperatura durante a mudança de fase?"
    },
    "back": {
      "body": "**Definição:** Energia necessária para mudar 1 kg de líquido para gasoso.\n\n**Regra de Ouro:** Durante o calor latente, a **TEMPERATURA NÃO MUDA**.\n\n**Na Prática (ANSA):** É o princípio de funcionamento das **Caldeiras**. Você queima combustível para fornecer calor latente à água, transformando-a em vapor de alta energia para girar as turbinas.\n\n**Dica:** Se a questão disser que a temperatura aumenta enquanto o líquido vaporiza, marque **ERRADO**."
    },
    "tags": ["Física", "Termodinâmica", "Calorimetria", "ANSA 2026", "Operação"]
  },
  {
    "id": 75,
    "front": {
      "title": "A Direção do Calor (Clausius) 🌡️",
      "subtitle": "O calor pode fluir do frio para o quente?"
    },
    "back": {
      "body": "**A Regra de Ouro:**\n- **Espontâneo:** Quente → Frio (Sempre).\n- **Não Espontâneo:** Frio → Quente (Apenas com TRABALHO externo).\n\n**O que o Cebraspe pode perguntar:**\n'É possível transferir calor de um corpo frio para um quente sem gasto de energia?'\n**Resposta:** ERRADO ❌. Isso violaria a 2ª Lei.\n\n**Na Operação ANSA:** Explica por que precisamos de motores e eletricidade para manter sistemas de resfriamento e liquefação de gases."
    },
    "tags": ["Física", "Termodinâmica", "Segunda Lei", "ANSA 2026", "Operação"]
  },
  {
    "id": 76,
    "front": {
      "title": "Princípio de Arquimedes (Empuxo) ⚓",
      "subtitle": "Qual o valor da força que empurra o corpo para cima?"
    },
    "back": {
      "body": "**A Regra:** Empuxo = Peso do fluido deslocado.\n\n**Consequências:**\n- **Objeto afunda:** Peso > Empuxo.\n- **Objeto boia:** Peso = Empuxo (o objeto desloca uma massa de água igual à sua própria massa).\n- **Objeto sobe:** Empuxo > Peso.\n\n**Na Operação ANSA:** Fundamental para entender a medição de nível por boias (dislocadores) e a separação de fases líquidas (óleo/água) em decantadores."
    },
    "tags": ["Física", "Mecânica dos Fluidos", "Empuxo", "ANSA 2026", "Operação"]
  },
  {
    "id": 77,
    "front": {
      "title": "Equação da Continuidade: A₁v₁ = A₂v₂ 🧪",
      "subtitle": "O que acontece com a velocidade quando a área diminui?"
    },
    "back": {
      "body": "**Regra de Ouro:** Área e Velocidade são **inversamente proporcionais**.\n\n- **Se a Área diminui (estreitamento):** A Velocidade AUMENTA 🚀.\n- **Se a Área aumenta (alargamento):** A Velocidade DIMINUI 🐢.\n\n**Por que isso acontece?** Conservação da Massa. A mesma quantidade de fluido tem que passar por segundo em qualquer ponto do tubo.\n\n**Na Operação ANSA:** Fundamental para entender o funcionamento de bicos injetores, redutores de tubulação e a velocidade de escoamento em trocadores de calor."
    },
    "tags": ["Física", "Mecânica dos Fluidos", "Continuidade", "ANSA 2026", "Operação"]
  },
  {
    "id": 78,
    "front": {
      "title": "Equação de Bernoulli: Quando vale? 🌊",
      "subtitle": "Fluido viscoso e turbulento entra na conta?"
    },
    "back": {
      "body": "**Resposta: NÃO.**\n\n**Condições para Bernoulli (Fluido Ideal):**\n1. **Incompressível** (Densidade constante).\n2. **Não Viscoso** (Sem perda de energia por atrito).\n3. **Regime Laminar** (Oposto de turbulento).\n4. **Regime Permanente** (Estacionário).\n\n**O que o Cebraspe faz:** Ele mistura 'Viscoso' ou 'Turbulento' na frase para tornar o item **ERRADO**. \n\n**Na Prática (ANSA):** Em fluidos reais (viscosos), usamos a 'Equação de Bernoulli Estendida', que inclui a **Perda de Carga** (perda de energia pelo atrito)."
    },
    "tags": ["Física", "Mecânica dos Fluidos", "Bernoulli", "ANSA 2026", "Operação"]
  },
  {
    "id": 79,
    "front": {
      "title": "Número de Reynolds (Re) e Regimes 🌊",
      "subtitle": "Qual o limite para o escoamento Laminar?"
    },
    "back": {
      "body": "**Os Limites Mágicos (Escoamento em Tubos):**\n- **Re < 2.300:** LAMINAR (Linhas paralelas, organizado).\n- **2.300 < Re < 4.000:** TRANSIÇÃO.\n- **Re > 4.000:** TURBULENTO (Mistura, redemoinhos).\n\n**Fórmula Mental:** Re = (Inércia) / (Viscosidade).\n\n**Na Operação ANSA:** Trocadores de calor preferem regime **Turbulento**, pois a mistura melhora a troca térmica. Já para evitar perda de carga (atrito) excessiva, o regime deve ser controlado."
    },
    "tags": ["Física", "Mecânica dos Fluidos", "Reynolds", "ANSA 2026", "Operação"]
  },
  {
    "id": 80,
    "front": {
      "title": "Cavitação: A Regra do NPSH 🛡️",
      "subtitle": "Quem deve ser maior para evitar o problema?"
    },
    "back": {
      "body": "**Regra para SEM cavitação:**\nNPSH Disponível (Sistema) **>** NPSH Requerido (Bomba).\n\n**O que acontece na Cavitação:**\n1. A pressão cai abaixo da pressão de vapor.\n2. Formam-se bolhas de vapor.\n3. As bolhas implodem no rotor.\n\n**Sintomas na Planta:**\n- Barulho de 'pedras' dentro da bomba.\n- Vibração excessiva.\n- Queda de desempenho (vazão/pressão).\n- Erosão do rotor (furos no metal)."
    },
    "tags": ["Hidráulica", "Bombas", "Cavitação", "ANSA 2026", "Operação"]
  },
  {
    "id": 81,
    "front": {
      "title": "Perda de Carga: Darcy-Weisbach 🧪",
      "subtitle": "O que faz a pressão cair no meio do cano?"
    },
    "back": {
      "body": "**A Regra da Perda (h_f):**\n- **Proporcional ao Comprimento (L):** Cano maior = Mais perda.\n- **Proporcional ao Quadrado da Velocidade (v²):** Veloz = Muito mais perda.\n- **Inversamente Proporcional ao Diâmetro (D):** Cano estreito = Mais perda.\n\n**O que o Cebraspe pergunta:** 'A perda de carga é independente da velocidade?'. **ERRADO.** Ela depende do quadrado dela.\n\n**Na Operação ANSA:** Ajuda a entender por que precisamos de bombas mais potentes para levar fluidos a distâncias longas ou através de tubos finos."
    },
    "tags": ["Física", "Mecânica dos Fluidos", "Perda de Carga", "ANSA 2026", "Operação"]
  }





];
