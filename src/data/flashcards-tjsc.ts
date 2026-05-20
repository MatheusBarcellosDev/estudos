import { Flashcard } from "./flashcards";
export type { Flashcard };

// ── Flashcards do TJ-SC (Auxiliar) ─────────────────────────────────────────
// Adicione seus cards abaixo seguindo o modelo do card de demonstração.
export const flashcardsTJSC: Flashcard[] = [

    {
        id: 10002,
        front: {
            title: 'Ética vs Moral 🧠',
            subtitle: 'Qual a diferença fundamental entre Ética e Moral na prova?',
        },
        back: {
            body: `**Ética**: É a ciência, a teoria, universal, atemporal. Reflete sobre o comportamento. Vem do grego *ethos* (modo de ser/caráter).
**Moral**: É a prática, cultural, temporal (muda com o tempo/lugar), regras de conduta de um grupo. Vem do latim *mos* (costumes).

**Macete:** Ética é o **Princípio (Teoria)**, Moral é a **Ação (Prática)**.

**Cuidado na prova:** A FGV adora inverter os conceitos! Se a questão falar de "hábitos e costumes de uma cultura", é Moral. Se falar de "disciplina filosófica que estuda o comportamento humano", é Ética!`,
        },
        tags: ['Ética', 'Conceitos'],
    },
    {
        id: 10003,
        front: {
            title: 'Lei Anticorrupção (L. 12.846) — Responsabilidade da PJ 🏢',
            subtitle: 'Como a Pessoa Jurídica (Empresa) responde por atos de corrupção?',
        },
        back: {
            body: `A Pessoa Jurídica responde de forma **OBJETIVA** nas esferas administrativa e civil.

Isso significa que **não precisa comprovar dolo ou culpa** da empresa. Basta provar que o ato lesivo foi praticado em seu **interesse ou benefício** (direto ou indireto).

**Cuidado na prova:** A banca vai dizer que se o dirigente não teve culpa, a empresa é absolvida. **Falso!** A responsabilidade da empresa (objetiva) é independente da culpa dos diretores.`,
        },
        tags: ['Lei Anticorrupção', 'Responsabilidade Objetiva'],
    },
    {
        id: 10004,
        front: {
            title: 'Improbidade Adm. — O Fim do "Sem Querer" 🚨',
            subtitle: 'A Lei de Improbidade (LIA) pune atos culposos (negligência, imprudência)?',
        },
        back: {
            body: `**NÃO EXISTE MAIS IMPROBIDADE CULPOSA!**

Com a Nova LIA (Lei 14.230/2021), a punição exige a comprovação de **DOLO ESPECÍFICO**.
Ou seja, tem que haver a vontade consciente, intencional e deliberada de obter vantagem ou prejudicar o Estado.

**Cuidado na prova:** Se a historinha da FGV usar as palavras "por descuido", "negligência", "imperícia" ou "sem querer", você **já elimina a alternativa**. Não é improbidade administrativa!`,
        },
        tags: ['Improbidade Administrativa', 'Dolo Específico'],
    },
    {
        id: 10005,
        front: {
            title: 'Improbidade Adm. — Gaveta 1 (Art. 9º) 💰',
            subtitle: 'Como identificar o Enriquecimento Ilícito nas questões da FGV?',
        },
        back: {
            body: `Ocorre quando o agente usa o cargo para **obter vantagem patrimonial indevida** para si (encher o próprio bolso).

**Exemplos clássicos:**
- Receber propina;
- Usar veículos ou servidores públicos para fins particulares;
- Receber grana para tolerar jogos de azar ou contrabando.

**Macete:** Faça a pergunta: *"O agente ganhou alguma coisa? Aumentou o próprio patrimônio ou economizou dinheiro?"* Se **SIM**, é Enriquecimento Ilícito!`,
        },
        tags: ['Improbidade Administrativa', 'Enriquecimento Ilícito'],
    },
    {
        id: 10006,
        front: {
            title: 'Improbidade Adm. — Gaveta 2 (Art. 10) 📉',
            subtitle: 'O que caracteriza o Prejuízo ao Erário?',
        },
        back: {
            body: `É a ação dolosa que causa **rombo/dano financeiro direto aos cofres públicos**, sem que o agente necessariamente embolse a grana.

**Exemplos clássicos:**
- Superfaturamento em licitação;
- Pagar por uma obra ou serviço não realizado;
- Conceder benefício financeiro ou tributário indevido.

**Macete:** *"O Estado perdeu dinheiro, mas o agente NÃO botou no bolso?"* = **Prejuízo ao Erário!**`,
        },
        tags: ['Improbidade Administrativa', 'Prejuízo ao Erário'],
    },
    {
        id: 10007,
        front: {
            title: 'Improbidade Adm. — Gaveta 3 (Art. 11) 📜',
            subtitle: 'Quais são os casos clássicos de Atentado aos Princípios da Adm. Pública?',
        },
        back: {
            body: `São condutas dolosas que violam a honestidade e imparcialidade, mas que **NÃO geram prejuízo financeiro direto e nem enriquecimento**.

**O que mais cai na FGV (Rol Taxativo):**
- **Nepotismo** (nomear parente até 3º grau);
- **Promoção pessoal** (usar recursos para exaltar próprio nome/imagem);
- **Vazar informações sigilosas**.

**Cuidado:** A nova lei **revogou** condutas genéricas! "Retardar ato de ofício" ou "demorar para despachar" por preguiça **não** é mais improbidade.`,
        },
        tags: ['Improbidade Administrativa', 'Princípios'],
    },
    {
        id: 10008,
        front: {
            title: 'Improbidade Adm. — As Punições (P.I.R.S.) ⚖️',
            subtitle: 'Quais são as 4 grandes punições da Improbidade e o que exige Trânsito em Julgado?',
        },
        back: {
            body: `Lembre-se do macete **P.I.R.S.**!
**P** - Perda da função pública.
**I** - Indisponibilidade dos bens.
**R** - Ressarcimento ao erário.
**S** - Suspensão dos direitos políticos.

🚨 **A Pegadinha Suprema:** A Perda da Função Pública e a Suspensão dos Direitos Políticos **EXIGEM o trânsito em julgado** (o processo tem que acabar de vez, sem caber mais recursos) para serem efetivadas.`,
        },
        tags: ['Improbidade Administrativa', 'Sanções'],
    },
    {
        id: 10009,
        front: {
            title: 'Improbidade Adm. — A Herança da Corrupção ⚰️',
            subtitle: 'Se o corrupto morrer, o filho precisa pagar a dívida do próprio bolso?',
        },
        back: {
            body: `**NÃO! A responsabilidade tem um limite!**

Os herdeiros do agente que causou dano ou enriqueceu ilicitamente respondem pela dívida (ressarcimento e sanções pecuniárias), mas **APENAS até o limite do valor da herança recebida**.

**Cuidado na prova:** A banca vai dizer que a suspensão dos direitos políticos ou a perda do cargo passam para o filho. **Mentira!** Penas pessoais **nunca** se transferem, apenas as sanções no "bolso" limitadas à herança.`,
        },
        tags: ['Improbidade Administrativa', 'Herdeiros'],
    },
    {
        id: 10010,
        front: {
            title: 'Improbidade Adm. — Absolvição Criminal 🔓',
            subtitle: 'Ser absolvido por "falta de provas" no crime salva o servidor na improbidade?',
        },
        back: {
            body: `**NÃO SALVA!** As instâncias são independentes.

O servidor **só se safa** da improbidade administrativa por conta do juiz criminal se a sentença penal provar:
1. A **Inexistência do Fato** (o crime nunca ocorreu).
2. A **Negativa de Autoria** (provou-se que não foi ele).
3. Absolvição criminal por **decisão colegiada**.

**Macete:** "Falta de provas" apenas solta da cadeia, mas não impede a demissão e a devolução da grana no processo de improbidade!`,
        },
        tags: ['Improbidade Administrativa', 'Independência das Instâncias'],
    },
    {
        id: 10011,
        front: {
            title: 'Improbidade Adm. — Prazos de Prescrição ⏳',
            subtitle: 'Em quanto tempo a improbidade prescreve e o que é IMPRESCRITÍVEL?',
        },
        back: {
            body: `**A Regra Geral:** As punições da improbidade prescrevem em **8 anos**, contados da data do fato. (Se for infração permanente, conta a partir do dia que o fato cessar).

🚨 **A Exceção de Ouro:** A ação de **Ressarcimento ao Erário** (obrigação de devolver o dinheiro) decorrente de um ato **DOLOSO** é **IMPRESCRITÍVEL**.

**Macete:** O castigo (multa, perda do cargo) "caduca" em 8 anos, mas a dívida para devolver o dinheiro roubado intencionalmente é eterna!`,
        },
        tags: ['Improbidade Administrativa', 'Prescrição'],
    },
    {
        id: 10012,
        front: {
            title: 'Português — Letras, Fonemas e Dígrafos 🔤',
            subtitle: 'Qual a diferença entre Letra e Fonema? E o que é um Dígrafo?',
        },
        back: {
            body: `**Letras**: O sinal gráfico (o desenho).
**Fonemas**: O som da fala.
**Dígrafo**: É o encontro de duas letras que representam **apenas UM fonema (som)**. Ex: CH, LH, NH, RR, SS, QU, GU.

**Pegadinha FGV:** Na palavra "Chuva", temos 5 letras, mas apenas 4 fonemas! O "CH" é um dígrafo consonantal (tem som de X).`,
        },
        tags: ['Língua Portuguesa', 'Fonologia'],
    },
    {
        id: 10013,
        front: {
            title: 'Português — Acentuação das Proparoxítonas 📖',
            subtitle: 'Qual é a regra mágica de acentuação para palavras proparoxítonas?',
        },
        back: {
            body: `A regra é simples e direta: **TODAS SÃO ACENTUADAS!**
A sílaba tônica é a antepenúltima.

**Exemplos:** 
- Mú-si-ca
- Plás-ti-co
- Úl-ti-mo
- Dí-vi-da

**Exceção de prova:** Apenas palavras de origem estrangeira não aportuguesadas (ex: *performance*) são proparoxítonas e não levam acento.`,
        },
        tags: ['Língua Portuguesa', 'Acentuação'],
    },
    {
        id: 10014,
        front: {
            title: 'Português — Acentuação: Paroxítonas e o Novo Acordo 📝',
            subtitle: 'Qual regra de acentuação das paroxítonas MAIS CAI devido ao Novo Acordo Ortográfico?',
        },
        back: {
            body: `As bancas amam cobrar a perda do acento nos **Ditongos Abertos (EI, OI)** em palavras **PAROXÍTONAS**!

Isso significa que perderam o acento:
- I-d**ei**-a
- Ji-b**oi**-a
- As-sem-bl**ei**-a
- Pla-t**ei**-a
- He-r**oi**-co

**Cuidado:** Se o ditongo aberto estiver em uma palavra **Oxítona** (última sílaba), o acento **continua**! (Ex: He-r**ói**, cha-p**éu**, pa-p**éis**).`,
        },
        tags: ['Língua Portuguesa', 'Acentuação', 'Novo Acordo'],
    },
    {
        id: 10015,
        front: {
            title: 'Português — Monossílabos Tônicos 🗣️',
            subtitle: 'Quais monossílabos tônicos devem ser acentuados graficamente?',
        },
        back: {
            body: `Acentuam-se os monossílabos tônicos terminados em:
- **A(s)**: pá, gás, lá.
- **E(s)**: pé, mês, três.
- **O(s)**: pó, dó, nós.
- **Ditongos Abertos (ÉU, ÉI, ÓI)**: véu, réis, dói.

**Macete para a prova:** Eles seguem quase a mesma regra das Oxítonas, **mas monossílabos não se acentuam em EM/ENS!** Por isso, "trem" e "bem" não levam acento (o acento em "têm" é diferencial de plural).`,
        },
        tags: ['Língua Portuguesa', 'Acentuação'],
    },
    {
        id: 10002,
        front: {
            title: 'Ética vs Moral 🧠',
            subtitle: 'Qual a diferença fundamental entre Ética e Moral na prova?',
        },
        back: {
            body: `**Ética**: É a ciência, a teoria, universal, atemporal. Reflete sobre o comportamento. Vem do grego *ethos* (modo de ser/caráter).
**Moral**: É a prática, cultural, temporal (muda com o tempo/lugar), regras de conduta de um grupo. Vem do latim *mos* (costumes).

**Macete:** Ética é o **Princípio (Teoria)**, Moral é a **Ação (Prática)**.

**Cuidado na prova:** A FGV adora inverter os conceitos! Se a questão falar de "hábitos e costumes de uma cultura", é Moral. Se falar de "disciplina filosófica que estuda o comportamento humano", é Ética!`,
        },
        tags: ['Ética', 'Conceitos'],
    },
    {
        id: 10003,
        front: {
            title: 'Lei Anticorrupção (L. 12.846) — Responsabilidade da PJ 🏢',
            subtitle: 'Como a Pessoa Jurídica (Empresa) responde por atos de corrupção?',
        },
        back: {
            body: `A Pessoa Jurídica responde de forma **OBJETIVA** nas esferas administrativa e civil.

Isso significa que **não precisa comprovar dolo ou culpa** da empresa. Basta provar que o ato lesivo foi praticado em seu **interesse ou benefício** (direto ou indireto).

**Cuidado na prova:** A banca vai dizer que se o dirigente não teve culpa, a empresa é absolvida. **Falso!** A responsabilidade da empresa (objetiva) é independente da culpa dos diretores.`,
        },
        tags: ['Lei Anticorrupção', 'Responsabilidade Objetiva'],
    },
    {
        id: 10004,
        front: {
            title: 'Improbidade Adm. — O Fim do "Sem Querer" 🚨',
            subtitle: 'A Lei de Improbidade (LIA) pune atos culposos (negligência, imprudência)?',
        },
        back: {
            body: `**NÃO EXISTE MAIS IMPROBIDADE CULPOSA!**

Com a Nova LIA (Lei 14.230/2021), a punição exige a comprovação de **DOLO ESPECÍFICO**.
Ou seja, tem que haver a vontade consciente, intencional e deliberada de obter vantagem ou prejudicar o Estado.

**Cuidado na prova:** Se a historinha da FGV usar as palavras "por descuido", "negligência", "imperícia" ou "sem querer", você **já elimina a alternativa**. Não é improbidade administrativa!`,
        },
        tags: ['Improbidade Administrativa', 'Dolo Específico'],
    },
    {
        id: 10005,
        front: {
            title: 'Improbidade Adm. — Gaveta 1 (Art. 9º) 💰',
            subtitle: 'Como identificar o Enriquecimento Ilícito nas questões da FGV?',
        },
        back: {
            body: `Ocorre quando o agente usa o cargo para **obter vantagem patrimonial indevida** para si (encher o próprio bolso).

**Exemplos clássicos:**
- Receber propina;
- Usar veículos ou servidores públicos para fins particulares;
- Receber grana para tolerar jogos de azar ou contrabando.

**Macete:** Faça a pergunta: *"O agente ganhou alguma coisa? Aumentou o próprio patrimônio ou economizou dinheiro?"* Se **SIM**, é Enriquecimento Ilícito!`,
        },
        tags: ['Improbidade Administrativa', 'Enriquecimento Ilícito'],
    },
    {
        id: 10006,
        front: {
            title: 'Improbidade Adm. — Gaveta 2 (Art. 10) 📉',
            subtitle: 'O que caracteriza o Prejuízo ao Erário?',
        },
        back: {
            body: `É a ação dolosa que causa **rombo/dano financeiro direto aos cofres públicos**, sem que o agente necessariamente embolse a grana.

**Exemplos clássicos:**
- Superfaturamento em licitação;
- Pagar por uma obra ou serviço não realizado;
- Conceder benefício financeiro ou tributário indevido.

**Macete:** *"O Estado perdeu dinheiro, mas o agente NÃO botou no bolso?"* = **Prejuízo ao Erário!**`,
        },
        tags: ['Improbidade Administrativa', 'Prejuízo ao Erário'],
    },
    {
        id: 10007,
        front: {
            title: 'Improbidade Adm. — Gaveta 3 (Art. 11) 📜',
            subtitle: 'Quais são os casos clássicos de Atentado aos Princípios da Adm. Pública?',
        },
        back: {
            body: `São condutas dolosas que violam a honestidade e imparcialidade, mas que **NÃO geram prejuízo financeiro direto e nem enriquecimento**.

**O que mais cai na FGV (Rol Taxativo):**
- **Nepotismo** (nomear parente até 3º grau);
- **Promoção pessoal** (usar recursos para exaltar próprio nome/imagem);
- **Vazar informações sigilosas**.

**Cuidado:** A nova lei **revogou** condutas genéricas! "Retardar ato de ofício" ou "demorar para despachar" por preguiça **não** é mais improbidade.`,
        },
        tags: ['Improbidade Administrativa', 'Princípios'],
    },
    {
        id: 10008,
        front: {
            title: 'Improbidade Adm. — As Punições (P.I.R.S.) ⚖️',
            subtitle: 'Quais são as 4 grandes punições da Improbidade e o que exige Trânsito em Julgado?',
        },
        back: {
            body: `Lembre-se do macete **P.I.R.S.**!
**P** - Perda da função pública.
**I** - Indisponibilidade dos bens.
**R** - Ressarcimento ao erário.
**S** - Suspensão dos direitos políticos.

🚨 **A Pegadinha Suprema:** A Perda da Função Pública e a Suspensão dos Direitos Políticos **EXIGEM o trânsito em julgado** (o processo tem que acabar de vez, sem caber mais recursos) para serem efetivadas.`,
        },
        tags: ['Improbidade Administrativa', 'Sanções'],
    },
    {
        id: 10009,
        front: {
            title: 'Improbidade Adm. — A Herança da Corrupção ⚰️',
            subtitle: 'Se o corrupto morrer, o filho precisa pagar a dívida do próprio bolso?',
        },
        back: {
            body: `**NÃO! A responsabilidade tem um limite!**

Os herdeiros do agente que causou dano ou enriqueceu ilicitamente respondem pela dívida (ressarcimento e sanções pecuniárias), mas **APENAS até o limite do valor da herança recebida**.

**Cuidado na prova:** A banca vai dizer que a suspensão dos direitos políticos ou a perda do cargo passam para o filho. **Mentira!** Penas pessoais **nunca** se transferem, apenas as sanções no "bolso" limitadas à herança.`,
        },
        tags: ['Improbidade Administrativa', 'Herdeiros'],
    },
    {
        id: 10010,
        front: {
            title: 'Improbidade Adm. — Absolvição Criminal 🔓',
            subtitle: 'Ser absolvido por "falta de provas" no crime salva o servidor na improbidade?',
        },
        back: {
            body: `**NÃO SALVA!** As instâncias são independentes.

O servidor **só se safa** da improbidade administrativa por conta do juiz criminal se a sentença penal provar:
1. A **Inexistência do Fato** (o crime nunca ocorreu).
2. A **Negativa de Autoria** (provou-se que não foi ele).
3. Absolvição criminal por **decisão colegiada**.

**Macete:** "Falta de provas" apenas solta da cadeia, mas não impede a demissão e a devolução da grana no processo de improbidade!`,
        },
        tags: ['Improbidade Administrativa', 'Independência das Instâncias'],
    },
    {
        id: 10011,
        front: {
            title: 'Improbidade Adm. — Prazos de Prescrição ⏳',
            subtitle: 'Em quanto tempo a improbidade prescreve e o que é IMPRESCRITÍVEL?',
        },
        back: {
            body: `**A Regra Geral:** As punições da improbidade prescrevem em **8 anos**, contados da data do fato. (Se for infração permanente, conta a partir do dia que o fato cessar).

🚨 **A Exceção de Ouro:** A ação de **Ressarcimento ao Erário** (obrigação de devolver o dinheiro) decorrente de um ato **DOLOSO** é **IMPRESCRITÍVEL**.

**Macete:** O castigo (multa, perda do cargo) "caduca" em 8 anos, mas a dívida para devolver o dinheiro roubado intencionalmente é eterna!`,
        },
        tags: ['Improbidade Administrativa', 'Prescrição'],
    },
    {
        id: 10012,
        front: {
            title: 'Português — Letras, Fonemas e Dígrafos 🔤',
            subtitle: 'Qual a diferença entre Letra e Fonema? E o que é um Dígrafo?',
        },
        back: {
            body: `**Letras**: O sinal gráfico (o desenho).
**Fonemas**: O som da fala.
**Dígrafo**: É o encontro de duas letras que representam **apenas UM fonema (som)**. Ex: CH, LH, NH, RR, SS, QU, GU.

**Pegadinha FGV:** Na palavra "Chuva", temos 5 letras, mas apenas 4 fonemas! O "CH" é um dígrafo consonantal (tem som de X).`,
        },
        tags: ['Língua Portuguesa', 'Fonologia'],
    },
    {
        id: 10013,
        front: {
            title: 'Português — Acentuação das Proparoxítonas 📖',
            subtitle: 'Qual é a regra mágica de acentuação para palavras proparoxítonas?',
        },
        back: {
            body: `A regra é simples e direta: **TODAS SÃO ACENTUADAS!**
A sílaba tônica é a antepenúltima.

**Exemplos:** 
- Mú-si-ca
- Plás-ti-co
- Úl-ti-mo
- Dí-vi-da

**Exceção de prova:** Apenas palavras de origem estrangeira não aportuguesadas (ex: *performance*) são proparoxítonas e não levam acento.`,
        },
        tags: ['Língua Portuguesa', 'Acentuação'],
    },
    {
        id: 10014,
        front: {
            title: 'Português — Acentuação: Paroxítonas e o Novo Acordo 📝',
            subtitle: 'Qual regra de acentuação das paroxítonas MAIS CAI devido ao Novo Acordo Ortográfico?',
        },
        back: {
            body: `As bancas amam cobrar a perda do acento nos **Ditongos Abertos (EI, OI)** em palavras **PAROXÍTONAS**!

Isso significa que perderam o acento:
- I-d**ei**-a
- Ji-b**oi**-a
- As-sem-bl**ei**-a
- Pla-t**ei**-a
- He-r**oi**-co

**Cuidado:** Se o ditongo aberto estiver em uma palavra **Oxítona** (última sílaba), o acento **continua**! (Ex: He-r**ói**, cha-p**éu**, pa-p**éis**).`,
        },
        tags: ['Língua Portuguesa', 'Acentuação', 'Novo Acordo'],
    },
    {
        id: 10015,
        front: {
            title: 'Português — Monossílabos Tônicos 🗣️',
            subtitle: 'Quais monossílabos tônicos devem ser acentuados graficamente?',
        },
        back: {
            body: `Acentuam-se os monossílabos tônicos terminados em:
- **A(s)**: pá, gás, lá.
- **E(s)**: pé, mês, três.
- **O(s)**: pó, dó, nós.
- **Ditongos Abertos (ÉU, ÉI, ÓI)**: véu, réis, dói.

**Macete para a prova:** Eles seguem quase a mesma regra das Oxítonas, **mas monossílabos não se acentuam em EM/ENS!** Por isso, "trem" e "bem" não levam acento (o acento em "têm" é diferencial de plural).`,
        },
        tags: ['Língua Portuguesa', 'Acentuação'],
    },
    {
        id: 10024,
        front: {
            title: 'Improbidade Adm. — Perda da Função Pública 📉',
            subtitle: 'A perda da função na Nova LIA atinge automaticamente todos os cargos do servidor?',
        },
        back: {
            body: `**NÃO! A perda de múltiplos cargos NUNCA é automática!** 🚨

**➡️ REGRA:** Atinge **APENAS** o cargo/vínculo de mesma natureza e entidade que o agente mantinha na época da improbidade.
**➡️ EXCEÇÃO:** Pode atingir outros cargos do servidor? **SIM!** Mas para isso, o juiz precisa dar uma **DECISÃO EXPRESSAMENTE MOTIVADA** justificando a gravidade.

**Cuidado na FGV:** Se a alternativa usar as palavras "perda automática de todos os vínculos", ela está ERRADA!`,
        },
        tags: ['Improbidade Administrativa', 'Sanções', 'Nova LIA', 'Pegadinha FGV'],
    },
    {
        id: 10025,
        front: {
            title: 'Improbidade Adm. — Art. 11 (Princípios) 📜',
            subtitle: 'O rol de condutas que atentam contra os princípios da Administração Pública (Art. 11) é exemplificativo ou taxativo na Nova LIA?',
        },
        back: {
            body: `**É TAXATIVO!** 🚨

**A Regra Atual:** Com a Nova LIA, não existe mais "improbidade genérica". Para ser punido no Art. 11, a conduta do agente tem que estar **exatamente escrita** (tipificada) em um dos incisos da lei (ex: nepotismo, vazar informação sigilosa, etc.).

**Cuidado na FGV:** Se a banca disser que "qualquer violação ética" ou conduta "não prevista expressamente na lei" gera improbidade, a alternativa está **ERRADA**! O juiz não pode usar interpretação extensiva. O que não está na lista fechada da lei pode até ser infração disciplinar no RH, mas NÃO é improbidade.`,
        },
        tags: ['Improbidade Administrativa', 'Artigo 11', 'Rol Taxativo', 'Nova LIA', 'Pegadinha FGV'],
    },
    {
        id: 10026,
        front: {
            title: 'Lei Anticorrupção — Interposta Pessoa 🍊',
            subtitle: 'O que significa usar uma "interposta pessoa" para fins da Lei 12.846/2013?',
        },
        back: {
            body: `Significa usar um famoso **"Laranja"** (ou testa de ferro) [2]. 

**O objetivo proibido pela lei:** Ocultar ou dissimular (esconder) a verdadeira identidade dos reais beneficiários da corrupção ou o real interesse da empresa no ato ilícito [2].

**Cuidado na FGV:** A banca vai tentar te enganar dizendo que se a empresa não pagou a propina "diretamente", ela não pode ser punida. **ERRADO!** O uso de laranjas atrai a **responsabilidade objetiva** da empresa que se beneficiou nas esferas civil e administrativa [2, 3].`,
        },
        tags: ['Lei Anticorrupção', 'Atos Lesivos', 'Interposta Pessoa', 'Pegadinha FGV', 'Dia 3'],
    },
    {
        id: 10033,
        front: {
            title: 'Informática — Conceitos Básicos (Hardware) 🖥️',
            subtitle: 'Qual é a definição de Hardware e quais são seus exemplos clássicos?',
        },
        back: {
            body: `**Hardware é a parte FÍSICA e TANGÍVEL do computador.** (Tudo aquilo que você pode tocar/chutar).

**Sua Função:** Executar as operações físicas, processar dados, armazenar informações e permitir a interação com o usuário.

**Exemplos clássicos que caem em prova:**
- **Processador (CPU):** Executa os cálculos.
- **Memória RAM:** Armazena dados temporariamente.
- **Disco Rígido (HD / SSD):** Armazena arquivos permanentemente.
- **Periféricos:** Monitor, teclado, mouse, placa-mãe, placa de vídeo.`,
        },
        tags: ['Informática', 'Hardware', 'Conceitos Básicos', 'Dia 4'],
    },
    {
        id: 10035,
        front: {
            title: 'Informática — Windows (Caracteres Inválidos) 🚫',
            subtitle: 'Quais são os 9 caracteres PROIBIDOS ao nomear arquivos e pastas no Windows?',
        },
        back: {
            body: `**Os caracteres que NÃO podem ser usados são:**
**< > : " / \\ | ? ***

**🧠 Macete de Memorização (Um rosto):**
**< >** (são os olhinhos)
**:** (é o nariz)
**"** (é o cabelinho)
**/ \\ |** (são os bracinhos e o corpo)
**? *** (é a confusão na cabeça dele!)

🚨 **Cuidado com a FGV:** A banca vai tentar te enganar dizendo que o @, o hífen (-), o sublinhado (_), os parênteses ( ) ou as letras acentuadas (ç, á) são proibidos. **Eles SÃO PERMITIDOS!**`,
        },
        tags: ['Informática', 'Windows', 'Arquivos', 'Dia 4', 'Pegadinha FGV'],
    },
    {
        id: 10036,
        front: {
            title: 'Informática — Comandos Básicos do CMD (Windows) 💻',
            subtitle: 'Quais são os principais comandos do CMD (MS-DOS) que caem na FGV?',
        },
        back: {
            body: `Decorebe a lista oficial do Windows:

**➡️ DIR:** Lista arquivos e pastas do diretório.
**➡️ CD:** Muda de diretório (*Change Directory*).
**➡️ COPY:** Copia arquivos.
**➡️ REN:** Renomeia arquivos ou pastas (*Rename*).
**➡️ DEL:** Exclui arquivos (*Delete*).
**➡️ MD / MKDIR:** Cria uma nova pasta (*Make Directory*).

🚨 **Pegadinha da FGV para o pessoal da TI:** O CMD do Windows **NÃO** usa os comandos do Linux! (Esqueça *ls, mv, rm, mkdir* se a questão falar estritamente do CMD clássico).`,
        },
        tags: ['Informática', 'Windows', 'CMD', 'MS-DOS', 'Pegadinha FGV'],
    },
    {
        id: 10037,
        front: {
            title: 'Informática — Arrastar Arquivos + Teclado 🖱️',
            subtitle: 'No Windows, qual é a função ao arrastar um arquivo segurando as teclas Ctrl, Alt ou Shift?',
        },
        back: {
            body: `O comportamento do Windows muda dependendo da tecla pressionada durante o arrasto:

**➡️ Arrasta + CTRL:** **COPIA** o arquivo (C de Copiar).
**➡️ Arrasta + ALT:** Cria um **ATALHO** (A e T de Atalho).
**➡️ Arrasta + SHIFT:** **MOVE** o arquivo (S de Sair do lugar).

🚨 **Cuidado com a FGV:** A banca adora dizer que arrastar segurando o Ctrl move o arquivo. **ERRADO!** Ctrl sempre Copia!`,
        },
        tags: ['Informática', 'Windows', 'Gerenciamento de Arquivos', 'Dia 4', 'Pegadinha FGV'],
    },
    {
        id: 10038,
        front: {
            title: 'Informática — Exclusão de Arquivos no Windows 🗑️',
            subtitle: 'Qual é a diferença entre excluir usando [Shift + Delete] e [Arrastar para a Lixeira segurando Shift]?',
        },
        back: {
            body: `Ambas as ações excluem o arquivo **permanentemente** (sem passar pela lixeira), mas há um detalhe crucial:

**➡️ Shift + Delete (Teclado):** Exibe uma **TELA DE CONFIRMAÇÃO** antes de apagar.
**➡️ Arrasta para a Lixeira + Shift (Mouse + Teclado):** Apaga direto, **SEM tela de confirmação**.

🚨 **Cuidado com a FGV:** Pressionar apenas o "Delete" manda o arquivo para a Lixeira e pode ser recuperado!`,
        },
        tags: ['Informática', 'Windows', 'Exclusão de Arquivos', 'Dia 4', 'Pegadinha FGV'],
    },
    {
        id: 10039,
        front: {
            title: 'Informática — Atalhos do Windows (Gerenciador de Tarefas) ⌨️',
            subtitle: 'Qual é o atalho que abre o Gerenciador de Tarefas de forma DIRETA no Windows?',
        },
        back: {
            body: `**Ctrl + Shift + Esc** 🚨

**O Macete:** Esse atalho abre o Gerenciador de Tarefas **diretamente**, sem passar por nenhuma tela intermediária.

**Cuidado com a FGV:** A banca vai tentar te oferecer duas iscas:
❌ *Ctrl + Alt + Del* (Abre uma tela de segurança cheia de opções antes).
❌ *Ctrl + Alt + Esc* (Atalho falso/misturado para confundir a sua memória).`,
        },
        tags: ['Informática', 'Windows', 'Teclas de Atalho', 'Dia 4', 'Pegadinha FGV'],
    },
    {
        id: 10040,
        front: {
            title: 'Direitos Humanos — Natureza Jurídica da DUDH 📜',
            subtitle: 'A Declaração Universal dos Direitos Humanos (DUDH) é considerada um Tratado Internacional?',
        },
        back: {
            body: `**NÃO!** 🚨

A DUDH é uma **Resolução da Assembleia Geral da ONU** (aprovada em 1948).

**Consequências para a prova:**
1. ❌ Não é um tratado internacional.
2. ❌ Não possui força vinculante formal (embora tenha altíssimo valor normativo/moral).
3. ❌ Não exige ratificação (assinatura de concordância) pelos Estados.

**O que ela protege?** Direitos Civis e Políticos (Liberdade) + Direitos Econômicos, Sociais e Culturais (Igualdade).
**Nenhum direito nela é absoluto!**`,
        },
        tags: ['Direitos Humanos', 'DUDH', 'Natureza Jurídica', 'Pegadinha FGV'],
    },
    {
        id: 10041,
        front: {
            title: 'Direitos Humanos — Estrutura e Limites da DUDH 🧱',
            subtitle: 'Como a DUDH é estruturada e os seus direitos são absolutos?',
        },
        back: {
            body: `**A Estrutura Lógica (30 Artigos):**
🔹 **Art. 1º e 2º:** Princípios Gerais.
🔹 **Art. 3º a 21:** Direitos Civis e Políticos (Liberdade).
🔹 **Art. 22 a 30:** Direitos Econômicos, Sociais e Culturais (Igualdade/Efetivação Progressiva).

🚨 **PEGADINHA DE PROVA:** Os direitos da DUDH **NÃO SÃO ABSOLUTOS**! 
Eles podem sofrer limitações legais para respeitar a moral, a ordem pública e o bem-estar geral da sociedade.`,
        },
        tags: ['Direitos Humanos', 'DUDH', 'Estrutura', 'Pegadinha FGV', 'Não Absoluto'],
    },
    {
        id: 10042,
        front: {
            title: 'Direitos Humanos — Dimensões e Princípios 🏛️',
            subtitle: 'Como funcionam as Dimensões e quais os 3 princípios fundamentais cobrados pela FGV?',
        },
        back: {
            body: `**AS DIMENSÕES (Não se excluem, coexistem!):**
🔹 **1ª Dimensão (Liberdade):** Direitos Civis e Políticos (Limitação do Estado).
🔹 **2ª Dimensão (Igualdade):** Direitos Sociais, Econômicos e Culturais (Prestação do Estado).
🔹 **3ª Dimensão (Fraternidade):** Direitos Difusos e Coletivos (Meio ambiente, paz).

**OS 3 PRINCÍPIOS E PEGADINHAS:**
🌍 **Universalidade (Quem é titular):** Valem para TODOS. *Pegadinha:* Não variam conforme cultura/religião!
🧩 **Indivisibilidade (Valor igual):** Formam um conjunto único. *Pegadinha:* NÃO existe hierarquia entre direitos (civis não são "mais importantes" que sociais).
🔗 **Interdependência (Funcionamento):** Estão interligados. Violar um afeta os demais.`,
        },
        tags: ['Direitos Humanos', 'Dimensões', 'Princípios', 'Pegadinha FGV', 'Dia 5'],
    },
    {
        id: 10043,
        front: {
            title: 'Direitos Humanos — Direitos Específicos da DUDH (Parte II) 📜',
            subtitle: 'Lazer, Propriedade e Asilo são expressamente previstos na DUDH?',
        },
        back: {
            body: `**SIM! Todos estão expressamente previstos!**

**Foco FGV - O que a banca tenta afirmar que NÃO está na DUDH:**
- **Lazer:** É garantido o direito ao repouso, lazer e férias remuneradas.
- **Propriedade:** Protege a propriedade individual e coletiva.
- **Asilo:** É garantido o direito de buscar asilo em caso de perseguição.
- **Nacionalidade:** Ninguém pode ser privado arbitrariamente da sua.
- **Presunção de Inocência:** Todo acusado é presumido inocente até prova em contrário.

**Regra Final:** Nenhum direito pode ser usado para destruir outro direito da DUDH.`,
        },
        tags: ['Direitos Humanos', 'DUDH', 'Direitos Específicos', 'Dia 5', 'Direto ao Ponto'],
    },
    {
        id: 10044,
        front: {
            title: 'Direitos Humanos — Institucionalização e Tratados 🏛️',
            subtitle: 'Qual é o status hierárquico dos Tratados Internacionais de Direitos Humanos no Brasil?',
        },
        back: {
            body: `**A CF/88 é a norma máxima (Soberana)!** [1]

Os Tratados Internacionais de Direitos Humanos podem ter dois status no Brasil [2]:
🔹 **Status Supralegal:** (Regra). Fica acima das leis comuns, mas **Abaixo da Constituição** [2].
🔹 **Status Constitucional:** Quando aprovado com quórum qualificado (equivale a uma Emenda Constitucional) [2].

🚨 **Pegadinha da FGV:** A banca costuma dizer que tratados têm força "supraconstitucional" (acima da CF). **ERRADO!** O STF entende que a Constituição Federal é a norma suprema [1].`,
        },
        tags: ['Direitos Humanos', 'Institucionalização', 'Tratados Internacionais', 'STF', 'Dia 5'],
    },
    {
        id: 10046,
        front: {
            title: 'Direitos Humanos — Conceitos 🌍 x 🇧🇷',
            subtitle: 'Qual é a diferença exata entre Direitos Humanos e Direitos Fundamentais?',
        },
        back: {
            body: `A distinção central está apenas no **ÂMBITO NORMATIVO** (onde estão escritos):

🌍 **Direitos Humanos:** Reconhecidos no **Plano Internacional** (Tratados, Pactos e Declarações).
🇧🇷 **Direitos Fundamentais:** Positivados no **Plano Interno/Nacional** (Constituição Federal).

🚨 **Pegadinha da FGV:** Não há diferença de conteúdo ou importância. A diferença é apenas a "esfera" de proteção (Internacional x Constitucional).`,
        },
        tags: ['Direitos Humanos', 'Conceitos', 'Direitos Fundamentais', 'Dia 5', 'Direto ao Ponto'],
    },
    {
        id: 10048,
        front: {
            title: 'Direitos Humanos — As 5 Dimensões (Gerações) 📚',
            subtitle: 'Quais são as 5 dimensões dos Direitos Humanos e qual a regra de coexistência entre elas?',
        },
        back: {
            body: `**Regra de Ouro:** As dimensões **não se excluem e coexistem** (não há substituição temporal).

**O Conteúdo de cada Dimensão:**
🔹 **1ª Dimensão:** Direitos Civis e Políticos (Liberdade / Limitação do Estado).
🔹 **2ª Dimensão:** Direitos Sociais, Econômicos e Culturais (Igualdade / Prestação do Estado).
🔹 **3ª Dimensão:** Direitos Difusos e Coletivos (Solidariedade / Meio ambiente e Paz).
🔹 **4ª Dimensão:** Democracia, Informação e Pluralismo.
🔹 **5ª Dimensão:** Direito à Paz ou à Bioética.`,
        },
        tags: ['Direitos Humanos', 'Dimensões', 'Gerações', 'Dia 5', 'Direto ao Ponto'],
    },
    {
        id: 10049,
        front: {
            title: 'Direitos Humanos — Corte Interamericana 🏛️',
            subtitle: 'Quem a Corte Interamericana de Direitos Humanos julga e qual a força de suas decisões?',
        },
        back: {
            body: `**A regra de ouro da FGV:**
A Corte **NÃO JULGA INDIVÍDUOS**, ela julga apenas **ESTADOS** (países)!

**Competências:**
1. Julgar os Estados por violações de direitos humanos.
2. Interpretar a Convenção Americana.

**Força das Decisões:**
São **OBRIGATÓRIAS** (vinculantes) e produzem efeitos internos para os países que aceitaram sua jurisdição (como o Brasil, desde 1998).`,
        },
        tags: ['Direitos Humanos', 'Sistema Interamericano', 'Corte Interamericana', 'Dia 5', 'Pegadinha FGV'],
    },
    {
        id: 10050,
        front: {
            title: 'Direitos Humanos — Incorporação de Tratados 🇧🇷',
            subtitle: 'Quais são os dois status que um Tratado de Direitos Humanos pode ter no Brasil?',
        },
        back: {
            body: `Eles podem ter dois níveis hierárquicos:

🔹 **STATUS CONSTITUCIONAL:** Aprovado em **2 turnos**, por **3/5 dos votos** (Rito Qualificado).
🔹 **STATUS SUPRALEGAL:** Aprovado pelo rito ordinário (Abaixo da CF, mas **Acima das leis comuns**).

🚨 **Cuidado com a FGV:** 
1. Nem todo tratado é constitucional! 
2. A fração exigida é **Três Quintos (3/5)**, e não dois terços!
3. Em ambos os casos, eles ficam ACIMA das leis ordinárias.`,
        },
        tags: ['Direitos Humanos', 'Tratados Internacionais', 'Status Supralegal', 'Quórum 3/5', 'Direto ao Ponto'],
    },
    {
        id: 10051,
        front: {
            title: 'Direitos Humanos — Princípios da DUDH ⚖️',
            subtitle: 'Quais são os 3 princípios fundamentais da DUDH e como diferenciá-los?',
        },
        back: {
            body: `**A Tríade Fundamental:**
🌍 **Universalidade (Quem):** Pertencem a todos. *Não variam* conforme cultura ou religião!
🧩 **Indivisibilidade (Valor):** Formam um conjunto único. *Não existe hierarquia* entre direitos civis, políticos, sociais ou culturais.
🔗 **Interdependência (Funcionamento):** Estão interligados. A violação de um direito compromete os demais (ex: sem educação, falta liberdade).`,
        },
        tags: ['Direitos Humanos', 'DUDH', 'Princípios', 'Direto ao Ponto'],
    },
    {
        id: 10052,
        front: {
            title: 'Direitos Humanos — Igualdade e Dignidade na DUDH ⚖️',
            subtitle: 'Como a FGV cobra a Igualdade, a Dignidade e a Não Discriminação na DUDH?',
        },
        back: {
            body: `**1. Igualdade:** É Jurídica e Moral. 
🚨 *Pegadinha:* A DUDH NÃO garante igualdade material absoluta!

**2. Dignidade da Pessoa Humana:** É inerente e incondicional.
🚨 *Pegadinha:* Não se perde a dignidade por mau comportamento (presos/estrangeiros continuam protegidos).

**3. Não Discriminação:** O rol de proibições (raça, sexo, religião...) é **EXEMPLIFICATIVO** (não é taxativo).`,
        },
        tags: ['Direitos Humanos', 'DUDH', 'Igualdade', 'Dignidade', 'FGV', 'Dica 13'],
    },
    {
        id: 10053,
        front: {
            title: 'Direitos Humanos — Direitos Civis e Políticos na DUDH 🗳️',
            subtitle: 'Quais são os principais direitos civis e políticos na DUDH e quais as pegadinhas de prova?',
        },
        back: {
            body: `**Direitos Civis e Políticos (Liberdade e Limitação do Estado):**
🔹 **Civis:** Direito à vida, liberdade, proibição de escravidão/tortura, devido processo legal, liberdade de expressão e religião.
🔹 **Políticos:** Direito de participar do governo, sufrágio universal e voto secreto.

🚨 **Pegadinhas Clássicas da FGV:**
❌ *Dizer que a DUDH detalha sistemas eleitorais.* (FALSO: Ela apenas dita princípios gerais).
❌ *Dizer que a DUDH não possui direitos políticos.* (FALSO: Ela engloba civis, políticos, sociais, econômicos e culturais).`,
        },
        tags: ['Direitos Humanos', 'DUDH', 'Direitos Políticos', 'Direitos Civis', 'Pegadinha FGV'],
    },
    {
        id: 10054,
        front: {
            title: 'Direitos Humanos — Direitos Econômicos, Sociais e Culturais (DESC) 🏫',
            subtitle: 'Qual é a principal característica da implementação dos DESC segundo a DUDH?',
        },
        back: {
            body: `**EFETIVAÇÃO PROGRESSIVA!** 🚨

Diferente dos direitos civis, os DESC **não são de implementação imediata plena**. Sua realização depende das condições econômicas do Estado. Eles exigem atuação positiva (políticas públicas).

**Foco FGV:**
🔹 **Econômicos:** Foco na dignidade no trabalho e proteção contra desemprego.
🔹 **Sociais:** Saúde, seguridade social, padrão de vida.
🔹 **Culturais:** Vida cultural e artes.
📌 *Pulo do Gato:* A EDUCAÇÃO é, ao mesmo tempo, um direito social e cultural!`,
        },
        tags: ['Direitos Humanos', 'DUDH', 'DESC', 'Efetivação Progressiva', 'FGV'],
    },
    {
        id: 10055,
        front: {
            title: 'Direitos Humanos — Estrutura e Alcance da CADH 🌎',
            subtitle: 'Qual é o alcance da CADH e qual a sua principal diferença estrutural em relação à DUDH?',
        },
        back: {
            body: `**1. Alcance (Quem é protegido):**
A CADH protege **TODAS as pessoas** sob a jurisdição do Estado, e não apenas os seus nacionais! 
🚨 *Pegadinha FGV:* Estrangeiros/Turistas TÊM, sim, a proteção da CADH.

**2. Diferença Estrutural para a DUDH:**
A CADH não se limita a declarar direitos, ela **cria mecanismos de controle e fiscalização** (Comissão e Corte Interamericana) para responsabilizar os Estados.

**3. Status no Brasil:** Possui hierarquia **Supralegal** (entendimento do STF).`,
        },
        tags: ['Direitos Humanos', 'CADH', 'Pacto de São José', 'Estrutura e Alcance', 'FGV'],
    },
    {
        id: 10056,
        front: {
            title: 'Direitos Humanos — Vida e Liberdade na CADH 🌎',
            subtitle: 'Quais são as regras e pegadinhas sobre o Direito à Vida e a Prisão por Dívida na CADH?',
        },
        back: {
            body: `**1. Direito à Vida:** Protegido *desde a concepção*, mas com a ressalva **"em geral"** (não é absoluto, admite exceções legais como no Brasil).
🔹 *Pena de morte:* Quem aboliu, não pode voltar atrás (vedação ao retrocesso).

**2. Prisão por Dívida (A maior pegadinha):**
A CADH proíbe a prisão por dívida civil.
🚨 **A ÚNICA EXCEÇÃO:** Devedor de pensão alimentícia.
📌 *Foco FGV (Súmula Vinculante 25):* É ILÍCITA a prisão do depositário infiel, prevalecendo a regra do Pacto de São José da Costa Rica!`,
        },
        tags: ['Direitos Humanos', 'CADH', 'Direito à Vida', 'Prisão por Dívida', 'Depositário Infiel', 'FGV'],
    },
    {
        id: 10057,
        front: {
            title: 'Direitos Humanos — Liberdade de Expressão na CADH 🗣️',
            subtitle: 'A CADH permite a censura prévia ou a responsabilização pelas opiniões emitidas?',
        },
        back: {
            body: `🚨 **REGRA DE OURO DA FGV:**
❌ **É VEDADA (PROIBIDA)** a censura prévia [3]! O Estado não pode impedir a publicação de informações ou ideias.
✅ **É ADMITIDA** a responsabilização posterior [3]! Quem abusar do direito de expressão responderá legalmente após o ato.

**Limitações à liberdade de expressão podem ocorrer para proteger [2]:**
🔹 Direitos/reputação de terceiros [2].
🔹 Segurança nacional e ordem pública [2].
🔹 Saúde ou moral públicas [2].`,
        },
        tags: ['Direitos Humanos', 'CADH', 'Liberdade de Expressão', 'Censura Prévia', 'FGV'],
    },
    {
        id: 10058,
        front: {
            title: 'Direitos Humanos — Suspensão de Garantias e Direitos Inderrogáveis 🛑',
            subtitle: 'Quando ocorre a suspensão de garantias na CADH e todos os direitos podem ser suspensos?',
        },
        back: {
            body: `A suspensão ocorre apenas em **situações excepcionais** (guerra, perigo público ou emergência) [1].

🚨 **PEGADINHA FGV:** Nem todos os direitos podem ser suspensos! Existem os **Direitos Inderrogáveis (Intocáveis)**.
Mesmo em guerra, o Estado **NÃO PODE** suspender:
🔹 Vida e Integridade Pessoal
🔹 Proibição de Escravidão
🔹 Religião e Consciência
🔹 Nome, Nacionalidade e Direitos da Família/Criança
🔹 Direitos Políticos`,
        },
        tags: ['Direitos Humanos', 'CADH', 'Suspensão de Garantias', 'Direitos Inderrogáveis', 'FGV'],
    },
    {
        id: 10061,
        front: {
            title: 'Direitos Humanos — Estrutura da DUDH 🏗️',
            subtitle: 'Como os 30 artigos da DUDH estão divididos?',
        },
        back: {
            body: `A divisão lógica da DUDH cobrada em prova:
🔹 **Art. 1º a 2º:** Princípios Gerais.
🔹 **Art. 3º a 21:** Direitos Civis e Políticos (Liberdade e Proteção / 1ª Dimensão).
🔹 **Art. 22 a 30:** Direitos Econômicos, Sociais e Culturais (Prestação do Estado / 2ª Dimensão).

🚨 *Pulo do Gato:* Lembre-se que os direitos sociais e a educação ficam no "final" do documento (22 a 30)!`,
        },
        tags: ['Direitos Humanos', 'DUDH', 'Estrutura', 'FGV', 'TJ-SC'],
    },
    {
        id: 10062,
        front: {
            title: 'Direitos Humanos — Princípios da DUDH (A Tríade) ⚖️',
            subtitle: 'Como diferenciar Universalidade, Indivisibilidade e Interdependência na prova?',
        },
        back: {
            body: `**A Marca Mental Infalível:**
🌍 **Universalidade (QUEM):** Pertencem a TODOS. Não variam conforme cultura, raça ou país.
🧩 **Indivisibilidade (VALOR):** Formam um conjunto inseparável. **NÃO HÁ HIERARQUIA** entre direitos civis, sociais, etc. (Todos têm a mesma importância).
🔗 **Interdependência (FUNCIONAMENTO):** Estão interligados. A violação de um direito compromete os outros.`,
        },
        tags: ['Direitos Humanos', 'Princípios', 'DUDH', 'Pegadinha', 'TJ-SC'],
    },
    {
        id: 10065,
        front: {
            title: 'Direitos Humanos — Suspensão de Garantias (CADH) 🛑',
            subtitle: 'Quando a CADH permite a suspensão de garantias e o que são Direitos Inderrogáveis?',
        },
        back: {
            body: `A suspensão só é permitida em **situações excepcionais**, como guerra, perigo público ou emergência que ameace o Estado [1, 2].\n\n🚨 **PEGADINHA FGV (Direitos Inderrogáveis):**\nExistem direitos que são intocáveis! Mesmo no pior cenário de guerra, o Estado **NUNCA** pode suspender o direito à vida, à integridade pessoal, a proibição da escravidão, a liberdade de religião e os direitos políticos [2].`,
        },
        tags: ['Direitos Humanos', 'CADH', 'Suspensão de Garantias', 'Direitos Inderrogáveis', 'FGV']
    },
    {
        id: 10066,
        front: {
            title: 'Direitos Humanos — Comissão Interamericana 🌎',
            subtitle: 'Quem julga e quem pode apresentar petições (denúncias) à Comissão Interamericana?',
        },
        back: {
            body: `A Comissão é formada por 7 membros de diferentes países e tem a função de promover a defesa dos direitos humanos [3].\n\n🚨 **O PULO DO GATO (Acesso):**\n**Qualquer pessoa ou grupo** pode apresentar petições à Comissão denunciando violações de direitos humanos [3]!\n*(Cuidado para não confundir com a Corte Interamericana, que SÓ julga os Estados e não recebe petições diretas de indivíduos).*`,
        },
        tags: ['Direitos Humanos', 'Sistema Interamericano', 'Comissão Interamericana', 'Petição', 'FGV']
    },
    {
        id: 10067,
        front: {
            title: 'Direitos Humanos — Pacto de São José (Decreto 678/92) 📜',
            subtitle: 'Quais as regras de ouro do Pacto sobre o Direito à Vida e a Prisão por Dívida?',
        },
        back: {
            body: `🔹 **Direito à Vida:** É protegido, em regra, *desde a concepção* [4]. A pena de morte é exceção restritíssima e é terminantemente **proibida** para menores de 18 anos, maiores de 70 anos e mulheres grávidas [5].\n\n🔹 **Prisão por Dívida:** Ninguém pode ser preso só porque está devendo [6]. \n🚨 **A ÚNICA EXCEÇÃO:** A prisão do devedor de pensão alimentícia [6]. *(O STF sumulou que a prisão do depositário infiel é ilícita com base neste Pacto!)*.`,
        },
        tags: ['Direitos Humanos', 'Pacto de São José', 'Pena de Morte', 'Prisão por Dívida', 'FGV']
    },
    {
        id: 10068,
        front: {
            title: 'Direitos Humanos / Constitucional — Individuais x Sociais 🛡️ x 🏗️',
            subtitle: 'Como o Estado atua nos Direitos Individuais e Sociais? Qual é a pegadinha do Direito de Greve?',
        },
        back: {
            body: `🔹 **Direitos Individuais (1ª Dimensão/Liberdades):** Atuam como **LIMITADORES** da ação do Estado (Direitos Negativos). O Estado *não deve* interferir na sua vida privada (servem como um escudo).\n\n🔹 **Direitos Sociais (2ª Dimensão):** Exigem uma **PRESTAÇÃO** estatal (Direitos Positivos). O Estado precisa *gastar ou agir* para garantir (ex: construir hospitais, escolas).\n\n🚨 **A PEGADINHA SUPREMA DA FGV:**\nO **Direito de Greve** é um Direito Social, mas é a exceção à regra: ele **NÃO DEPENDE** de prestação estatal específica para ser exercido!`,
        },
        tags: ['Direitos Humanos', 'Direito Constitucional', 'Direitos Sociais', 'Direito de Greve', 'FGV'],
    },
    {
        id: 10069,
        front: {
            title: 'Direito Constitucional — Crimes do Art. 5º ⚖️',
            subtitle: 'Quais são os crimes Imprescritíveis e quais são os Insuscetíveis de Graça/Anistia?',
        },
        back: {
            body: `🚨 **MACETE DEFINITIVO FGV:**\n\n🔹 **Imprescritíveis (Não prescrevem nunca):**\nLembre de **RAÇÃO**: **RA**cismo e A**ÇÃO** de grupos armados.\n\n🔹 **Insuscetíveis de Graça/Anistia (Não têm perdão):**\nLembre de **3T + H**: **T**ortura, **T**ráfico, **T**errorismo e **H**ediondos.\n\n⚠️ *Pulo do Gato:* Todos eles (RAÇÃO e 3TH) são **Inafiançáveis**! O Racismo é punido com pena de **Reclusão**!`,
        },
        tags: ['Direito Constitucional', 'Artigo 5º', 'Crimes', 'Pegadinha', 'FGV'],
    },
    {
        id: 10070,
        front: {
            title: 'Língua Portuguesa — Uso do Artigo com "Todo" 📚',
            subtitle: 'Qual a diferença de sentido entre "Todo [substantivo]" e "Todo o [substantivo]"?',
        },
        back: {
            body: `🚨 **PEGADINHA CLÁSSICA FGV:**\n\n🔹 **Todo (SEM ARTIGO):** Significa *CADA*, *QUALQUER*.\nEx: **Todo** aluno deve estudar. (Cada aluno / Qualquer aluno da escola).\n\n🔹 **Todo + O (COM ARTIGO):** Significa *INTEIRO*, *TOTALIDADE*.\nEx: **Todo o** aluno ficou sujo de tinta. (O aluno inteiro, da cabeça aos pés, ficou sujo).`,
        },
        tags: ['Língua Portuguesa', 'Artigo', 'Semântica', 'FGV', 'TJ-SC'],
    },
    {
        id: 10072,
        front: {
            title: 'Língua Portuguesa — "A" Artigo x "A" Preposição 🅰️',
            subtitle: 'Como diferenciar o "A" artigo do "A" preposição na hora da prova?',
        },
        back: {
            body: `🔹 **"A" Artigo:** É **variável** (vai para o plural: "As"). Acompanha o substantivo.\n*Macete:* Trocando a palavra da frente por uma masculina, o "A" vira **"O"**.\n\n🔹 **"A" Preposição:** É **invariável** (NÃO vai para o plural). Serve como ponte entre palavras.\n*Macete:* Trocando a palavra da frente por uma masculina, o "A" **continua "A"** (ou se junta com o 'o' formando "ao").`,
        },
        tags: ['Língua Portuguesa', 'Morfologia', 'Artigo', 'Preposição', 'FGV'],
    },
    {
        id: 10073,
        front: {
            title: 'Língua Portuguesa — Armadilhas do "A" (Artigo x Preposição) 🪤',
            subtitle: 'Qual a classificação do "A" antes de VERBOS e do "A" (singular) antes de palavras no PLURAL?',
        },
        back: {
            body: `🚨 **CUIDADO COM A FGV!**\n\n🔹 **"A" antes de Verbo no Infinitivo:** Será **SEMPRE PREPOSIÇÃO**! (Ex: começou *a* chorar, passou *a* entender). Verbo não aceita artigo.\n\n🔹 **"A" (singular) antes de palavra no PLURAL:** Será **SEMPRE PREPOSIÇÃO**! (Ex: referia-se *a* pessoas). Se fosse artigo, seria obrigado a concordar no plural (*as* pessoas).`,
        },
        tags: ['Língua Portuguesa', 'Morfologia', 'Pegadinha', 'Artigo', 'Preposição'],
    },
    {
        "id": 10074,
        "front": {
            "title": "Língua Portuguesa — Causa x Finalidade 🎯",
            "subtitle": "Qual a diferença de sentido entre as locuções prepositivas de Causa e de Finalidade?"
        },
        "back": {
            "body": "🔹 **Causa (Motivo / Passado):** Indica a razão pela qual algo aconteceu.\n*Ex:* Aprovado **graças ao** (por causa do) esforço.\n\n🔹 **Finalidade (Objetivo / Futuro):** Indica o propósito da ação.\n*Ex:* Estudou **a fim de** (para) passar.\n\n🚨 **Pega-Ratão FGV:** Cuidado com a grafia! **A fim de** (separado = finalidade). **Afim** (junto = afinidade/semelhança)."
        },
        "tags": ["Língua Portuguesa", "Preposições", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10076,
        "front": {
            "title": "Língua Portuguesa — Conjunções Adversativas ⚔️",
            "subtitle": "Quais são as principais conjunções adversativas e qual a regra de ouro da pontuação do 'MAS'?"
        },
        "back": {
            "body": "🔹 **Principais:** Mas, porém, contudo, todavia, entretanto, no entanto, não obstante, senão (quando significar 'mas sim').\n\n🚨 **REGRA DE OURO (Foco FGV):**\nA conjunção **MAS** não aceita deslocamento! Ela deve iniciar a oração adversativa e **NÃO** pode ter vírgula logo após ela (salvo se houver um termo intercalado). As demais (porém, contudo, entretanto) podem ser deslocadas livremente na frase, ficando entre vírgulas."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Sintaxe", "Pontuação", "FGV", "TJ-SC"]
    },
    {
        "id": 10077,
        "front": {
            "title": "Língua Portuguesa — Conjunções Alternativas 🔀",
            "subtitle": "Quais são as principais conjunções alternativas e qual a diferença de sentido que a FGV cobra?"
        },
        "back": {
            "body": "🔹 **Principais:** Ou, ou...ou, ora...ora, quer...quer, seja...seja, já...já.\n\n🚨 **PEGADINHA FGV (Semântica):**\nAs alternativas podem indicar duas coisas diferentes no texto:\n1. **Exclusão Mútua:** Só uma opção é possível, anulando a outra (*Ou estuda, ou dorme*).\n2. **Alternância de Ações:** As ações se sucedem no tempo (*Ora ri, ora chora*)."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Sintaxe", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10079,
        "front": {
            "title": "Língua Portuguesa — Conjunções Explicativas 💡",
            "subtitle": "Qual a grande dica do Verbo no Imperativo e o que significa 'Porquanto'?"
        },
        "back": {
            "body": "🔹 **A Palavra Mágica:** **PORQUANTO** é conjunção explicativa (formal) e significa exatamente **PORQUE**.\n\n🚨 **MACETE FGV (Verbo no Imperativo):**\nA presença de um verbo no imperativo (ordem/conselho) na primeira oração é o maior indicativo de que a oração seguinte trará uma conjunção **explicativa** (pois, porque, porquanto) para justificar a ordem dada!"
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Explicativas", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10080,
        "front": {
            "title": "Língua Portuguesa — Conjunção 'POIS' ⚖️",
            "subtitle": "Qual a diferença entre o 'POIS' Explicativo e o 'POIS' Conclusivo?"
        },
        "back": {
            "body": "A posição na frase muda tudo para a FGV!\n\n🔹 **POIS (Antes do verbo):** É **Explicativo** (equivale a *porque*).\n*Ex:* Feche a porta, **pois** (porque) está chovendo.\n\n🔹 **POIS (Deslocado / Depois do verbo):** É **Conclusivo** (equivale a *portanto*).\n*Ex:* Choveu muito; ficaremos, **pois**, em casa."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Explicativas", "Conclusivas", "FGV", "TJ-SC"]
    },
    {
        "id": 10081,
        "front": {
            "title": "Língua Portuguesa — Conjunção Integrante 🔗",
            "subtitle": "Quais são as conjunções integrantes e qual é o Macete infalível para identificá-las na prova?"
        },
        "back": {
            "body": "🔹 **Quais são:** **QUE** e **SE** (Elas NÃO possuem valor semântico, apenas conectam orações substantivas).\n\n🚨 **MACETE DO 'ISSO' (Foco FGV):**\nPara ter certeza de que é uma conjunção integrante, substitua a conjunção e todo o restante da frase pela palavra **ISSO** (ou disso, nisso, para isso).\n*Ex:* O juiz decidiu **que o réu é culpado**. -> O juiz decidiu **ISSO**."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Conjunção Integrante", "Sintaxe", "FGV", "TJ-SC"]
    },
    {
        "id": 10082,
        "front": {
            "title": "Língua Portuguesa — Conjunções Adverbiais (O 'COMO') 🦎",
            "subtitle": "Quais são as 3 circunstâncias adverbiais que a palavra 'COMO' pode expressar na prova da FGV?"
        },
        "back": {
            "body": "A palavra 'COMO' é um camaleão e muda de sentido pelo contexto:\n\n🔹 **Causal (Motivo):** Pode ser trocada por *porque/já que*. (Ex: **Como** choveu, o jogo foi cancelado).\n🔹 **Conformativa (Acordo):** Pode ser trocada por *conforme/segundo*. (Ex: Fiz tudo **como** a lei manda).\n🔹 **Comparativa (Comparação):** Estabelece paralelo de igualdade. (Ex: Ele é forte **como** um touro)."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Sintaxe", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10083,
        "front": {
            "title": "Língua Portuguesa — Conjunções Condicionais ⚖️",
            "subtitle": "Quais são as principais conjunções condicionais e qual é o pega-ratão do 'Desde que'?"
        },
        "back": {
            "body": "🔹 **Principais:** Se, caso, desde que, contanto que, a menos que, a não ser que.\n\n🚨 **PEGADINHAS FGV:**\n1. A troca de **Se** por **Caso** exige alteração no verbo! (*Se eu for* $\\rightarrow$ *Caso eu vá*).\n2. **Desde que + Verbo no Subjuntivo:** É Condição (ex: viajo desde que *faça* sol).\n3. **Desde que + Verbo no Indicativo:** É Tempo (ex: estudo desde que *nasci*)."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Condicionais", "Sintaxe", "FGV", "TJ-SC"]
    },
    {
        "id": 10084,
        "front": {
            "title": "Língua Portuguesa — Conjunções Conformativas 📏",
            "subtitle": "Quais são as principais conjunções e qual é o sinônimo da palavra erudita 'CONSOANTE'?"
        },
        "back": {
            "body": "🔹 **Principais:** Conforme, segundo, como.\n\n🚨 **A PALAVRA MÁGICA DA FGV:**\nA palavra **CONSOANTE** é uma conjunção conformativa!\nEla significa exatamente **'conforme'** ou **'segundo'**.\n*Ex:* O juiz decidiu **consoante** (conforme) a lei."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Conformativas", "Sintaxe", "FGV", "TJ-SC"]
    },
    {
        "id": 10085,
        "front": {
            "title": "Língua Portuguesa — Conjunções Finais 🎯",
            "subtitle": "Quais são as principais conjunções finais e qual é a pegadinha suprema do 'PORQUE'?"
        },
        "back": {
            "body": "🔹 **Principais:** Para que, a fim de que, de sorte que, do modo que.\n\n🚨 **PEGADINHA FGV (O 'Porque' Camaleão):**\nO **'Porque'** pode indicar FINALIDADE quando for sinônimo exato de **'Para que'**.\n*Ex:* Falou bem alto **porque** (para que) todos pudessem ouvir.\n*Dica:* O verbo da frente sempre estará no subjuntivo (pudesse, ouvisse, veja)!"
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Finais", "Sintaxe", "FGV", "TJ-SC"]
    },
    {
        "id": 10086,
        "front": {
            "title": "Língua Portuguesa — À medida que vs. Na medida em que ⚖️",
            "subtitle": "Qual a diferença de sentido entre essas duas locuções para a FGV?"
        },
        "back": {
            "body": "🔹 **À medida que:** Indica **PROPORÇÃO** (ideia de simultaneidade/evolução).\n*Ex:* Fica mais inteligente *à medida que* lê.\n\n🔹 **Na medida em que:** Indica **CAUSA** (equivale a *porque/já que*).\n*Ex:* Foi aprovado *na medida em que* estudou muito.\n\n🚨 **ATENÇÃO:** A expressão *'À medida em que'* NÃO EXISTE na Língua Portuguesa!"
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Proporcionais", "Causais", "FGV", "TJ-SC"]
    },
    {
        "id": 10087,
        "front": {
            "title": "Língua Portuguesa — Conjunções Temporais ⏱️",
            "subtitle": "Qual é a grande pegadinha da palavra 'MAL' nas provas da FGV?"
        },
        "back": {
            "body": "🚨 **A ARMADILHA DO 'MAL':**\nA palavra **MAL** pode atuar como Conjunção Temporal quando indicar uma ação imediata (sendo sinônimo perfeito de *Assim que* ou *Logo que*).\n*Ex:* **Mal** cheguei a casa, começou a chover. (= *Assim que* cheguei...).\n\n🔹 **Dica Bônus:** 'Enquanto' indica sempre *simultaneidade* (ações ao mesmo tempo)."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Temporais", "FGV", "TJ-SC"]
    },
    {
        "id": 10088,
        "front": {
            "title": "Língua Portuguesa — Conjunções Comparativas ⚖️",
            "subtitle": "Qual é a regra da 'Elipse' (verbo escondido) e a regra do 'DO' facultativo nas comparações?"
        },
        "back": {
            "body": "🔹 **A Elipse do Verbo:** Nas orações comparativas, o verbo da segunda oração quase sempre fica oculto para evitar repetição.\n*Ex:* Ele estuda mais que o irmão [estuda].\n\n🔹 **A Regra do 'DO':** Nas expressões de superioridade/inferioridade, a palavra **'DO'** é partícula de realce (facultativa)!\n*Ex:* Mais inteligente QUE você = Mais inteligente DO QUE você."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Comparativas", "Sintaxe", "FGV", "TJ-SC"]
    }, {
        "id": 10090,
        "front": {
            "title": "Língua Portuguesa — Porquanto vs Conquanto ⚔️",
            "subtitle": "Qual a diferença semântica entre essas duas conjunções que a FGV adora cobrar?"
        },
        "back": {
            "body": "🔹 **PORQUANTO:** Indica **CAUSA**.\n(É sinônimo formal de *porque, visto que, já que*).\n\n🔹 **CONQUANTO:** Indica **CONCESSÃO**.\n(É sinônimo formal de *embora, ainda que, mesmo que*)."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10091,
        "front": {
            "title": "Língua Portuguesa — Pronome Adjetivo x Substantivo 🔄",
            "subtitle": "Qual a diferença morfológica essencial cobrada pela FGV entre esses dois tipos?"
        },
        "back": {
            "body": "🔹 **Pronome Adjetivo:** É aquele que **ACOMPANHA** um substantivo, atribuindo-lhe alguma ideia (posse, demonstração, etc.).\n*Ex:* **Minha** caneta falhou.\n\n🔹 **Pronome Substantivo:** É aquele que **SUBSTITUI** o substantivo, assumindo seu lugar na frase para evitar repetição.\n*Ex:* A caneta falhou, por isso joguei-**a** fora (o 'a' substitui caneta)."
        },
        "tags": ["Língua Portuguesa", "Pronomes", "Morfologia", "FGV", "TJ-SC"]
    },
    {
        "id": 10092,
        "front": {
            "title": "Língua Portuguesa — Pronomes Interrogativos ❓",
            "subtitle": "Quais são os principais pronomes interrogativos e como identificar uma Interrogativa Indireta?"
        },
        "back": {
            "body": "🔹 **Principais:** Que, quem, qual(is), quantos [1]. Também podem ser usados onde, quando e por que [2].\n\n🚨 **PEGADINHA FGV (Interrogativa Indireta):**\nÉ uma pergunta disfarçada! Ela **NÃO possui ponto de interrogação**, mas expressa uma dúvida/questionamento [1].\n*Ex:* Ignoro **quantos** processos restam. ('Quantos' atua como pronome interrogativo)."
        },
        "tags": ["Língua Portuguesa", "Pronomes", "Pronomes Interrogativos", "Sintaxe", "FGV", "TJ-SC"]
    },
    {
        "id": 10093,
        "front": {
            "title": "Língua Portuguesa — Pronome Indefinido vs Adjetivo 🕵️‍♂️",
            "subtitle": "Qual é a regra de posição das palavras 'CERTO' e 'BASTANTE'?"
        },
        "back": {
            "body": "A posição muda a classe gramatical para a banca FGV!\n\n🔹 **ANTES do substantivo:** Funciona como **Pronome Indefinido** (Ideia vaga/Quantidade).\n*Ex:* Tinha **bastante** trabalho / **Certas** coisas me irritam.\n\n🔹 **DEPOIS do substantivo:** Funciona como **Adjetivo** (Característica/Qualidade).\n*Ex:* Não tenho motivos **bastantes** (suficientes) / Escolheu a resposta **certa** (correta)."
        },
        "tags": ["Língua Portuguesa", "Pronomes Indefinidos", "Morfologia", "FGV", "TJ-SC"]
    },
    {
        "id": 10094,
        "front": {
            "title": "Língua Portuguesa — Pronome Oblíquo Possessivo 🕵️‍♂️",
            "subtitle": "Qual é a grande pegadinha da FGV envolvendo pronomes como ME, TE e LHE?"
        },
        "back": {
            "body": "🚨 **A ARMADILHA:**\nOs pronomes pessoais oblíquos (*me, te, se, lhe, o, a, nos, vos*) podem atuar com valor de **Pronome Possessivo** na frase!\n\n🔹 **Macete:** Tente substituir por *meu, seu, dele, nosso*.\n*Ex:* Beijou-**lhe** o rosto. = Beijou o **seu** rosto (rosto dele).\n*Ex:* Roubaram-**nos** o carro. = Roubaram o **nosso** carro."
        },
        "tags": ["Língua Portuguesa", "Pronomes Possessivos", "Pronomes Oblíquos", "Sintaxe", "FGV", "TJ-SC"]
    },
    {
        "id": 10095,
        "front": {
            "title": "Língua Portuguesa — Funções dos Pronomes Demonstrativos 🎯",
            "subtitle": "Qual a diferença entre a Função Anafórica, Catafórica e Exofórica (Dêitica)?"
        },
        "back": {
            "body": "🔹 **Anafórica:** Retoma algo que *já passou* no texto. (Usa-se E**SS**E / I**SS**O).\n🔹 **Catafórica:** Antecipa o que *vai ser dito*. (Usa-se ES**T**E / IS**T**O).\n🔹 **Exofórica (Dêitica):** Aponta para algo fora do texto, no mundo real (Ex: *Aquela* nuvem).\n\n🚨 **Macete FGV:** SS = passado. T = esTá por vir."
        },
        "tags": ["Língua Portuguesa", "Pronomes Demonstrativos", "Coesão Textual", "FGV", "TJ-SC"]
    },
    {
        "id": 10096,
        "front": {
            "title": "Língua Portuguesa — Pronome Relativo 'CUJO' 🔗",
            "subtitle": "Qual é a dupla regra de ouro do pronome 'CUJO' (e suas flexões) cobrada pela FGV?"
        },
        "back": {
            "body": "🔹 **1. Sentido:** Indica sempre uma relação de **POSSE** entre os termos.\n🔹 **2. Concordância:** Ele NUNCA concorda com o possuidor (o que vem antes), ele sempre concorda em gênero e número com a **COISA POSSUÍDA** (o substantivo que vem *depois* dele) [3].\n\n🚨 *Atenção:* É proibido usar artigo logo após o cujo (Ex: 'cujo o carro' está errado!)."
        },
        "tags": ["Língua Portuguesa", "Pronomes Relativos", "Sintaxe", "FGV", "TJ-SC"]
    },
    {
        "id": 10097,
        "front": {
            "title": "Língua Portuguesa — Pronomes de Tratamento 👔",
            "subtitle": "Quais são os pronomes de tratamento usados para JUIZ, REITOR e SACERDOTE?"
        },
        "back": {
            "body": "🔹 **Juiz (Alto Escalão):** Vossa Excelência (V. Exa.)\n🔹 **Reitor de Universidade:** Vossa Magnificência (V. Mag.)\n🔹 **Sacerdote/Clérigo:** Vossa Reverendíssima (V. Revma.)"
        },
        "tags": ["Língua Portuguesa", "Pronomes de Tratamento", "FGV", "TJ-SC"]
    },
    {
        "id": 10098,
        "front": {
            "title": "Língua Portuguesa — Pronomes Pessoais: EU vs MIM 🥊",
            "subtitle": "Qual é a regra de ouro para escolher entre 'PARA EU' e 'PARA MIM'?"
        },
        "back": {
            "body": "🔹 **PARA EU:** Usado quando o pronome for o **SUJEITO** de um verbo no infinitivo logo à frente.\n*Ex:* Pediu licença para **EU** *sair*.\n\n🔹 **PARA MIM:** Usado quando for apenas o **OBJETO** da ação (geralmente no final da ideia, sem verbo conjugável depois).\n*Ex:* Ele trouxe o café para **MIM**.\n\n🚨 *Lembre-se do macete:* Índio não faz ação! 'Mim' não conjuga verbo!"
        },
        "tags": ["Língua Portuguesa", "Pronomes Pessoais", "Sintaxe", "FGV", "TJ-SC"]
    },
    {
        "id": 10100,
        "front": {
            "title": "Língua Portuguesa — Colocação Pronominal I 🚫",
            "subtitle": "Qual é a regra absoluta e intocável sobre o INÍCIO de frases?"
        },
        "back": {
            "body": "🚨 **REGRA DE OURO:**\n**NUNCA se inicia uma frase com pronome oblíquo átono** (*me, te, se, lhe, nos, vos, o, a*).\n\n🔹 Se a frase começar pelo verbo, você é **obrigado** a usar a ÊNCLISE (pronome depois do verbo).\n*Errado:* Me disseram a verdade.\n*Certo:* Disseram-me a verdade."
        },
        "tags": ["Língua Portuguesa", "Colocação Pronominal", "Sintaxe", "FGV", "TJ-SC"]
    },
    {
        "id": 10101,
        "front": {
            "title": "Língua Portuguesa — Próclise 🧲",
            "subtitle": "Quais são as principais 'palavras atrativas' que obrigam o uso da Próclise?"
        },
        "back": {
            "body": "A **Próclise** (pronome ANTES do verbo) é obrigatória quando há palavras atrativas [1].\n\n🔹 **O Trio de Ouro da FGV:**\n1. Palavras Negativas (*não, nunca, ninguém*).\n2. Pronomes Relativos (*que, quem, onde*).\n3. Conjunções Subordinativas (*embora, se, conforme, quando*).\n\n🚨 *Ex:* **Não me** diga mentiras / A mulher **que se** foi."
        },
        "tags": ["Língua Portuguesa", "Colocação Pronominal", "Próclise", "Sintaxe", "FGV", "TJ-SC"]
    },
    {
        "id": 10103,
        "front": {
            "title": "Língua Portuguesa — Mesóclise ✂️",
            "subtitle": "Quais são as duas condições para o uso da Mesóclise e qual é a Regra de Desempate da FGV?"
        },
        "back": {
            "body": "🔹 **1.** Verbo no FUTURO do Indicativo (Presente ou Pretérito).\n🔹 **2.** NÃO pode haver palavra atrativa (ímã) antes dele.\n\n🚨 **Regra de Desempate:** Se houver um verbo no futuro E uma palavra atrativa na mesma frase, a **PRÓCLISE É A VENCEDORA!** (Ex: *Não* te avisarei. E nunca 'Não avisar-te-ei')."
        },
        "tags": ["Língua Portuguesa", "Colocação Pronominal", "Mesóclise", "FGV", "TJ-SC"]
    },
    {
        "id": 10104,
        "front": {
            "title": "Língua Portuguesa — Modos Verbais 🎭",
            "subtitle": "Qual é a intenção (atitude) transmitida pelos modos Indicativo, Subjuntivo e Imperativo?"
        },
        "back": {
            "body": "🔹 **INDICATIVO:** Exprime **Certeza** (um fato real ou tido como certo).\n🔹 **SUBJUNTIVO:** Exprime **Dúvida, Hipótese ou Desejo** (algo incerto ou irreal).\n🔹 **IMPERATIVO:** Exprime **Ordem, Pedido, Conselho ou Sugestão**."
        },
        "tags": ["Língua Portuguesa", "Verbos", "Modos Verbais", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10105,
        "front": {
            "title": "Língua Portuguesa — Presente do Indicativo ⏳",
            "subtitle": "Além de indicar algo que acontece no momento da fala, quais são os outros 3 usos semânticos do Presente do Indicativo?"
        },
        "back": {
            "body": "Segundo a norma-padrão e a cobrança da FGV, o Presente do Indicativo também expressa:\n\n🔹 **1. Fatos Habituais/Rotina:** (Ex: Ele *estuda* todos os dias).\n🔹 **2. Verdades Universais/Científicas:** (Ex: O homem *é* mortal).\n🔹 **3. Futuro Programado/Certo:** (Ex: Amanhã o diretor *assina* as férias)."
        },
        "tags": ["Língua Portuguesa", "Verbos", "Tempos Verbais", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10107,
        "front": {
            "title": "Direitos Humanos — O Princípio da Igualdade na DUDH ⚖️",
            "subtitle": "Para as provas, a igualdade prevista na DUDH é absoluta/material ou jurídica/moral?"
        },
        "back": {
            "body": "🔹 **A IGUALDADE É JURÍDICA E MORAL.**\n\n🚨 **O Pega-Ratão:** A DUDH *não* estabelece igualdade material absoluta (eliminação total das diferenças econômicas). Ela garante que todos tenham o mesmo valor perante a lei e a mesma dignidade humana, vedando a discriminação."
        },
        "tags": ["Direitos Humanos", "DUDH", "Igualdade", "TJ-SC"]
    },
    {
        "id": 10108,
        "front": {
            "title": "LGPD — Papéis no Tratamento de Dados 🎭",
            "subtitle": "Qual é a diferença exata entre Controlador, Operador e Encarregado (DPO)?"
        },
        "back": {
            "body": "🔹 **Controlador:** Toma as DECISÕES sobre o tratamento.\n🔹 **Operador:** EXECUTA as ordens (trata os dados em nome do controlador).\n🔹 **Encarregado:** É o CANAL DE COMUNICAÇÃO (Ponte entre Controlador ↔ Titular ↔ ANPD) e orienta funcionários."
        },
        "tags": ["Informática", "LGPD", "Agentes de Tratamento", "FGV", "TJ-SC"]
    },
    {
        "id": 10109,
        "front": {
            "title": "Língua Portuguesa — Conjunção 'Sempre que' ⏳",
            "subtitle": "Qual é o valor semântico (sentido) da locução conjuntiva 'Sempre que'?"
        },
        "back": {
            "body": "🔹 **TEMPO (Frequência/Recorrência).**\n\n🚨 **O Pega-Ratão:** Não confunda com Causa! 'Sempre que' indica *quando* a ação acontece repetidamente.\n*Ex:* **Sempre que** chove, ela fica em casa. (Equivale a: *Toda vez que / Quando*)."
        },
        "tags": ["Língua Portuguesa", "Conjunções", "Orações Subordinadas", "Tempo", "TJ-SC"]
    },
    {
        "id": 10110,
        "front": {
            "title": "Língua Portuguesa — Expressão 'Cerca de' 📐",
            "subtitle": "Qual é a lógica semântica para o uso adequado da expressão 'cerca de' nas provas da FGV?"
        },
        "back": {
            "body": "🔹 **CERCA DE = APROXIMADAMENTE.** Exige o acompanhamento de números redondos (10, 50, 100, mil, dúzia).\n\n🚨 **O Pega-Ratão:** É ilógico (impropriedade léxica) usar 'cerca de' junto com números exatos ou 'quebrados'.\n❌ *Errado:* Cerca de 18 / Cerca de 47.\n✅ *Correto:* Cerca de 20 / Cerca de 50."
        },
        "tags": ["Língua Portuguesa", "Semântica", "Expressões", "Impropriedade Léxica", "FGV", "TJ-SC"]
    },
    {
        "id": 10111,
        "front": {
            "title": "Direito Administrativo — Violação da Moralidade ⚖️",
            "subtitle": "Um ato administrativo que viola a Moralidade sofre controle de legalidade (Anulação) ou de mérito (Revogação)?"
        },
        "back": {
            "body": "🔹 **Controle de LEGALIDADE (Anulação).**\n\n🚨 **O Pega-Ratão da FGV:** A banca tenta te convencer de que moralidade é só 'conveniência' ou 'ética subjetiva'. Falso! A Moralidade é princípio jurídico. Feriu a moralidade = Feriu a lei = O ato deve ser ANULADO (e não revogado) [1, 2]."
        },
        "tags": ["Direito Administrativo", "Princípios", "Moralidade", "Atos Administrativos", "TJ-SC"]
    },
    {
        "id": 10112,
        "front": {
            "title": "Língua Portuguesa — Pretérito Perfeito do Indicativo ⏳",
            "subtitle": "Quais são os dois sentidos possíveis do Pretérito Perfeito segundo a Dica 57?"
        },
        "back": {
            "body": "🔹 **1. Ação 100% concluída no passado:** Fato com início e fim definidos lá atrás (Ex: *Ontem levantei cedo*).\n🔹 **2. Ação concluída com EFEITOS presentes:** O fato acabou, mas as consequências perduram até hoje (Ex: *Aprendi inglês na infância* - o conhecimento continua)."
        },
        "tags": ["Língua Portuguesa", "Verbos", "Pretérito Perfeito", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10113,
        "front": {
            "title": "Língua Portuguesa — Pretérito Perfeito Composto ⏳",
            "subtitle": "Qual é a estrutura de formação e o valor semântico (sentido) do Pretérito Perfeito Composto do Indicativo?"
        },
        "back": {
            "body": "🔹 **Sentido:** Ação que começou no passado e **continua até o presente**.\n🔹 **Estrutura (A Pegadinha):** Verbo Auxiliar no PRESENTE (*Tenho/Tem/Temos*) + Verbo Principal no PARTICÍPIO (*-ado/-ido*).\n*Ex:* O servidor **tem trabalhado** muito."
        },
        "tags": ["Língua Portuguesa", "Verbos", "Tempos Compostos", "FGV", "TJ-SC"]
    },
    {
        "id": 10114,
        "front": {
            "title": "Língua Portuguesa — Pretérito Imperfeito do Indicativo ⏳",
            "subtitle": "Quais são as principais funções (valores semânticos) do Pretérito Imperfeito cobradas pela FGV?"
        },
        "back": {
            "body": "🔹 **1. Hábito no passado:** Uma rotina que ficou lá atrás (Ex: *Ele estudava todos os dias*).\n🔹 **2. Ação em andamento/inacabada:** Algo que estava acontecendo (Ex: *Ela tomava banho quando a luz caiu*).\n🔹 **3. Polidez/Educação:** Suavizar um pedido no presente (Ex: *Eu queria um café*)."
        },
        "tags": ["Língua Portuguesa", "Verbos", "Pretérito Imperfeito", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10115,
        "front": {
            "title": "Língua Portuguesa — Pretérito Mais-que-perfeito do Indicativo ⏳",
            "subtitle": "Qual é a principal função semântica (sentido) do Pretérito Mais-que-perfeito?"
        },
        "back": {
            "body": "🔹 **O Passado do Passado:** Indica uma ação que já estava 100% concluída ANTES de outra ação que também ocorreu no passado.\n*Ex:* Quando o juiz entrou na sala, o réu já **tinha confessado**. (A confissão aconteceu ANTES da entrada)."
        },
        "tags": ["Língua Portuguesa", "Verbos", "Tempos Verbais", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10116,
        "front": {
            "title": "Língua Portuguesa — Futuro do Presente do Indicativo 🔮",
            "subtitle": "Quais são os 3 principais valores semânticos (sentidos) desse tempo verbal?"
        },
        "back": {
            "body": "🔹 **1. Ação futura planejada:** Certeza de que vai ocorrer (Ex: *Amanhã viajarei*).\n🔹 **2. Promessas ou Previsões:** Compromisso assumido (Ex: *Eu te ajudarei*).\n🔹 **3. Possibilidades/Conjecturas:** Depende de um fator futuro (Ex: *Eles chegarão a tempo, se não chover*)."
        },
        "tags": ["Língua Portuguesa", "Verbos", "Tempos Verbais", "Semântica", "FGV", "TJ-SC"]
    },
    {
        "id": 10117,
        "front": {
            "title": "Direito Constitucional — Direitos x Garantias e Alcance ⚖️",
            "subtitle": "Qual é a diferença entre Direitos e Garantias? O turista estrangeiro possui direitos no Brasil?"
        },
        "back": {
            "body": "🔹 **Direitos:** São os bens protegidos (Ex: Liberdade).\n🔹 **Garantias:** São os instrumentos de proteção (Ex: Habeas Corpus).\n\n🚨 **O Pega-Ratão (Alcance):** A CF fala em 'estrangeiros residentes', mas o STF garante que **QUALQUER PESSOA** em território nacional (inclusive turista de passagem/trânsito) é titular de direitos fundamentais!"
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Direitos e Garantias", "STF", "FGV"]
    },
    {
        "id": 10118,
        "front": {
            "title": "Direito Constitucional — Princípio da Igualdade (Isonomia) ⚖️",
            "subtitle": "Qual a diferença entre Igualdade na Lei e Igualdade perante a Lei? O tratamento diferenciado é permitido?"
        },
        "back": {
            "body": "🔹 **Igualdade NA lei:** Limita o legislador. Ele pode (e deve) criar leis com tratamentos diferenciados para equilibrar desigualdades, desde que haja **razoabilidade**.\n🔹 **Igualdade PERANTE a lei:** Limita o aplicador (juiz/Estado). Ele não pode discriminar quem a lei tratou como igual.\n🚨 **Atenção:** Tratar os desiguais de forma desigual (ex: cotas) é a busca pela **Igualdade Material**."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Igualdade", "Isonomia", "TJ-SC"]
    },
    {
        "id": 10119,
        "front": {
            "title": "Direito Constitucional — Tortura vs. Tratamento Degradante ⚖️",
            "subtitle": "Qual a diferença conceitual entre Tortura e Tratamento Degradante segundo o nosso material?"
        },
        "back": {
            "body": "🔹 **Tortura:** Ação/omissão que gera INTENSO sofrimento físico ou mental. Tem finalidade (obter confissão, punir, intimidar, discriminar).\n🔹 **Tratamento Degradante:** Focado na HUMILHAÇÃO. A pessoa é diminuída diante dos outros ou de si mesma."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Tortura", "Direitos Fundamentais", "TJ-SC"]
    },
    {
        "id": 10120,
        "front": {
            "title": "Direito Constitucional — Liberdade de Expressão 🗣️",
            "subtitle": "Quais são as três regras de ouro da manifestação do pensamento no Art. 5º?"
        },
        "back": {
            "body": "🔹 **1. Vedação ao Anonimato:** É livre a manifestação, mas você deve se identificar.\n🔹 **2. Direito de Resposta:** Deve ser proporcional ao agravo + direito à indenização (cabe para PF e PJ).\n🔹 **3. Fim da Censura:** É proibida qualquer censura prévia (a responsabilização ocorre *a posteriori*)."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Liberdade de Expressão", "TJ-SC", "FGV"]
    },
    {
        "id": 10121,
        "front": {
            "title": "Direito Constitucional — Privacidade e Sigilo Bancário 🏦",
            "subtitle": "Os danos moral e material são cumulativos? Quem tem poderes para determinar a quebra de sigilo bancário?"
        },
        "back": {
            "body": "🔹 **Danos:** Sim! Dano moral e material decorrentes do mesmo fato são **CUMULATIVOS**.\n🔹 **Quebra de Sigilo Bancário:** Pode ser determinada por:\n1) Juiz (Poder Judiciário)\n2) CPIs (Apenas Federais e Estaduais)\n3) Autoridades Fazendárias (Receita)\n4) **Ministério Público: APENAS quando envolver verbas públicas!** (Se for crime comum privado, o MP precisa pedir ao juiz)."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Privacidade", "Sigilo Bancário", "TJ-SC", "FGV"]
    },
    {
        "id": 10122,
        "front": {
            "title": "Direito Constitucional — Inviolabilidade Domiciliar 🏠",
            "subtitle": "O que é 'casa'? Quais são as exceções para entrar sem consentimento (Dia vs Noite)?"
        },
        "back": {
            "body": "🔹 **É Casa:** Quarto de hotel, escritório, consultório, boleia de caminhão.\n🔹 **Qualquer hora (Dia/Noite):** Flagrante delito, desastre ou prestar socorro.\n🔹 **Somente de Dia (05h às 21h):** Determinação Judicial.\n🚨 **Exceção STF (Noturna):** Ordem judicial pode autorizar entrada à noite em escritório/empresa EXCLUSIVAMENTE para plantar **escuta ambiental**."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Inviolabilidade Domiciliar", "STF", "TJ-SC"]
    },
    {
        "id": 10123,
        "front": {
            "title": "Direito Constitucional — Sigilo das Comunicações 📞",
            "subtitle": "Qual a diferença de autoridade competente entre a Interceptação Telefônica e a Quebra do Sigilo Telefônico?"
        },
        "back": {
            "body": "🔹 **Interceptação Telefônica (Grampo/Ouvir a conversa):** \nSÓ O JUIZ PODE! E apenas para investigação criminal/processual penal.\n\n🔹 **Quebra de Sigilo Telefônico (Extrato com data, hora e duração):** \nJUIZ e CPIs (Federais ou Estaduais) PODEM."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Sigilo Telefônico", "CPI", "TJ-SC", "FGV"]
    },
    {
        "id": 10124,
        "front": {
            "title": "Direito Constitucional — Liberdade de Trabalho 💼",
            "subtitle": "Qual a classificação dessa norma? Quais são os 2 casos clássicos do STF sobre a exigência de qualificação?"
        },
        "back": {
            "body": "🔹 **Classificação:** Norma de Eficácia Contida.\n🔹 **Regra do STF:** Só se pode exigir qualificação/diploma se a profissão trouxer RISCO COLETIVO (perigo iminente).\n🔹 **Exame da OAB:** É CONSTITUCIONAL (há risco social).\n🔹 **Diploma de Jornalista:** É INCONSTITUCIONAL (não há risco que justifique)."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Liberdade de Profissão", "STF", "TJ-SC"]
    },
    {
        "id": 10125,
        "front": {
            "title": "Direito Constitucional — Direito de Reunião 📢",
            "subtitle": "Quais são os requisitos constitucionais para reuniões em locais abertos? Qual o remédio cabível em caso de violação?"
        },
        "back": {
            "body": "🔹 **Requisitos (Art. 5º, XVI):** \n1) Fim pacífico e sem armas.\n2) Locais abertos ao público.\n3) Não frustrar outra reunião já agendada.\n4) **INDEPENDE de autorização**, exigindo-se **APENAS prévio aviso** à autoridade.\n\n🚨 **Remédio Cabível:** Mandado de Segurança (NÃO é Habeas Corpus!)."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Direito de Reunião", "TJ-SC", "FGV"]
    },
    {
        "id": 10126,
        "front": {
            "title": "Direito Constitucional / Direitos Humanos — Prisão por Dívida ⛓️",
            "subtitle": "Quais são as regras para a prisão civil por dívida no Brasil segundo o STF?"
        },
        "back": {
            "body": "🔹 **Regra Geral:** NINGUÉM será preso por dívida [2].\n🔹 **A ÚNICA EXCEÇÃO VÁLIDA:** Devedor de pensão alimentícia (inadimplemento voluntário e INESCUSÁVEL = sem desculpa) [1].\n🚨 **O Pega-Ratão (Depositário Infiel):** Está escrito na CF, mas o **STF PROIBIU** a prisão dele com base no Pacto de São José da Costa Rica [1]."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Direitos Humanos", "Pacto de São José", "TJ-SC"]
    },
    {
        "id": 10128,
        "front": {
            "title": "Direito Penal — A Guerra dos Verbos 🚔",
            "subtitle": "Qual a diferença e os verbos de Corrupção Ativa, Corrupção Passiva e Concussão?"
        },
        "back": {
            "body": "🔹 **Corrupção ATIVA (Crime do Particular):** OFERECER ou PROMETER vantagem indevida.\n🔹 **Corrupção PASSIVA (Crime do Servidor Manso):** SOLICITAR, RECEBER ou ACEITAR PROMESSA.\n🔹 **CONCUSSÃO (Crime do Servidor Autoritário):** EXIGIR vantagem indevida."
        },
        "tags": ["Direito Penal", "Crimes contra a Administração", "FGV", "TJ-SC"]
    },
    {
        "id": 10129,
        "front": {
            "title": "Direito Constitucional — Desapropriação (Art. 5º) 🏡",
            "subtitle": "Qual a REGRA de pagamento da desapropriação e quais as 3 EXCEÇÕES?"
        },
        "back": {
            "body": "🔹 **A REGRA:** Justa, prévia e em **DINHEIRO**.\n🔹 **Exceção 1 (Urbano sem função social):** Títulos da Dívida Pública.\n🔹 **Exceção 2 (Rural para Reforma Agrária):** Títulos da Dívida Agrária.\n🚨 **Exceção 3 (Trabalho Escravo / Drogas):** Expropriação Confiscatória = **SEM INDENIZAÇÃO (ZERO)**."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Direito de Propriedade", "Desapropriação", "FGV"]
    },
    {
        "id": 10131,
        "front": {
            "title": "Direito Constitucional — Requisição Administrativa 🚨",
            "subtitle": "Qual é o requisito para acontecer e como funciona a indenização?"
        },
        "back": {
            "body": "🔹 **Requisito:** Iminente Perigo Público (enchentes, desastres, etc.).\n🔹 **O que ocorre:** O Estado usa a propriedade particular temporariamente.\n🔹 **Indenização:** É **ULTERIOR** (paga depois) e **SOMENTE SE HOUVER DANO**. \n🚨 *Atenção:* O Estado não paga 'aluguel' pelo uso do bem."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Requisição Administrativa", "Propriedade", "TJ-SC"]
    },
    {
        "id": 10134,
        "front": {
            "title": "Direito Constitucional — Direito do Autor 📚",
            "subtitle": "Como funciona o direito exclusivo do Autor vs. do Inventor, e o que ocorre após a morte?"
        },
        "back": {
            "body": "🔹 **Autor (Livros/Músicas):** Direito exclusivo pela **vida toda**.\n🔹 **Herdeiros do Autor:** Recebem o direito, mas APENAS **pelo tempo que a lei fixar** (Não é eterno!).\n🚨 **O Pega-Ratão (O Inventor):** Diferente do autor, o criador de inventos industriais (Propriedade Industrial) ganha um privilégio **APENAS TEMPORÁRIO** desde o início."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Direitos do Autor", "Propriedade Industrial", "TJ-SC"]
    },
    {
        "id": 10135,
        "front": {
            "title": "Direito Constitucional — Direito de Herança ⚰️",
            "subtitle": "Qual lei regula a sucessão de bens de estrangeiros situados no Brasil (com herdeiros BR)?"
        },
        "back": {
            "body": "🔹 **A REGRA:** Será aplicada a **LEI BRASILEIRA** em benefício do cônjuge ou filhos brasileiros.\n🚨 **A EXCEÇÃO (Pega-ratão):** Aplica-se a lei do estrangeiro falecido (*de cujus*) se ela for **MAIS FAVORÁVEL** aos herdeiros brasileiros."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Direito de Herança", "Sucessão de Estrangeiro", "TJ-SC"]
    },
    {
        "id": 10136,
        "front": {
            "title": "Direito Constitucional — Habeas Data x Mandado de Segurança 🛡️",
            "subtitle": "Qual remédio constitucional usar quando o Estado nega o acesso a uma informação?"
        },
        "back": {
            "body": "🔹 **Habeas Data:** Usado SOMENTE para acessar ou retificar (corrigir) informações **PESSOAIS (do próprio impetrante)** em bancos de dados do governo ou de caráter público.\n🔹 **Mandado de Segurança:** Usado para acessar informações de interesse **GERAL ou COLETIVO** (ex: contratos da prefeitura, andamento de licitações, gastos públicos, etc.)."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Remédios Constitucionais", "Habeas Data", "TJ-SC"]
    },
    {
        "id": 10138,
        "front": {
            "title": "Direito Constitucional — Direito de Ação ⚖️",
            "subtitle": "Qual é a REGRA sobre o prévio esgotamento das vias administrativas e quais são as 3 EXCEÇÕES?"
        },
        "back": {
            "body": "🔹 **A REGRA:** NÃO é necessário esgotar a via administrativa para ir ao Judiciário.\n🚨 **AS 3 EXCEÇÕES (Jurisdição Condicionada):** \n1) **Justiça Desportiva** (disciplina/competições).\n2) **Habeas Data** (exige recusa/omissão administrativa).\n3) **Reclamação ao STF** (contra a Adm. Pública por descumprimento de Súmula Vinculante)."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Direito de Ação", "Inafastabilidade de Jurisdição", "TJ-SC"]
    },
    {
        "id": 10140,
        "front": {
            "title": "Direito Constitucional — Segurança Jurídica 🛡️",
            "subtitle": "O que a lei nova NÃO prejudicará (Art. 5º, XXXVI) e o que é Expectativa de Direito?"
        },
        "back": {
            "body": "A lei nova NÃO prejudicará:\n🔹 **1. Direito Adquirido:** Requisitos já totalmente cumpridos na lei velha.\n🔹 **2. Ato Jurídico Perfeito:** Negócio/contrato já consumado.\n🔹 **3. Coisa Julgada:** Decisão do juiz sem mais recursos.\n🚨 **O Pega-Ratão:** *Expectativa de Direito* (ex: faltava 1 mês para aposentar) **NÃO TEM PROTEÇÃO** contra lei nova!"
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Segurança Jurídica", "Direito Adquirido", "TJ-SC"]
    },
    {
        "id": 10141,
        "front": {
            "title": "Direito Constitucional — Princípio do Juiz Natural ⚖️",
            "subtitle": "O que é o Tribunal de Exceção e qual é a regra constitucional sobre ele?"
        },
        "back": {
            "body": "🔹 **A Regra Absoluta:** NÃO HAVERÁ juízo ou tribunal de exceção no Brasil.\n🔹 **O que é:** É um tribunal/juiz (*ad hoc*) criado **DEPOIS** do fato, com a finalidade exclusiva de julgar uma pessoa ou caso específico.\n🚨 **Foco de Prova:** Ninguém será processado senão pela autoridade competente (definida ANTES do crime)."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Juiz Natural", "Tribunal de Exceção", "TJ-SC"]
    },
    {
        "id": 10144,
        "front": {
            "title": "Direito Constitucional — Tribunal do Júri (Parte I) ⚖️",
            "subtitle": "Quais são os 4 princípios do Júri (Macete Com PS2) e qual a maior pegadinha de competência?"
        },
        "back": {
            "body": "🔹 **Princípios (Mnemônico Com PS2):** \n1) **Com**petência para crimes DOLOSOS contra a vida.\n2) **P**lenitude de defesa.\n3) **S**igilo das votações.\n4) **S**oberania dos veredictos.\n\n🚨 **O Pega-Ratão:** **Latrocínio** (roubo + morte), homicídio *culposo* e lesão corporal seguida de morte **NÃO VÃO** para o Júri! Eles são julgados pelo juiz comum."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Tribunal do Júri", "Com PS2", "TJ-SC"]
    },
    {
        "id": 10145,
        "front": {
            "title": "Súmula Vinculante 45 — Júri x Foro Privilegiado ⚖️",
            "subtitle": "Quem julga a autoridade com foro privilegiado que comete crime doloso contra a vida?"
        },
        "back": {
            "body": "🔹 **A Regra (SV 45):** A competência constitucional do Tribunal do Júri **PREVALECE** sobre o foro por prerrogativa de função estabelecido *exclusivamente* pela Constituição Estadual.\n🚨 **A Exceção Suprema:** Se o foro privilegiado estiver previsto na **Constituição Federal** (ex: Juízes, Promotores, Parlamentares Federais), a autoridade **NÃO** vai a júri popular!"
        },
        "tags": ["Direito Constitucional", "Tribunal do Júri", "Súmula Vinculante 45", "Foro Privilegiado", "TJ-SC"]
    },
    {
        "id": 10146,
        "front": {
            "title": "Direito Constitucional/Penal — Princípio da Legalidade 🛡️",
            "subtitle": "Quais são os dois pilares do Princípio da Legalidade e qual a maior pegadinha sobre a criação de crimes?"
        },
        "back": {
            "body": "O Princípio da Legalidade se divide em:\n🔹 **1. Anterioridade:** A lei penal deve existir **ANTES** da conduta (proíbe a retroatividade para prejudicar).\n🔹 **2. Reserva Legal:** Somente **LEI** em sentido estrito pode criar crimes e penas.\n🚨 **O Pega-Ratão:** **Medida Provisória e Decretos NÃO PODEM** criar crimes ou cominar penas em nenhuma hipótese!"
        },
        "tags": ["Direito Constitucional", "Direito Penal", "Legalidade", "Reserva Legal", "Anterioridade", "TJ-SC"]
    },
    {
        "id": 10148,
        "front": {
            "title": "Direito Penal — Reserva Legal e Medidas Provisórias 🛡️",
            "subtitle": "Medida Provisória (MP) pode tratar de matéria de Direito Penal?"
        },
        "back": {
            "body": "🔹 **Regra Geral:** NÃO! A CF veda edição de MP em matéria penal e processual penal (Reserva Legal).\n🚨 **A Exceção (Jurisprudência do STF):** É admitida a edição de Medida Provisória em matéria penal **DESDE QUE seja favorável (benéfica)** ao réu (ex: descriminalizar uma conduta)!"
        },
        "tags": ["Direito Constitucional", "Direito Penal", "Reserva Legal", "Medida Provisória", "STF", "TJ-SC"]
    },
    {
        "id": 10150,
        "front": {
            "title": "Direito Constitucional — Crime de Racismo ⚖️",
            "subtitle": "Quais são as 3 características constitucionais do crime de racismo (Art. 5º, XLII)?"
        },
        "back": {
            "body": "O crime de racismo possui 3 características absolutas:\n🔹 **1. Inafiançável** (não cabe fiança).\n🔹 **2. Imprescritível** (não prescreve com o tempo, o Estado pune a qualquer momento).\n🚨 **3. Pena de RECLUSÃO!** (O Pega-Ratão: a FGV adora trocar por 'detenção')."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Racismo", "Imprescritível", "TJ-SC"]
    },
    {
        "id": 10153,
        "front": {
            "title": "Direito Constitucional — Matriz dos Crimes Constitucionais ⚖️",
            "subtitle": "Quais são os crimes Imprescritíveis, quais são os Insuscetíveis de Graça/Anistia e quais são Inafiançáveis?"
        },
        "back": {
            "body": "⏳ **Imprescritíveis (Macete 'R AÇÃO'):** **R**acismo e **Ação** de Grupos Armados.\n🚫 **Insuscetíveis de Graça/Anistia:** **3TH** (Tortura, Tráfico, Terrorismo, Hediondos).\n🔒 **Inafiançáveis:** TODOS ELES!\n🚨 **O Pega-Ratão:** A banca vai dizer que Tortura ou Tráfico são imprescritíveis. FALSO! Eles prescrevem com o tempo."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Crimes Constitucionais", "Imprescritível", "3TH", "TJ-SC"]
    },
    {
        "id": 10154,
        "front": {
            "title": "Direito Constitucional — Penas Proibidas 🚫",
            "subtitle": "Quais são as 5 penas proibidas, qual é a única exceção e qual é o limite máximo de prisão?"
        },
        "back": {
            "body": "🔹 **As 5 Penas Proibidas:** \n1) Caráter Perpétuo;\n2) Trabalhos forçados;\n3) Banimento;\n4) Cruéis;\n5) Morte.\n\n🚨 **A Única Exceção:** A pena de morte é admitida em caso de **GUERRA DECLARADA**.\n⏳ **Limite Máximo (STF):** O tempo máximo de cumprimento de pena no Brasil é de **40 anos**."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Penas Proibidas", "Pena de Morte", "TJ-SC"]
    },
    {
        "id": 10155,
        "front": {
            "title": "Direito Constitucional — Extradição 🛂",
            "subtitle": "Brasileiro nato pode ser extraditado? E o naturalizado?"
        },
        "back": {
            "body": "🔹 **Nato:** **JAMAIS** é extraditado (Art. 5º, LI).\n🔹 **Naturalizado:** Só em 2 casos:\n1) Crime COMUM praticado **ANTES** da naturalização.\n2) Tráfico de Drogas (a **QUALQUER TEMPO**).\n🚨 **Estrangeiro:** Não é extraditado por crime POLÍTICO ou de OPINIÃO."
        },
        "tags": ["Direito Constitucional", "Extradição", "Artigo 5º", "Nacionalidade", "TJ-SC"]
    },
    {
        "id": 10155,
        "front": {
            "title": "Direito Constitucional — Extradição 🛂",
            "subtitle": "Brasileiro nato pode ser extraditado? E o naturalizado?"
        },
        "back": {
            "body": "🔹 **Nato:** **JAMAIS** é extraditado (Art. 5º, LI).\n🔹 **Naturalizado:** Só em 2 casos:\n1) Crime COMUM praticado **ANTES** da naturalização.\n2) Tráfico de Drogas (a **QUALQUER TEMPO**).\n🚨 **Estrangeiro:** Não é extraditado por crime POLÍTICO ou de OPINIÃO."
        },
        "tags": ["Direito Constitucional", "Extradição", "Artigo 5º", "Nacionalidade", "TJ-SC"]
    },
    {
        "id": 10156,
        "front": {
            "title": "Direito Constitucional — Provas Ilícitas 🍎",
            "subtitle": "O que é a Teoria dos Frutos da Árvore Envenenada?"
        },
        "back": {
            "body": "🔹 **Definição:** É a doutrina (Art. 5º, LVI) que determina que uma prova obtida licitamente, mas que deriva de uma prova ilícita anterior, também é considerada inadmissível.\n🚨 **Exemplo:** Se a polícia descobre a localização de uma arma (prova derivada) através de uma tortura (prova ilícita originária), a apreensão da arma não pode ser usada no processo."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Provas Ilícitas", "Processo Penal", "TJ-SC"]
    },
    {
        "id": 10158,
        "front": {
            "title": "Direito Constitucional — Presunção de Inocência ⚖️",
            "subtitle": "Até quando alguém é considerado inocente e qual o entendimento do STF sobre a 2ª instância?"
        },
        "back": {
            "body": "🔹 **Duração:** Até o **trânsito em julgado** da sentença penal condenatória (Art. 5º, LVII).\n🔹 **STF (Atual):** É **VEDADA** a prisão automática após condenação em 2ª instância (é preciso esperar o fim de todos os recursos).\n🚨 **Cuidado:** Prisões de natureza **CAUTELAR** (preventiva) ainda podem ocorrer se houver necessidade demonstrada."
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "STF", "Jurisprudência", "TJ-SC"]
    },
    {
        "id": 10159,
        "front": {
            "title": "Direito Constitucional — Identificação Criminal 🪪",
            "subtitle": "Qual a regra da identificação criminal e como se classifica essa norma?"
        },
        "back": {
            "body": "🔹 **Regra:** O civilmente identificado NÃO será submetido a identificação criminal.\n🔹 **Exceção:** Salvo nas hipóteses previstas em LEI (ex: dúvida sobre o documento).\n🔹 **Classificação:** Norma de **Eficácia Contida** (pois a lei pode restringir o direito).\n🚨 **Atenção:** A FGV adora dizer que a proibição é absoluta. É FALSO!"
        },
        "tags": ["Direito Constitucional", "Artigo 5º", "Identificação Criminal", "Eficácia Contida", "TJ-SC"]
    },
    {
        "id": 10160,
        "front": {
            "title": "Direito Constitucional — Aplicabilidade das Normas 🚗",
            "subtitle": "Qual a diferença prática entre as normas de eficácia Plena, Contida e Limitada?"
        },
        "back": {
            "body": "🔹 **PLENA (Carro Livre):** Nasce com força total. Não precisa de lei e **NÃO PODE ser restringida**.\n🔹 **CONTIDA (Carro com Freio):** Nasce com força total, mas a Constituição autoriza que uma lei futura **RESTRINJA/FREIE** o direito (Ex: Identificação criminal - 'salvo na lei').\n🔹 **LIMITADA (Carro sem Motor):** Nasce travada/incompleta. Depende de uma lei futura para **FAZER FUNCIONAR** o direito (Ex: Greve de servidor)."
        },
        "tags": ["Direito Constitucional", "Aplicabilidade das Normas", "Eficácia Contida", "Eficácia Limitada", "TJ-SC"]
    }

]

// ── Mapa de Matérias ────────────────────────────────────────────────────────
export const mapaTJSC: Record<string, string[]> = {
    "Português": [
        "Portugues", "Português", "Língua Portuguesa", "Lingua Portuguesa",
        "Crase", "Concordancia Verbal", "Concordância Verbal",
        "Concordancia Nominal", "Concordância Nominal", "Pronomes", "Regencia Verbal",
        "Regência Verbal", "Sintaxe", "Pontuacao", "Pontuação", "Morfologia",
        "Colocacao Pronominal", "Colocação Pronominal", "Ortografia", "Semântica",
        "Conjuncoes", "Conjunções", "Fonologia", "Acentuação", "Acentuacao",
        "Novo Acordo", "Interpretação de Texto", "Redação",
        "Artigo", "Preposição", "Preposicao", "Preposições", "Preposicoes",
        "Vozes Verbais", "Verbos", "Adverbios", "Advérbios", "Substantivos",
        "Adjetivos", "Conectivos", "Coesão", "Coerência"
    ],
    "Ética e Gestão": [
        "Ética", "Etica", "Moral", "Conceitos", "Gestão Pública", "Gestao Publica",
        "Lei Anticorrupção", "Lei Anticorrupcao", "Responsabilidade Objetiva",
        "Improbidade Administrativa", "Dolo Específico", "Enriquecimento Ilícito",
        "Prejuízo ao Erário", "Sanções", "Herdeiros",
        "Independência das Instâncias", "Prescrição", "Prescricao",
        "Servidor Público", "Serviço Público"
    ],
    "Raciocínio Lógico": [
        "Logica", "Lógica", "Condicional", "Tabela-Verdade", "Quantificadores",
        "Conjuntos", "Probabilidade", "Sequencias", "Sequências", "Raciocinio Logico",
        "Raciocínio Lógico", "Argumentação"
    ],

    "Direito Constitucional": [
        "Constitucional", "Direito Constitucional", "Direitos Fundamentais", "Federacao", "Federação",
        "Remedios Constitucionais", "Remédios Constitucionais", "Poderes da Republica",
        "Poderes da República", "CF/88", "Artigo 5º", "Art. 5º",
        "Igualdade", "Isonomia", "Liberdade", "Direitos e Garantias",
        "Habeas Corpus", "Mandado de Seguranca", "Mandado de Segurança",
        "Habeas Data", "Mandado de Injuncao", "Mandado de Injunção",
        "Tortura", "Crimes Hediondos", "Inafiancavel", "Inafiançável",
        "Imprescritivel", "Imprescritível", "STF", "Controle de Constitucionalidade",
        "Direitos Sociais", "Direitos Politicos", "Direitos Políticos",
        "Processo Legislativo", "Emenda Constitucional", "Principio da Legalidade"
    ],
    "Direito Administrativo": [
        "Administrativo", "Principios", "Princípios", "Atos Administrativos",
        "Licitacao", "Licitação", "Servicos Publicos", "Serviços Públicos",
        "Agentes Publicos", "Agentes Públicos", "Poderes", "Contratos"
    ],
    "Informática": [
        "Informatica", "Informática", "Windows", "Internet", "Seguranca da Informacao",
        "Segurança da Informação", "Excel", "Pacote Office", "Redes", "IP",
        "Atalhos", "SaaS", "Computacao em Nuvem", "Computação em Nuvem"
    ],
    "Legislação TJ-SC": [
        "TJ-SC", "Estrutura", "Regimento", "Estatuto", "Legislacao", "Legislação",
        "LOMAN", "Codigo de Etica", "Código de Ética"
    ],
    "Direitos Humanos": [
        "Direitos Humanos", "DH", "DUDH", "Pacto de São José",
        "Pacto de San José", "CEDH", "Convenção Europeia",
        "Pacto Internacional", "PIDCP", "PIDESC", "Direitos Civis",
        "Direitos Políticos", "Direitos Sociais", "Direitos Econômicos",
        "Direitos Culturais", "Direito à Vida", "Direito à Liberdade",
        "Dignidade da Pessoa Humana", "Natureza Jurídica"
    ],
    "Direito Penal": [
        "Direito Penal", "Teoria do Crime", "Crimes Hediondos",
        "Imputacao Objetiva", "Erro de Tipo", "Erro de Proibição",
        "Culpa", "Dolo", "Legítima Defesa", "Estado de Necessidade",
        "Atenuantes", "Agravantes", "Concurso de Pessoas",
        "Concurso de Crimes", "Crimes contra a Administração", "Lavagem de Dinheiro",
        "Crimes Contra a Honra", "Crimes contra o Patrimônio", "Tortura",
        "Pena", "Dosimetria", "Crimes Contra a Fé Pública", "Crimes contra a Pessoa"
    ],

};

export const SUBJECT_LIST_TJSC = Object.keys(mapaTJSC);

export function getSubjectForCardTJSC(card: Flashcard): string {
    if (!card.tags || card.tags.length === 0) return "Outros";
    let bestSubject = "Outros";
    let bestScore = 0;
    for (const [subject, subjectTags] of Object.entries(mapaTJSC)) {
        const score = card.tags.filter((t) => subjectTags.includes(t)).length;
        if (score > bestScore) {
            bestScore = score;
            bestSubject = subject;
        }
    }
    return bestSubject;
}
