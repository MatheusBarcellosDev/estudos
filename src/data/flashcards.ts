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
    tags: ['Matemática', 'Análise Combinatória', 'Combinatória'],
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
      title: 'Conjuntos: União, Interseção e Venn 🧩',
      subtitle: 'Como diferenciar os símbolos e calcular "pelo menos um"?',
    },
    back: {
      body: `**Os Dois Operadores:**
| Símbolo | Nome | O que inclui |
|---|---|---|
| **∩** | Interseção | Só quem está nos **dois** lados |
| **∪** | União | **Todos** os elementos, sem repetir |

**Exemplo:** A = {1,2,3} e B = {2,3,4}
• A ∩ B = **{2, 3}** (em comum)
• A ∪ B = **{1, 2, 3, 4}** (todos)

**Fórmula: "Pelo menos um"**
União = A + B − (A ∩ B)
*Ex: 60% + 40% − 20% = **80%** ✅*

**Macete:** ∩ parece a letra **"n"** de **"No comum"**.`,
    },
    tags: ['Matemática', 'Teoria dos Conjuntos', 'Diagrama de Venn'],
  },
  {
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
    front: {
      title: 'Química: Escala de pH 🧪',
      subtitle: 'Como calcular a diferença de acidez entre dois valores de pH?',
    },
    back: {
      body: `**A Regra de Ouro:** O pH é logarítmico. Cada unidade de diferença equivale a uma variação de **10 vezes** na concentração de H⁺.

**O Cálculo Rápido:**
1. Subtraia os valores de pH: 5 - 3 = **2 unidades**.
2. Eleve 10 ao resultado: 10² = **100**.

**Conclusão:** Uma solução de pH 3 é **100 vezes** mais ácida que uma de pH 5. ✅`,
    },
    tags: ['Química', 'Equilíbrio Químico', 'pH'],
  },
  {
    id: 23,
    front: {
      title: 'Dicionário Redox: Agente Oxidante vs. Redutor 📚',
      subtitle: 'Quem oxida, quem reduz e qual o nome de cada um?',
    },
    back: {
      body: `**Regra de Ouro:** O agente é o **oposto** do processo que ele sofre.

| O Nox... | Processo | Título |
|---|---|---|
| **Subiu** (+) | OXIDOU (perdeu e⁻) | **AGENTE REDUTOR** |
| **Desceu** (−) | REDUZIU (ganhou e⁻) | **AGENTE OXIDANTE** |

**Exemplo:** Fe + O₂ → Fe₂O₃
• Fe: 0 → +3 (Subiu = Oxidou) → **Agente Redutor**.
• O₂: 0 → -2 (Desceu = Reduziu) → **Agente Oxidante**.

**Macete:** O Agente Oxidante é o "ladrão" (rouba elétrons). Quem é roubado fica pobre (perde e⁻) = Agente Redutor.`,
    },
    tags: ['Química', 'Redox', 'Eletroquímica'],
  },
  {
    id: 24,
    front: {
      title: 'Nox: Âncoras + Cálculo 🧮',
      subtitle: 'Quais valores são fixos e como calcular o elemento que muda?',
    },
    back: {
      body: `**Âncoras (Decore):**
| Elemento | Nox |
|---|---|
| Substância simples (O₂, Fe...) | **0** |
| Oxigênio (O) | **-2** (exceto H₂O₂: -1) |
| Hidrogênio (H) | **+1** |
| Metais Alcalinos G1 (Na, K) | **+1** |
| Metais Alc. Terrosos G2 (Ca, Mg) | **+2** |
| Alumínio (Al) | **+3** |

**Cálculo:** Soma de todos os Nox = **ZERO** (molécula neutra).
*Ex: Fe₂O₃ → (2x) + (3×-2) = 0 ⇒ x = **+3** ✅*`,
    },
    tags: ['Química', 'Nox', 'Cálculo'],
  },
  {
    id: 25,
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
    id: 26,
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
    id: 27,
    front: {
      title: 'Soluções: Fórmula Mestra + Conversões 🧪',
      subtitle: 'Como calcular qualquer grandeza de solução com uma única lógica?',
    },
    back: {
      body: `**As 3 Fórmulas Integradas:**
| Quer saber... | Use |
|---|---|
| Molaridade (mol/L) | **M = n / V** |
| Mols (n) | **n = m / MM** |
| Molaridade pela massa | **M = m / (MM × V)** |

**Conversão g/L ↔ mol/L:**
• g/L → mol/L: divida por MM
• mol/L → g/L: multiplique por MM

**Exemplo NaCl (MM = 58,5 g/mol):**
58,5 g em 1 L → M = 58,5 / (58,5 × 1) = **1 mol/L** ✅

**Dica ANSA:** Volume sempre em **Litros**! 500 mL = 0,5 L.`,
    },
    tags: ['Química', 'Soluções', 'Cálculo'],
  },
  {
    "id": 28,
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
    "id": 29,
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
    "id": 30,
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
    "id": 31,
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
    id: 32,
    front: {
      title: 'NaCl: O Número Mágico 58,5 🧂',
      subtitle: 'Como identificar concentrações do NaCl de cabeça?',
    },
    back: {
      body: `**Decore (MM = 58,5 g/mol):**
- 58,5 g em 1 L = **1,0 mol/L**
- 29,25 g em 1 L = **0,5 mol/L**
- 117,0 g em 1 L = **2,0 mol/L**

**Cilada CEBRASPE:** A questão dá 29,25 g e chama de 1 mol/L. **ERRADO** — é 0,5 mol/L.

**Regra Rápida:** Divida sempre a massa pela MM antes de marcar Certo!`,
    },
    tags: ['Química', 'Soluções', 'NaCl', 'Cálculo'],
  },
  {
    "id": 33,
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
    "id": 34,
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
    "id": 35,
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
    "id": 36,
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
    "id": 37,
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
    "id": 38,
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
    "id": 39,
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
    "id": 40,
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
    "id": 41,
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
    "id": 42,
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
    "id": 43,
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
    "id": 44,
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
    "id": 45,
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
    "id": 46,
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
    "id": 47,
    "front": {
      "title": "Dado Crítico: Afastamentos no Setor Químico 🏥",
      "subtitle": "Como fundamentar a gravidade dos riscos ocupacionais?"
    },
    "back": {
      "body": "**Dado:** +18 mil afastamentos/ano por doenças ocupacionais (Observatório SST, 2022).\n\n**Uso na Redação (P3):**\n'A urgência na fiscalização rigorosa é evidenciada pelos dados do **Observatório de Segurança e Saúde no Trabalho**, que registrou mais de **18 mil afastamentos** no setor químico em 2022, evidenciando falhas no monitoramento de agentes tóxicos.'\n\n**Dica:** Use este dado para concluir que o custo da prevenção é menor que o custo social e econômico do afastamento."
    },
    "tags": ["Dados", "Redação", "Saúde Ocupacional", "Indústria Química", "ANSA 2026"]
  },
  {
    "id": 48,
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
    "id": 49,
    "front": {
      "title": "Lei 12.305/2010: PNRS 🏭",
      "subtitle": "Qual a responsabilidade da indústria sobre seus rejeitos?"
    },
    "back": {
      "body": "**Conceito Chave:** Responsabilidade Compartilhada e Logística Reversa.\n\n**O que a lei exige:**\n- Elaboração do Plano de Gerenciamento de Resíduos Sólidos (PGRS).\n- Ordem de prioridade: Não geração > Redução > Reutilização > Reciclagem > Tratamento > Disposição final adequada.\n\n**Uso na Redação (P3):**\n'A **PNRS (Lei 12.305/2010)** estabelece que a responsabilidade pelo ciclo de vida dos produtos é compartilhada, obrigando indústrias químicas a gerenciarem seus resíduos desde a origem até o descarte ambientalmente adequado.'\n\n**No Edital:** Tópico fundamental em 'Gestão Ambiental' e 'Gerenciamento de Resíduos Sólidos'."
    },
    "tags": ["Meio Ambiente", "Lei 12.305", "Sustentabilidade", "ANSA 2026", "Operação"]
  },
  {
    "id": 50,
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
    "id": 51,
    "front": {
      "title": "Lei 13.709/2018: LGPD 💻",
      "subtitle": "Como os dados pessoais devem ser tratados na ANSA?"
    },
    "back": {
      "body": "**Conceito Chave:** Proteção da liberdade e privacidade do cidadão.\n\n**O que a lei exige:**\n- Consentimento explícito para coleta de dados.\n- Adoção de medidas de segurança para evitar vazamentos.\n- Transparência no uso de dados pessoais e sensíveis.\n\n**Uso na Redação (P3):**\n'A implementação da **LGPD (Lei 13.709/2018)** nas empresas públicas é um pilar da ética digital, pois obriga o uso de protocolos de segurança para proteger informações de trabalhadores contra o uso indevido.'\n\n**No Edital:** Item obrigatório em 'Noções de Informática' para todas as ênfases."
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
      "body": "**Dado de Impacto:** O Brasil é o 4º país com mais mortes no trabalho no mundo (Fonte: OIT).\n\n**Uso na Redação (P3):**\n'A necessidade de uma cultura de prevenção é urgente, visto que o Brasil ocupa o **quarto lugar no ranking mundial de acidentes fatais**, segundo a OIT. Esse cenário exige que indústrias de alto risco, como a de nitrogenados, sigam rigorosamente as normas de segurança de processo.'\n\n**Conexão com o Edital:** Fundamenta os tópicos de 'Investigação e análise de acidentes' e 'Causas e consequências dos acidentes'."
    },
    "tags": ["Dados", "Segurança do Trabalho", "OIT", "Redação", "ANSA 2026"]
  },
  {
    id: 69,
    front: {
      title: 'Eficiência Térmica (η) ⚙️',
      subtitle: 'Como calcular? Máquina recebe 800 J e realiza 200 J.',
    },
    back: {
      body: `**Fórmula Mestra:** η = W / Q

| Elemento | Valor |
|---|---|
| Trabalho (W) | 200 J |
| Calor Total (Q) | 800 J |
| Eficiência | 200/800 = **1/4 = 25%** |

**Macete:** Se η = 25%, então **75% foi descartado** como calor para o ambiente (fonte fria).

**Cilada Cebraspe:** Confundir W (trabalho útil) com Q (calor total recebido). Sempre divida pelo calor recebido (η = W/Q).`,
    },
    tags: ['Física', 'Termodinâmica', 'Cálculo', 'ANSA 2026', 'Operação'],
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
  },

  {
    id: 83,
    front: {
      title: 'Concordância Verbal: Sujeito Composto 📝',
      subtitle: 'Quando pluralizar é obrigatório, e quando é facultativo?',
    },
    back: {
      body: `**1. Sujeito Anteposto (antes do verbo) → plural obrigatório.**
*Ex: "Governo e sociedade **atuam**".*

**2. Sujeito Posposto (depois do verbo) → plural ou concorda com o núcleo próximo.**
*Ex: "**Atuam** governo e sociedade" OU "**Atua** governo e sociedade".* ✅

**Cilada #1:** "Há dois sujeitos." **ERRADO** — o sujeito é **um** composto; os núcleos é que são vários.
**Cilada #2:** Concordar com o mais próximo quando posposto é **PERMITIDO**, não é erro.`,
    },
    tags: ['Português', 'Concordância Verbal', 'ANSA 2026'],
  },
  {
    "id": 86,
    "front": {
      "title": "Vírgula: Adjunto Adverbial Deslocado 🚩",
      "subtitle": "Quando a vírgula deixa de ser opcional?"
    },
    "back": {
      "body": "**Critério do Cebraspe:**\n- **Curto (até 2 palavras):** Vírgula é **FACULTATIVA**.\n  *Ex: 'No Brasil(,) a transição avança'.*\n\n- **Longo (3 ou mais palavras):** Vírgula é **OBRIGATÓRIA**.\n  *Ex: 'Em decorrência da crise energética**,** o país investe'.*\n\n**Atenção:** Se a banca perguntar se a retirada da vírgula de um adjunto CURTO mantém a correção gramatical, a resposta é **SIM**."
    },
    "tags": ["Português", "Pontuação", "Vírgula", "ANSA 2026"]
  },
  {
    "id": 87,
    "front": {
      "title": "Conectivo 'COMO' 🔗",
      "subtitle": "Quais os 3 valores principais em prova?"
    },
    "back": {
      "body": "1. **Causal (Início de frase):** Equivale a 'Visto que / Já que'.\n   *Ex: 'Como não havia sol, a geração caiu'.*\n\n2. **Conformativo:** Equivale a 'Conforme / Segundo'.\n   *Ex: 'Atuam como determina a lei'.*\n\n3. **Comparativo:** Estabelece relação de semelhança.\n   *Ex: 'A amônia é volátil como o éter'.*\n\n**Dica:** O Cebraspe adora trocar 'causal' por 'conformativo' para tornar o item **ERRADO**."
    },
    "tags": ["Português", "Conectivos", "Coesão", "ANSA 2026"]
  },
  {
    "id": 88,
    "front": {
      "title": "Voz Ativa vs. Voz Passiva ⚙️",
      "subtitle": "Como identificar a transposição?"
    },
    "back": {
      "body": "- **Voz Ativa:** O sujeito faz a ação.\n  *Ex: 'O operador (S) acionou a bomba (Obj. Direto)'.*\n\n- **Voz Passiva:** O sujeito sofre a ação.\n  *Ex: 'A bomba (S. Paciente) foi acionada pelo operador'.*\n\n**Regra de Ouro:** Só existe voz passiva se o verbo for **Transitivo Direto (VTD)**. Verbos de ligação (ser, estar) ou que pedem preposição (VTI) **NÃO** admitem essa troca.\n\n"
    },
    "tags": ["Português", "Sintaxe", "Vozes Verbais", "ANSA 2026"]
  },
  {
    "id": 89,
    "front": {
      "title": "IP Privado vs. IP Público 💻",
      "subtitle": "Quais são as faixas reservadas para redes internas?"
    },
    "back": {
      "body": "**IP Privado (Rede Interna - Casa/Empresa):**\n- **Classe A:** 10.0.0.0 a 10.255.255.255\n- **Classe B:** 172.16.0.0 a 172.31.255.255\n- **Classe C:** 192.168.0.0 a 192.168.255.255\n\n**IP Público (Internet):**\n- Únicos no mundo inteiro.\n- Gerenciados pelo provedor.\n\n**O Pulo do Gato:** IPs privados **NÃO** são roteáveis na internet diretamente; eles precisam do **NAT** (Network Address Translation) no roteador para navegar."
    },
    "tags": ["Informática", "Redes", "IP", "ANSA 2026"]
  },
  {
    "id": 90,
    "front": {
      "title": "Protocolo HTTP vs. HTTPS 🔒",
      "subtitle": "Qual a diferença crucial para segurança?"
    },
    "back": {
      "body": "**HTTP (HyperText Transfer Protocol):**\n- **Porta Padrão:** 80.\n- **Segurança:** **NENHUMA**. Os dados trafegam em texto puro (qualquer um pode ler).\n\n**HTTPS (HTTP Secure):**\n- **Porta Padrão:** 443.\n- **Segurança:** **SIM**. Usa criptografia (SSL/TLS) para proteger os dados.\n\n**Na Prática:** Em sites de login, bancos ou qualquer coisa que envolva dados sensíveis, o **HTTPS é obrigatório**. O Cebraspe adora perguntar se o HTTP é seguro; a resposta é **NÃO**."
    },
    "tags": ["Informática", "Internet", "Segurança", "ANSA 2026"]
  },
  {
    "id": 91,
    "front": {
      "title": "Direitos do Titular (LGPD) ⚖️",
      "subtitle": "O que você pode exigir da ANSA sobre seus dados?"
    },
    "back": {
      "body": "**Principais Direitos (Art. 18):**\n1. **Acesso e Confirmação:** Saber se tratam seus dados.\n2. **Correção:** Arrumar dados incompletos ou errados.\n3. **Anonimização/Bloqueio:** Para dados desnecessários.\n4. **Portabilidade:** Levar dados para outro fornecedor.\n5. **Eliminação:** Apagar dados (salvo obrigação legal).\n6. **Revogação:** Retirar o consentimento dado antes.\n\n**Dica Cebraspe:** A banca pode dizer que o direito de eliminação é absoluto. **ERRADO.** A empresa pode manter dados por obrigação legal (ex: registros fiscais/trabalhistas)."
    },
    "tags": ["Direito", "LGPD", "ANSA 2026", "Direitos do Titular"]
  },
  {
    "id": 92,
    "front": {
      "title": "Progressão Aritmética (PA) 🔢",
      "subtitle": "Como achar qualquer termo sem somar um por um?"
    },
    "back": {
      "body": "**Fórmula do Termo Geral:**\n$$a_n = a_1 + (n - 1) \\cdot r$$\n\n**O que é cada coisa:**\n- **a_n:** O termo que você quer achar (ex: o 10º).\n- **a_1:** O primeiro termo da sequência.\n- **n - 1:** Quantos 'pulos' você dá (sempre a posição desejada menos 1).\n- **r:** A razão (de quanto em quanto a sequência aumenta).\n\n**Dica de Prova:** Se a PA for decrescente, a razão é negativa. Se a questão pedir a SOMA dos termos, a lógica muda!"
    },
    "tags": ["Raciocínio Lógico", "Matemática", "PA", "ANSA 2026"]
  },

  {
    "id": 95,
    "front": {
      "title": "Atalho: Probabilidade 'Um e Outro' 🎲",
      "subtitle": "Como calcular 60% de 60% rápido?"
    },
    "back": {
      "body": "**Macete:**\n1. Multiplique os números iniciais: 6 * 6 = 36.\n2. O resultado já te dá a base da porcentagem.\n\n**Exemplos Rápidos:**\n- 20% de 20%? -> 2 * 2 = 4 -> 4% (0,04)\n- 50% de 10%? -> 5 * 1 = 5 -> 5% (0,05)\n- 80% de 30%? -> 8 * 3 = 24 -> 24% (0,24)\n\n**Uso na ANSA:** Se a chance de uma bomba falhar é 10% (0,1) e a da reserva também é 10% (0,1), a chance das duas falharem juntas é 1% (0,01)."
    },
    "tags": ["Matemática", "Probabilidade", "Atalho", "ANSA 2026"]
  },
  {
    "id": 97,
    "front": {
      "title": "Cálculo de Massa Molar ⚖️",
      "subtitle": "Como somar o peso de uma molécula?"
    },
    "back": {
      "body": "**Passo a Passo:**\n1. Pegue a fórmula (ex: H₂O).\n2. Veja os pesos na tabela (ou dados da questão): H=1, O=16.\n3. Multiplique a quantidade pelo peso:\n   - H₂: 2 * 1 = 2\n   - O: 1 * 16 = 16\n4. Some tudo: 2 + 16 = 18 g/mol.\n\n**Na Prova ANSA:** O Cebraspe costuma dar números redondos (como o 100 do heptano) para facilitar a regra de três. Se a conta der um número muito 'quebrado', confira se não errou a soma!"
    },
    "tags": ["Química", "Massa Molar", "Estequiometria", "ANSA 2026"]
  },
  {
    "id": 98,
    "front": {
      "title": "Hidrólise Salina: Ácido Forte + Base Forte ⚗️",
      "subtitle": "O sal formado sofre hidrólise?"
    },
    "back": {
      "body": "**Regra de Ouro:**\n- Sais de Ácido Forte + Base Forte (ex: NaCl) **NÃO sofrem hidrólise**.\n- A solução resultante é **NEUTRA (pH = 7)**.\n\n**O que o Cebraspe faz:** Ele diz que o sal de ácido forte torna a solução ácida. **ERRADO.** Ele só faria isso se a base fosse fraca.\n\n**Na Operação ANSA:** Fundamental para o tratamento de efluentes. Se você neutraliza um ácido forte com uma base forte, o descarte final terá pH neutro."
    },
    "tags": ["Química", "Equilíbrio Químico", "pH", "ANSA 2026", "Operação"]
  },
  {
    "id": 99,
    "front": {
      "title": "Emulsão: Líquido + Líquido 🧴",
      "subtitle": "O que define esse tipo de coloide?"
    },
    "back": {
      "body": "**Definição:** Mistura de dois líquidos que normalmente não se misturam (**imiscíveis**).\n\n**Exemplos Clássicos:**\n- **Leite:** Gotículas de gordura dispersas em água.\n- **Maionese:** Óleo e vinagre/ovo.\n- **Petróleo Bruto:** Frequentemente vem com água emulsionada.\n\n**Dica de Prova:** O Cebraspe pode tentar dizer que é uma mistura de sólido e líquido. **ERRADO.** Sólido em líquido é um 'Sol' (ex: tinta). Emulsão é **LÍQUIDO em LÍQUIDO**.\n\n**Na Operação ANSA:** Fundamental para entender a separação de água e óleo em tanques e o uso de agentes desmulsificantes para 'quebrar' a mistura."
    },
    "tags": ["Química", "Coloides", "Emulsão", "ANSA 2026", "Operação"]
  },
  {
    "id": 100,
    "front": {
      "title": "Separação de Emulsões 🏺",
      "subtitle": "Filtração funciona para óleo e água emulsionados?"
    },
    "back": {
      "body": "**Resposta: NÃO.**\n\n**O Erro da Questão:** As partículas coloidais de uma emulsão passam pelos poros do filtro comum.\n\n**Métodos Corretos:**\n1. **Decantação** (Diferença de densidade).\n2. **Centrifugação** (Aceleração da decantação).\n3. **Quebra Química** (Uso de desmulsificantes).\n\n**Dica Cebraspe:** Filtração serve para separar SÓLIDO de LÍQUIDO (mistura heterogênea). Para Líquido + Líquido (emulsão), use Decantação."
    },
    "tags": ["Química", "Separação de Misturas", "Emulsão", "ANSA 2026", "Operação"]
  },
  {
    "id": 101,
    "front": {
      "title": "Agente Oxidante: KMnO₄ 🧪",
      "subtitle": "Qual a sua função principal em reações?"
    },
    "back": {
      "body": "**Definição:** O Permanganato de Potássio é um **FORTE AGENTE OXIDANTE**.\n\n**O que ele faz:**\n- Rouba elétrons de outras substâncias (especialmente orgânicas).\n- Ele próprio sofre **redução** (seu NOX diminui).\n\n**Aparência:** Cristais roxo-escuros que deixam a água violeta.\n\n**Na Operação ANSA:** Usado no tratamento de águas para remover odores, sabores e oxidar metais como Ferro e Manganês, facilitando a remoção por filtração."
    },
    "tags": ["Química", "Oxirredução", "KMnO4", "ANSA 2026", "Operação"]
  },
  {
    "id": 102,
    "front": {
      "title": "Produto de Solubilidade (Kps) ⚖️",
      "subtitle": "O que um Kps pequeno indica?"
    },
    "back": {
      "body": "**Regra Direta:**\n- **Kps Baixo** = Sal **Insolúvel** (forma precipitado fácil).\n- **Kps Alto** = Sal **Solúvel** (dissolve bem na água).\n\n**O Exemplo do FeS:**\n- O Sulfeto de Ferro é um sólido preto que não dissolve quase nada na água. Seu Kps é extremamente pequeno.\n\n**Na Operação ANSA:** Fundamental para o **Tratamento de Efluentes**. Se você quer tirar um metal tóxico da água, você adiciona um reagente para formar um sal de **baixo Kps**. Ele vira um sólido (precipita) e você consegue filtrá-lo ou decantá-lo."
    },
    "tags": ["Química", "Equilíbrio Químico", "Kps", "ANSA 2026", "Operação"]
  },

  {
    "id": 104,
    "front": {
      "title": "O que é Equilíbrio Químico? ⚗️",
      "subtitle": "O que acontece com as velocidades e concentrações?"
    },
    "back": {
      "body": "**As Duas Regras de Ouro:**\n1. **Velocidades:** A velocidade da reação direta fica IGUAL à da inversa ($v_d = v_i$).\n2. **Concentrações:** As quantidades de reagentes e produtos tornam-se CONSTANTES (não mudam mais).\n\n**Cilada do Cebraspe:** Dizer que o equilíbrio é 'estático' (a reação para). **ERRADO.** O equilíbrio é **DINÂMICO**; as reações continuam acontecendo, mas na mesma velocidade, por isso parece parado.\n\n**Na Operação ANSA:** Fundamental para processos como a síntese da Amônia. Se não controlarmos o equilíbrio, a reação 'volta' e perdemos produção."
    },
    "tags": ["Química", "Equilíbrio Químico", "Cinética", "ANSA 2026", "Operação"]
  },
  {
    id: 201,
    front: {
      title: 'Neutralização: produtos da reação 🧪',
      subtitle:
        'O que se forma, em regra, quando um ácido reage com uma base?',
    },
    back: {
      body: `**Regra direta:** Em uma reação de neutralização, formam-se, em regra, **sal + água**.

**Exemplo:**  
HCl + NaOH → NaCl + H₂O

**Cilada Cebraspe:** a banca pode dizer que neutralização forma apenas sal ou apenas água. **Errado.**

**Na Operação ANSA:** esse conceito é importante para tratamento químico, controle de pH e neutralização de correntes ácidas ou básicas.`,
    },
    tags: ['Química', 'Reações Químicas', 'Neutralização', 'ANSA 2026', 'Operação'],
  },
  {
    id: 202,
    front: {
      title: 'pH de solução ácida 📉',
      subtitle: 'Uma solução ácida tem pH maior ou menor que 7?',
    },
    back: {
      body: `**Regra direta:** Solução ácida tem **pH menor que 7**.

**Referência rápida:**  
- pH < 7 → ácido  
- pH = 7 → neutro  
- pH > 7 → básico

**Cilada Cebraspe:** trocar ácido por básico ou afirmar que ácido tem pH superior a 7. **Errado.**

**Na Operação ANSA:** conceito essencial para controle de processo, corrosão, neutralização e efluentes.`,
    },
    tags: ['Química', 'pH', 'Ácidos e Bases', 'ANSA 2026', 'Operação'],
  },
  {
    id: 203,
    front: {
      title: 'Equilíbrio químico: constante ou igual? ⚖️',
      subtitle: 'As concentrações ficam iguais ou apenas constantes?',
    },
    back: {
      body: `**Regra direta:** No equilíbrio químico, as concentrações de reagentes e produtos ficam **constantes**, mas **não necessariamente iguais**.

**O que nunca esquecer:**  
- velocidade da reação direta = velocidade da inversa  
- concentrações = constantes  
- concentrações ≠ obrigatoriamente iguais

**Cilada Cebraspe:** dizer que, em equilíbrio, as concentrações se igualam. **Errado.**

**Na Operação ANSA:** isso é importante para síntese da amônia, rendimento de processo e controle operacional.`,
    },
    tags: ['Química', 'Equilíbrio Químico', 'Cinética', 'ANSA 2026', 'Operação'],
  },
  {
    id: 204,
    front: {
      title: 'Le Chatelier: aumento de reagente ➕',
      subtitle: 'O que acontece com o equilíbrio quando aumentamos um reagente?',
    },
    back: {
      body: `**Regra direta:** O aumento da concentração de um reagente tende a deslocar o equilíbrio no sentido de **consumir esse reagente**, geralmente favorecendo a formação de produtos.

**Exemplo geral:**  
Se A + B ⇌ C + D, aumentar A tende a deslocar para a direita.

**Cilada Cebraspe:** inverter o sentido do deslocamento.  
A lógica é: o sistema tenta **reduzir a perturbação**.

**Na Operação ANSA:** isso ajuda a entender otimização de rendimento e controle de processos químicos.`,
    },
    tags: ['Química', 'Equilíbrio Químico', 'Le Chatelier', 'ANSA 2026', 'Operação'],
  },
  {
    id: 205,
    front: {
      title: 'Oxidação = perda de elétrons 🔄',
      subtitle: 'Na oxidação, a espécie ganha ou perde elétrons?',
    },
    back: {
      body: `**Regra direta:** Na **oxidação**, a espécie **perde elétrons**.

**Resumo-memória:**  
- Oxidação → perda de elétrons  
- Redução → ganho de elétrons

**Outra forma de reconhecer:**  
Se o NOX aumentou, a espécie oxidou.

**Cilada Cebraspe:** trocar oxidação por ganho de elétrons. **Errado.**

**Na Operação ANSA:** conceito central para corrosão, combustão, pilhas e tratamento químico.`,
    },
    tags: ['Química', 'Oxirredução', 'Redox', 'ANSA 2026', 'Operação'],
  },
  {
    id: 206,
    front: {
      title: 'Redução e número de oxidação ⬇️',
      subtitle: 'Se o NOX diminui, houve oxidação ou redução?',
    },
    back: {
      body: `**Regra direta:** Se o número de oxidação (**NOX**) **diminui**, a espécie sofreu **redução**.

**Resumo prático:**  
- NOX subiu → oxidou  
- NOX desceu → reduziu

**Cilada Cebraspe:** afirmar que a diminuição do NOX indica oxidação. **Errado.**

**Na Operação ANSA:** muito cobrado em corrosão, eletroquímica e reações industriais.`,
    },
    tags: ['Química', 'Oxirredução', 'NOX', 'ANSA 2026', 'Operação'],
  },
  {
    id: 207,
    front: {
      title: 'Hidrostática: profundidade e pressão 🌊',
      subtitle: 'A pressão em um fluido em repouso depende da profundidade?',
    },
    back: {
      body: `**Regra direta:** Sim. Em um fluido em repouso, a pressão **aumenta com a profundidade**.

**Ideia-chave:** quanto maior a coluna de fluido acima do ponto, maior a pressão.

**Cilada Cebraspe:** dizer que a pressão é a mesma em qualquer profundidade. **Errado.**

**Na Operação ANSA:** importante para tanques, vasos, medição de nível e sistemas hidráulicos.`,
    },
    tags: ['Física', 'Hidrostática', 'Pressão', 'ANSA 2026', 'Operação'],
  },
  {
    id: 208,
    front: {
      title: 'Equação da continuidade 🚰',
      subtitle: 'Se a área do tubo diminui, o que acontece com a velocidade?',
    },
    back: {
      body: `**Regra direta:** Em escoamento incompressível, se a área da seção transversal **diminui**, a velocidade do fluido **aumenta**.

**Relação básica:**  
A₁v₁ = A₂v₂

**Cilada Cebraspe:** afirmar que área menor reduz a velocidade. **Errado.**

**Na Operação ANSA:** útil para tubulações, bocais, estrangulamentos e interpretação de processo.`,
    },
    tags: ['Física', 'Mecânica dos Fluidos', 'Continuidade', 'ANSA 2026', 'Operação'],
  },
  {
    id: 209,
    front: {
      title: 'Cavitação em bombas centrífugas 🫧',
      subtitle: 'O que caracteriza a cavitação?',
    },
    back: {
      body: `**Regra direta:** Cavitação é a formação e o colapso de bolhas de vapor no fluido, geralmente quando a pressão local cai abaixo da pressão de vapor.

**Consequências:**  
- ruído  
- vibração  
- erosão do rotor  
- perda de desempenho

**Cilada Cebraspe:** confundir cavitação com simples presença de ar no sistema. Não é a mesma coisa.

**Na Operação ANSA:** tema clássico em bombas centrífugas e operação de sistemas de bombeamento.`,
    },
    tags: ['Operações Unitárias', 'Bombas', 'Cavitação', 'ANSA 2026', 'Operação'],
  },
  {
    id: 210,
    front: {
      title: 'Válvula globo x válvula gaveta 🚪',
      subtitle: 'Qual é mais usada para controle de vazão?',
    },
    back: {
      body: `**Regra direta:** A **válvula globo** é mais indicada para **controle de vazão** do que a válvula de gaveta.

**Comparação rápida:**  
- Globo → melhor para regulagem/controle  
- Gaveta → melhor para abertura/fechamento total

**Cilada Cebraspe:** dizer que a gaveta é a mais adequada para controle fino. **Errado.**

**Na Operação ANSA:** importante para leitura de processo e função dos acessórios de tubulação.`,
    },
    tags: ['Equipamentos de Processo', 'Válvulas', 'Tubulações', 'ANSA 2026', 'Operação'],
  },
  {
    id: 211,
    front: {
      title: 'Transmissor pneumático 💨',
      subtitle: 'Que tipo de sinal ele utiliza?',
    },
    back: {
      body: `**Regra direta:** O transmissor pneumático utiliza **pressão de ar comprimido** como sinal.

**Cilada Cebraspe:** afirmar que ele transmite por corrente elétrica como regra geral. **Errado.**

**Na Operação ANSA:** muito útil em instrumentação industrial e ambientes onde sinais pneumáticos ainda são usados.`,
    },
    tags: ['Instrumentação', 'Transmissores', 'Pneumática', 'ANSA 2026', 'Operação'],
  },
  {
    id: 212,
    front: {
      title: 'PID: quais são as três ações? 🎛️',
      subtitle: 'O que significa P, I e D?',
    },
    back: {
      body: `**Regra direta:** PID significa:
- **P** = Proporcional  
- **I** = Integral  
- **D** = Derivativa

**Cilada Cebraspe:** trocar alguma das três ações ou inventar outra letra/função.

**Na Operação ANSA:** base para controle de pressão, temperatura, nível e vazão.`,
    },
    tags: ['Controle de Processo', 'PID', 'Instrumentação', 'ANSA 2026', 'Operação'],
  },
  {
    id: 213,
    front: {
      title: 'PID: ação derivativa 📈',
      subtitle: 'A ação derivativa atua sobre o erro acumulado?',
    },
    back: {
      body: `**Regra direta:** Não. A ação **derivativa** atua sobre a **tendência de variação do erro**, e não sobre o erro acumulado.

**Resumo das ações:**  
- Proporcional → erro atual  
- Integral → erro acumulado  
- Derivativa → tendência do erro

**Cilada Cebraspe:** trocar derivativa por integral. Essa é clássica.

**Na Operação ANSA:** ajuda a estabilizar a resposta do sistema e antecipar variações.`,
    },
    tags: ['Controle de Processo', 'PID', 'Derivativa', 'ANSA 2026', 'Operação'],
  },
  {
    id: 214,
    front: {
      title: 'Permutador casco e tubo 🌡️',
      subtitle: 'Como ocorre a troca de calor nesse equipamento?',
    },
    back: {
      body: `**Regra direta:** No permutador casco e tubo, a troca térmica ocorre entre fluidos **separados por uma superfície sólida**, normalmente a parede do tubo.

**Cilada Cebraspe:** dizer que os fluidos precisam se misturar para haver troca térmica. **Errado.**

**Na Operação ANSA:** equipamento muito importante em aquecimento, resfriamento e recuperação de energia.`,
    },
    tags: ['Operações Unitárias', 'Transferência de Calor', 'Permutadores', 'ANSA 2026', 'Operação'],
  },
  {
    id: 215,
    front: {
      title: 'Filtração: o que ela separa? 🧫',
      subtitle: 'Qual separação é típica da operação de filtração?',
    },
    back: {
      body: `**Regra direta:** A filtração é usada, em geral, para separar **sólidos de fluidos** (líquidos ou gases).

**Exemplo:** separar partículas sólidas de um líquido.

**Cilada Cebraspe:** dizer que filtração separa líquidos miscíveis ou emulsões de forma típica. **Errado.**

**Na Operação ANSA:** importante em tratamento, purificação e remoção de partículas.`,
    },
    tags: ['Operações Unitárias', 'Filtração', 'Separação de Misturas', 'ANSA 2026', 'Operação'],
  },
  {
    id: 216,
    front: {
      title: 'Metano e gás natural 🔥',
      subtitle: 'O metano é hidrocarboneto? É o principal componente do gás natural?',
    },
    back: {
      body: `**Regra direta:** Sim. O **metano (CH₄)** é um hidrocarboneto e é o **principal componente do gás natural**.

**Cilada Cebraspe:** afirmar que metano não é hidrocarboneto ou não é o principal componente do gás natural. **Errado.**

**Na Operação ANSA:** conceito importante para combustíveis, energia e processos industriais.`,
    },
    tags: ['Química Orgânica', 'Hidrocarbonetos', 'Metano', 'ANSA 2026', 'Operação'],
  },
  {
    id: 217,
    front: {
      title: 'Polímeros e monômeros 🧱',
      subtitle: 'Do que são formados os polímeros?',
    },
    back: {
      body: `**Regra direta:** Polímeros são formados por unidades repetitivas chamadas **monômeros**.

**Exemplo:**  
Eteno → polietileno

**Cilada Cebraspe:** inverter e dizer que monômeros são formados por polímeros. **Errado.**

**Na Operação ANSA:** tema cobrado em química orgânica e produtos da indústria química.`,
    },
    tags: ['Química Orgânica', 'Polímeros', 'Monômeros', 'ANSA 2026', 'Operação'],
  },
  {
    id: 218,
    front: {
      title: 'Riscos físicos ⚠️',
      subtitle: 'Ruído, calor e radiações pertencem a qual grupo de risco?',
    },
    back: {
      body: `**Regra direta:** Ruído, calor e radiações são exemplos de **riscos físicos**.

**Outros exemplos de risco físico:**  
- vibração  
- frio  
- pressões anormais

**Cilada Cebraspe:** trocar risco físico por químico ou biológico. **Errado.**

**Na Operação ANSA:** tema essencial em segurança, higiene ocupacional e saúde do trabalhador.`,
    },
    tags: ['Segurança', 'Higiene Ocupacional', 'Riscos Físicos', 'ANSA 2026', 'Operação'],
  },
  {
    id: 219,
    front: {
      title: 'Riscos químicos x biológicos ☣️',
      subtitle: 'Poeiras e vapores químicos são risco químico ou biológico?',
    },
    back: {
      body: `**Regra direta:** Poeiras e vapores químicos são exemplos de **riscos químicos**, não biológicos.

**Risco químico:**  
- poeiras  
- fumos  
- névoas  
- neblinas  
- gases  
- vapores

**Risco biológico:**  
- vírus  
- bactérias  
- fungos  
- parasitas

**Cilada Cebraspe:** classificar agente químico como biológico. **Errado.**

**Na Operação ANSA:** muito importante para segurança do trabalho e identificação correta de exposição ocupacional.`,
    },
    tags: ['Segurança', 'Higiene Ocupacional', 'Riscos Químicos', 'Riscos Biológicos', 'ANSA 2026', 'Operação'],
  },
  {
    id: 220,
    front: {
      title: 'Negação de “algum” 🔁',
      subtitle: 'Qual é a negação lógica de “Algum operador errou o procedimento”?',
    },
    back: {
      body: `**Regra direta:** A negação de “Algum A é B” é “**Nenhum A é B**”.

**Exemplo:**  
- Proposição: “Algum operador errou o procedimento.”  
- Negação: “Nenhum operador errou o procedimento.”

**Cilada Cebraspe:** trocar por “Todo operador não errou” ou outra forma confusa. A forma-padrão lógica é “nenhum”.

**Na Operação ANSA:** essencial para raciocínio lógico e leitura rigorosa de itens da banca.`,
    },
    tags: ['Raciocínio Lógico', 'Quantificadores', 'Negação', 'Cebraspe', 'ANSA 2026', 'Operação'],
  },
  {
    "id": 221,
    "front": {
      "title": "Gerúndio (-ndo) na Sintaxe 📝",
      "subtitle": "Verbo no gerúndio pode ser Adjunto Adverbial?"
    },
    "back": {
      "body": "**REGRA CURTA:**\n- **Verbo** (-ndo) = **ORAÇÃO** (Reduzida).\n- **Advérbio** (Ex: 'de forma coordenada') = **ADJUNTO**.\n\n**O Erro do Cebraspe:** Chamar o verbo 'contribuindo' de 'adjunto adverbial de modo'.\n**Por que está errado?** Porque 'contribuindo' é uma ORAÇÃO que indica **consequência** ou **finalidade**, não o 'modo' como algo é feito.\n\n**Dica:** Se tem verbo, é ORAÇÃO. Não aceite o nome de 'adjunto' sozinho."
    },
    "tags": ["Português", "Gramática", "Gerúndio", "ANSA 2026"]
  },
  {
    "id": 222,
    "front": {
      "title": "Vírgula e Gerúndio Deslocado 📝",
      "subtitle": "Quando a vírgula vira 'obrigação'?"
    },
    "back": {
      "body": "**Regra Visual:**\n\n- **Gerúndio no FIM:** A vírgula é facultativa (geralmente não se usa).\n  *Ex: A planta opera produzindo amônia.*\n\n- **Gerúndio no INÍCIO:** A vírgula é **OBRIGATÓRIA**.\n  *Ex: Produzindo amônia **,** a planta opera.*\n\n**O que o Cebraspe faz:** Ele propõe inverter a frase e pergunta se a vírgula passa a ser obrigatória. **Resposta: SIM.**"
    },
    "tags": ["Português", "Gramática", "Vírgula", "ANSA 2026"]
  },
  {
    "id": 223,
    "front": {
      "title": "Conectivos: 'A fim de' vs. 'Porque' 🎯",
      "subtitle": "É Causa ou é Finalidade?"
    },
    "back": {
      "body": "**A Regra Definitiva:**\n\n- **A FIM DE / PARA / COM O INTUITO DE:** Indicam **FINALIDADE** (Olha para o futuro/objetivo).\n\n- **PORQUE / VISTO QUE / JÁ QUE:** Indicam **CAUSA** (Olha para o passado/motivo).\n\n**O Pulo do Gato:**\nO Cebraspe sempre vai trocar 'Finalidade' por 'Causa'. Se você puder trocar por 'Para', a resposta é FINALIDADE.\n\n*Cuidado:* 'A fim' (finalidade) escreve-se **SEPARADO**. 'Afim' (semelhança) é junto."
    },
    "tags": ["Português", "Gramática", "Conectivos", "ANSA 2026"]
  },
  {
    "id": 224,
    "front": {
      "title": "Concordância: Tanto... Quanto 📝",
      "subtitle": "Singular ou Plural?"
    },
    "back": {
      "body": "**Regra Geral:**\nO verbo deve ir para o **PLURAL**.\n\n**Por que?**\nPorque a expressão correlativa soma os núcleos do sujeito, tornando-o composto.\n\n**Exemplos de Prova:**\n- **Correto:** Tanto o óleo quanto a água **são** fluidos imiscíveis.\n- **Errado:** Tanto o óleo quanto a água é fluido imiscível.\n\n**Dica:** Vale o mesmo para 'Não só... mas também'."
    },
    "tags": ["Português", "Gramática", "Concordância", "ANSA 2026"]
  },
  {
    "id": 225,
    "front": {
      "title": "Morfossintaxe: Substantivo vs. Adjetivo 📝",
      "subtitle": "A palavra 'técnico' tem sempre a mesma função?"
    },
    "back": {
      "body": "**Regra Prática:**\n\n1. **Acompanhado de Artigo (o, os, um):** Geralmente é **SUBSTANTIVO**.\n   *Ex: Os técnicos (Substantivo) chegaram.*\n\n2. **Caracterizando outro Nome:** É **ADJETIVO**.\n   *Ex: O parecer técnico (Adjetivo) foi emitido.*\n\n**O Erro do Cebraspe:** Dizer que é a mesma função. Se a classe muda (de substantivo para adjetivo), a função sintática também muda (de núcleo para adjunto)."
    },
    "tags": ["Português", "Morfossintaxe", "Classes de Palavras", "ANSA 2026"]
  },
  {
    "id": 226,
    "front": {
      "title": "Crase: O Teste do 'AO' 🎯",
      "subtitle": "Como testar sem errar a concordância?"
    },
    "back": {
      "body": "**A Técnica:**\nSubstitua a palavra feminina por uma masculina equivalente.\n\n**O Resultado:**\n- Se virar **AO** ➡️ Tem Crase (**À**).\n- Se virar apenas **O** ➡️ Não tem Crase (**A**).\n\n**Cuidado:** Você deve ajustar o adjetivo também!\n- *Ex:* Refiro-me **à** norma técnica.\n- *Teste:* Refiro-me **ao** regulamento técnico. (Deu AO? Crase confirmada!)"
    },
    "tags": ["Português", "Gramática", "Crase", "ANSA 2026"]
  },
  {
    "id": 227,
    "front": {
      "title": "Negação de 'Todo' e 'Existe' 🚫",
      "subtitle": "Como negar sem cair na pegadinha?"
    },
    "back": {
      "body": "**Regra do X (Inversão):**\n\n1. **Negar o TODO:**\n   - Troque por: **Algum / Existe / Pelo menos um**.\n   - Coloque o **NÃO**.\n   *Mnemônico: TODO se nega com PEA + NÃO.*\n\n2. **Negar o EXISTE / PELO MENOS UM:**\n   - Troque por: **TODO NÃO** ou **NENHUM**.\n\n**CILADA CEBRASPE:** Dizer que a negação de 'Todo' é 'Nenhum'. **ERRADO!** Para desmentir que 'Todos bebem café', basta achar **UM** que não beba."
    },
    "tags": ["Lógica", "Raciocínio Lógico", "Negação", "ANSA 2026"]
  },
  {
    "id": 228,
    "front": {
      "title": "Como dividir por 5 de cabeça? ⚡",
      "subtitle": "Adeus conta armada!"
    },
    "back": {
      "body": "**A Regra:**\n1. Multiplique o número por 2 (o dobro).\n2. Divida por 10 (corte o último zero ou pule uma vírgula).\n\n**Exemplo:**\n- 176 / 5 ➡️ Dobro de 176 = 352 ➡️ Pula a vírgula = 35,2.\n- 880 / 5 ➡️ Dobro de 880 = 1760 ➡️ Tira o zero = 176.\n\n**Por que usar?** Na prova da ANSA, você não tem calculadora. Simplificar e usar macetes de 5 e 10 te dá 2 minutos de vantagem sobre a concorrência."
    },
    "tags": ["Matemática", "Raciocínio Lógico", "Macetes", "ANSA 2026"]
  },
  {
    "id": 229,
    "front": {
      "title": "Inclusão de Conjuntos: A ⊂ B ⊂ C 🧩",
      "subtitle": "Qual a relação entre o primeiro e o último?"
    },
    "back": {
      "body": "**A Regra:**\nSe A está dentro de B, e B está dentro de C, então **A está dentro de C**.\n\n**Símbolos Importantes:**\n- **⊂ (Está contido):** O menor vem primeiro. ($A \\subset C$)\n- **⊃ (Contém):** O maior vem primeiro. ($C \\supset A$)\n\n**Dica de Ouro:** A 'boca' do símbolo sempre abre para o conjunto MAIOR. Se a boca está aberta para o C nas duas formas, a afirmação está correta."
    },
    "tags": ["Lógica", "Conjuntos", "Matemática", "ANSA 2026"]
  },
  {
    "id": 230,
    "front": {
      "title": "Volume do Cano: O Jeito Fácil 📏",
      "subtitle": "Esqueça as fórmulas difíceis!"
    },
    "back": {
      "body": "**Pense assim:**\n1. Calcule o círculo: **3,14 × Raio × Raio**.\n2. Multiplique pelo **Comprimento**.\n\n**O SEGREDO DO CEBRASPE:**\nEles dão o cano em METROS e o raio em CENTÍMETROS.\n- **Sempre transforme o metro em centímetro primeiro!**\n- (Ex: 2 m viram 200 cm).\n\n**Resultado:** O volume sai em cm³ (centímetros cúbicos)."
    },
    "tags": ["Matemática", "Geometria", "Volume", "ANSA 2026"]
  },
  {
    "id": 231,
    "front": {
      "title": "Multiplicando por 10, 100, 1000... ⚡",
      "subtitle": "Como ganhar tempo na prova da ANSA?"
    },
    "back": {
      "body": "**A Regra da Vírgula:**\n- Para multiplicar por **100**, a vírgula pula **2 casas** para a direita.\n- *Ex:* 3,14 × 100 = 314.\n\n**A Regra dos Zeros:**\n- Se o número não tem vírgula, basta **acrescentar os zeros** no final.\n- *Ex:* 314 × 100 = 31.400.\n\n**O Erro Comum:** Esquecer de converter o metro (1 m) para centímetro (100 cm). No volume, as unidades mandam!"
    },
    "tags": ["Matemática", "Macetes", "Volume", "ANSA 2026"]
  },
  {
    "id": 232,
    "front": {
      "title": "Equilíbrio Químico: O que é igual? ⚗️",
      "subtitle": "Concentração ou Velocidade?"
    },
    "back": {
      "body": "**A Regra de Ouro:**\n- **Velocidades:** São obrigatoriamente **IGUAIS** ($v_{direta} = v_{inversa}$).\n- **Concentrações:** São obrigatoriamente **CONSTANTES** (não mudam mais), mas raramente são iguais entre si.\n\n**Cuidado Cebraspe:** A banca dirá que 'parou a reação'. **ERRADO.** O equilíbrio é DINÂMICO, a reação continua acontecendo nos dois sentidos na mesma velocidade."
    },
    "tags": ["Química", "Equilíbrio Químico", "ANSA 2026", "Operação"]
  },
  {
    id: 233,
    front: {
      title: 'Solução Supersaturada 🧪',
      subtitle: 'O que a define e por que a banca afirma que é um estado instável?',
    },
    back: {
      body: `**A Regra:** Uma solução é **supersaturada** quando contém *mais* soluto dissolvido do que o limite máximo permitido (Coeficiente de Solubilidade) para aquela determinada temperatura.

**O Segredo da Instabilidade:**
Este estado só é alcançado ao aquecer o solvente (para dissolver mais) e arrefecê-lo de forma extremamente lenta e cuidadosa. Por isso, é um estado **altamente instável** ("sob tensão").

**A Armadilha de Prova (Cebraspe):**
Qualquer perturbação mínima (um choque no recipiente ou a adição de um "cristal semente") faz com que todo o excesso de soluto **precipite** (vá para o fundo) instantaneamente.

**Palavras-chave para o acerto:**
Supersaturada = Excesso de soluto + Instabilidade + Precipitação fácil. ✅`,
    },
    tags: ['Química', 'Físico-Química', 'Soluções', 'ANSA 2026'],
  },
  {
    id: 234,
    front: {
      title: 'Polímeros: Adição vs. Condensação 🧱',
      subtitle: 'Como diferenciar os dois tipos e o que acontece com o Etileno?',
    },
    back: {
      body: `**1. Polimerização por ADIÇÃO:**
• O monômero TEM ligação dupla ($C=C$).
• A ligação se "abre" para formar a cadeia.
• **Regra de Ouro:** Não perde átomos. **NÃO há subprodutos**.
• *Exemplo:* Etileno ($CH_2=CH_2$) virando Polietileno (sacola plástica).

**2. Polimerização por CONDENSAÇÃO:**
• Monômeros reagem em suas extremidades.
• **Regra de Ouro:** Para se unirem, eles expulsam uma molécula pequena (subproduto).
• *Exemplo:* Formação do PET ou Nylon, que geralmente libera **Água** ($H_2O$).

**Na Prova:** Se a banca disser que a Adição do etileno libera água ou subprodutos, marque **ERRADO** imediatamente. ❌`,
    },
    tags: ['Química Orgânica', 'Polímeros', 'Etileno', 'ANSA 2026'],
  },
  {
    id: 235,
    front: {
      title: 'Modelo de Bohr: O Salto Quântico ⚛️',
      subtitle: 'Quando o elétron emite radiação e quando ele absorve?',
    },
    back: {
      body: `**A Regra da Escada (Níveis de Energia):**
O núcleo é o "chão". Quanto mais longe dele, maior a energia da órbita.

**1. ABSORÇÃO (Subindo a escada):**
Para ir de uma órbita **Menor para uma Maior** (afastar-se do núcleo), o elétron precisa **ABSORVER** energia. Ele fica num estado "excitado".

**2. EMISSÃO (Descendo a escada):**
Para voltar de uma órbita **Maior para uma Menor** (voltar para perto do núcleo), o elétron **EMITE** a energia excedente na forma de radiação (luz/fóton).

**Cilada Cebraspe:** A banca inverte os conceitos, dizendo que ele emite energia ao saltar para uma órbita maior. **Gabarito: ERRADO!** ❌`,
    },
    tags: ['Química', 'Modelos Atômicos', 'Bohr', 'ANSA 2026'],
  },
  {
    id: 236,
    front: {
      title: 'Potencial Elétrico e o Sinal da Carga ⚡',
      subtitle: 'O potencial elétrico é sempre positivo? O que define o seu sinal?',
    },
    back: {
      body: `**A Regra do Sinal (Grandeza Escalar):**
O Potencial Elétrico ($V$) **NÃO** é sempre positivo. Ele "herda" o sinal da carga que o gerou.

**1. Carga Geradora Positiva (+):**
Gera um potencial elétrico **POSITIVO** ($V > 0$) em qualquer ponto ao seu redor.

**2. Carga Geradora Negativa (-):**
Gera um potencial elétrico **NEGATIVO** ($V < 0$) em qualquer ponto ao seu redor.

**Fórmula Mestra:** $V = k \cdot \\frac{Q}{d}$
*(Como 'k' e 'd' são positivos, o sinal de 'Q' dita a regra).*

**Cilada Cebraspe:** A questão afirmou que uma carga negativa gera potencial positivo porque a grandeza é sempre positiva. Totalmente **ERRADO** nos dois pontos! ❌`,
    },
    tags: ['Física', 'Eletrostática', 'Potencial Elétrico', 'ANSA 2026'],
  },
  {
    id: 237,
    front: {
      title: 'Corrente Elétrica: Definição e Unidade no SI ⚡',
      subtitle: 'O que significa 1 Ampere na prática?',
    },
    back: {
      body: `**O Conceito (A "Vazão" de elétrons):**
A corrente elétrica ($i$) é a quantidade de carga elétrica ($Q$) que atravessa o fio dividida pelo tempo ($t$) que ela demora para passar.

**A Fórmula Mestra:**
$$i = \\frac{\\Delta Q}{\\Delta t}$$

**As Unidades no SI (Decore):**
• Carga ($Q$) = **Coulomb (C)**
• Tempo ($t$) = **segundo (s)**
• Corrente ($i$) = **Ampere (A)**

**A Regra de Ouro:** 1 Ampere é exatamente a mesma coisa que **1 Coulomb por segundo**.

**Cilada Cebraspe:** A banca costuma tentar te enganar dizendo que a unidade de corrente é o Volt ou o Watt. Fique atento: Fluxo de carga no tempo é sempre **AMPERE**. ✅`,
    },
    tags: ['Física', 'Eletrodinâmica', 'Corrente Elétrica', 'ANSA 2026'],
  },
  {
    id: 238,
    front: {
      title: 'Circuitos: Série vs. Paralelo 💡',
      subtitle: 'Quem é igual e quem se divide em cada tipo de circuito?',
    },
    back: {
      body: `**A Regra de Ouro (Inverso um do outro):**

**1. Circuito em SÉRIE (Caminho Único):**
• A **Corrente ($i$)** é a mesma em todos os resistores. (Não tem para onde fugir).
• A **Tensão ($V$)** se DIVIDE entre os resistores.

**2. Circuito em PARALELO (Bifurcação):**
• A **Tensão ($V$)** é a mesma em todos os resistores. (Estão ligados nos mesmos pontos).
• A **Corrente ($i$)** se DIVIDE entre os ramos.

**Cilada Cebraspe:** A banca sempre vai descrever o comportamento do circuito em Série, mas no final vai chamá-lo de Paralelo (ou vice-versa). Fique atento à troca de nomes! ✅`,
    },
    tags: ['Física', 'Eletrodinâmica', 'Circuitos Elétricos', 'ANSA 2026'],
  },
  {
    id: 239,
    front: {
      title: 'Lei de Faraday: Indução Eletromagnética 🧲',
      subtitle: 'Como gerar energia com um ímã e o que a velocidade do movimento altera?',
    },
    back: {
      body: `**A Regra do Movimento (Variação do Fluxo):**
Para gerar tensão elétrica (Força Eletromotriz - fem) em um fio, você precisa de **VARIAÇÃO** no campo magnético. Ímã parado não gera energia! É preciso movimentar o ímã perto do fio, ou o fio perto do ímã.

**A Regra da Velocidade (Tempo):**
A tensão gerada é **diretamente proporcional à rapidez** dessa variação.
• Movimento Rápido ➡️ Alta variação ➡️ **MAIOR** fem induzida (Mais energia).
• Movimento Lento ➡️ Baixa variação ➡️ **MENOR** fem induzida (Menos energia).

**A Fórmula Mestra:**
$$fem = - \\frac{\\Delta \\Phi}{\\Delta t}$$
*(A variação do fluxo magnético $\\Phi$ dividida pelo tempo. Quanto menor o tempo, maior a fem).*

**Gabarito:** CERTO ✅.`,
    },
    tags: ['Física', 'Eletromagnetismo', 'Lei de Faraday', 'ANSA 2026'],
  }






];

