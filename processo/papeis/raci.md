---
title: Matriz RACI
---

# Papéis e matriz RACI

Papel é um conjunto de responsabilidades, não um cargo: uma mesma pessoa pode ser Dev numa change e revisora em outra. A matriz abaixo atende à recomendação R2 da Sprint 5 ("quem registra, quem aprova e quem comunica cada mudança").

**R** = Responsável (executa) · **A** = Aprovador (responde pelo resultado, só um por linha) · **C** = Consultado · **I** = Informado

## RACI por fase

| Fase | PO | Dev | Tech Lead | QA | DevOps |
|---|---|---|---|---|---|
| 1. Entrada | **A**/R | I | R (categoria) | I | – |
| 2. Especificação | **A** | R | C | C | – |
| 3. Revisão | R | C | **A** | R | I |
| 4. Construção | I | R | **A** | R | C |
| 5. Entrega | **A** (aceite) | R (arquiva) | C | C | R (deploy) |
| Melhoria contínua | C | C | C | C | C |

Na melhoria contínua, o **A** é o [Comitê do Processo](./comite-do-processo.md). Nas mudanças críticas, a [Segurança](./seguranca.md) é R na revisão de segurança.

## RACI por atividade

| Atividade | PO | Dev | TL | QA | DevOps |
|---|---|---|---|---|---|
| A1.1 Registrar a demanda | A/R | I | – | I | – |
| A1.2 Classificar a categoria | A | – | R | C | – |
| A1.3 Priorizar no backlog | A/R | – | C | – | – |
| A2.1 Abrir a change | A | R | – | – | – |
| A2.2 proposal.md | A | R | C | – | – |
| A2.3 Delta da spec e cenários | A | R | C | C | – |
| A2.4 design.md | – | R | A | – | – |
| A2.5 tasks.md e estimativa | – | R | A | – | – |
| A3.1 Abrir o PR da spec | I | R | A | I | – |
| A3.2 Revisar os cenários | C | C | A | R | – |
| A3.3 Revisar a viabilidade | – | C | A/R | – | – |
| A3.4 Aprovar escopo e valor | R | – | A | – | – |
| A4.1 Implementar | – | R | A | C | – |
| A4.2 Automatizar os cenários | – | R | – | A/R | – |
| A4.3 Code review | – | R (par) | A | – | – |
| A4.4 Pipeline de CI | – | – | A | – | R |
| A5.1 Aceite | A/R | – | – | C | – |
| A5.2 Arquivar a change | – | R | A | – | – |
| A5.3 Deploy | A | – | C | – | R |
| A5.4 Pós-release | I | – | – | C | R |

:::info[E a IA?]
A IA apoia o Dev na escrita da spec, dos cenários e do código, mas **nunca aparece como R ou A**. Quem usa a IA responde pelo que ela produziu.
:::

## Decisão: quem manda na Revisão?

Na revisão, PO e Tech Lead aprovam coisas diferentes. Para manter um só **A** por linha, o **Tech Lead é o aprovador do gate G3** (qualidade técnica e completude), e o **PO é R na aprovação do escopo e do valor** (A3.4). Os dois precisam aprovar o PR.
