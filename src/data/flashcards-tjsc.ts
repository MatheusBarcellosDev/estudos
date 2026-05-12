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
    "Dir. Constitucional": [
        "Constitucional", "Direitos Fundamentais", "Federacao", "Federação",
        "Remedios Constitucionais", "Remédios Constitucionais", "Poderes da Republica",
        "Poderes da República", "CF/88"
    ],
    "Dir. Administrativo": [
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
    ]

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