export const mapaDeMaterias: Record<string, string[]> = {
  "Português": [
    "Português", "Pronome Relativo", "Sintaxe", "Concordância Verbal", "Pontuação",
    "Vírgula", "Regência", "Regência Verbal", "Vícios de Linguagem", "Conjunções",
    "Análise Sintática", "Gramática", "Pronomes", "Colocação Pronominal", "Morfologia",
    "Concordância", "Crase", "Ortografia", "Semântica", "Coesão", "Conectivos",
    "Vozes Verbais", "Gerúndio", "Morfossintaxe", "Classes de Palavras"
  ],

  "Raciocínio Lógico e Matemática": [
    "Raciocínio Lógico", "Lógica Sentencial", "Argumentação", "Quantificadores",
    "Lógica", "Matemática", "Análise Combinatória", "Combinatória", "Probabilidade",
    "Vazão", "Razão e Proporção", "Tabela-Verdade", "Teoria dos Conjuntos",
    "Diagrama de Venn", "Conjuntos", "PA", "Atalho", "Macetes", "Geometria",
    "Volume", "Cebraspe"
  ],

  "Química": [
    "Química", "Reações Químicas", "Termoquímica", "Funções Inorgânicas", "Ácidos e Bases",
    "Bases", "pH", "Equilíbrio Químico", "Redox", "Eletroquímica", "Nox", "Cálculo",
    "Soluções", "Pilhas", "Corrosão", "Exceções", "NaCl", "Diluição", "Le Chatelier",
    "Equilíbrio", "Kc", "Estequiometria", "Balanceamento", "Solução Tampão", "Massa Molar",
    "Coloides", "Emulsão", "Separação de Misturas", "Oxirredução", "Kps", "Cinética",
    "Neutralização", "Química Orgânica", "Alcanos", "Hidrocarbonetos", "Benzeno",
    "Aromáticos", "Polímeros", "Etileno", "Metano", "Monômeros", "Nitrogênio", "Amônia"
  ],

  "Física e Operações Unitárias": [
    "Física", "Termodinâmica", "Energia", "Processos Térmicos", "Ciclo de Rankine",
    "Entropia", "Gases", "Transferência de Calor", "Materiais", "Calorimetria",
    "Segunda Lei", "Estados da Matéria", "Mecânica dos Fluidos", "Empuxo", "Continuidade",
    "Bernoulli", "Reynolds", "Perda de Carga", "Hidráulica", "Bombas", "Cavitação",
    "Hidrostática", "Pressão", "Operações Unitárias", "Permutadores", "Filtração",
    "Equipamentos de Processo", "Válvulas", "Tubulações", "Instrumentação", "Transmissores",
    "Pneumática", "Controle de Processo", "PID", "Derivativa", "Operação"
  ],

  "Segurança e Meio Ambiente": [
    "Segurança do Trabalho", "Segurança", "NR-15", "Saúde Ocupacional", "NR-7",
    "PCMSO", "Indústria Química", "Indústria", "Higiene Ocupacional", "Riscos Físicos",
    "Riscos Químicos", "Riscos Biológicos", "Meio Ambiente", "Lei 9.605", "Lei 12.305",
    "Sustentabilidade"
  ],

  "Direito, Informática e Redação": [
    "Direito Constitucional", "Direito do Trabalho", "Constituição", "Direito",
    "Direitos do Titular", "Informática", "LGPD", "Redes", "IP", "Internet", "Dados",
    "Agronegócio", "Fertilizantes", "OIT", "Redação", "ANSA", "ANSA 2026"
  ]
};

export function getSubjectForCard(card: Flashcard): string {
  if (!card.tags || card.tags.length === 0) return "Outros";

  for (const tag of card.tags) {
    for (const [subject, tags] of Object.entries(mapaDeMaterias)) {
      if (tags.includes(tag)) {
        return subject;
      }
    }
  }

  return "Outros";
}

export const SUBJECT_LIST = Object.keys(mapaDeMaterias).concat(["Outros"]);
