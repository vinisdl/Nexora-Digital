---
title: Categorias e tailoring
---

# Categorias e tailoring

O rigor cresce com o risco. Em vez de quatro processos diferentes, há **um ciclo e uma matriz de tailoring**: a categoria define quais artefatos e revisores são obrigatórios.

## As quatro categorias

| Categoria | Duração típica | Exemplo |
|---|---|---|
| **Pequena** | dias | Ajuste de tela, correção de bug |
| **Média** | semanas | Integração com um cliente |
| **Grande** | meses | Funcionalidade estratégica que envolve várias equipes |
| **Crítica** | qualquer | Segurança, auditoria, cliente regulado |

A categoria é proposta pelo **Tech Lead** (tamanho e risco) e aprovada pelo **PO** na [Entrada](/docs/fases/entrada). Na dúvida entre duas, use a mais alta.

## Como escolher: 4 perguntas, nesta ordem

Responda em ordem e pare na primeira resposta "sim".

| # | Pergunta | Se "sim" |
|---|---|---|
| 1 | Envolve cliente regulado, dados sensíveis, segurança ou exigência de auditoria? | **Crítica** |
| 2 | Envolve mais de uma equipe, ou leva mais de um mês? | **Grande** |
| 3 | Cria ou muda uma integração, uma API ou um comportamento visível para vários clientes? | **Média** |
| 4 | Nenhuma das anteriores: ajuste de tela, texto, correção localizada | **Pequena** |

Exemplos do dia a dia da Nexora:

| Demanda | Categoria | Por quê |
|---|---|---|
| Corrigir rótulo errado num relatório do Analytics | Pequena | Localizada, não muda regra |
| Aplicar desconto antes do frete no Sales ([exemplo completo](/docs/exemplo/ponta-a-ponta)) | Média | Muda regra que afeta muitos clientes |
| Integração do Flow com o ERP de um cliente estratégico | Média | Integração, uma equipe, semanas |
| Novo motor de preços compartilhado por Sales e Flow | Grande | Duas equipes, meses |
| Exportação de dados de pedidos para cliente do setor financeiro | Crítica | Cliente regulado e dados sensíveis |

## Matriz de tailoring

| | Pequena | Média | Grande | Crítica |
|---|---|---|---|---|
| Work item + G1 | ✔ | ✔ | ✔ | ✔ |
| proposal.md | – | ✔ | ✔ | ✔ |
| Delta da spec | só se mudar comportamento | ✔ | ✔ | ✔ |
| design.md | – | – | ✔ | ✔ |
| tasks.md | ✔ | ✔ | ✔ | ✔ |
| Revisores do PR | 1 par | PO + QA + TL | + TLs das equipes envolvidas | + Segurança |
| Revisão de segurança | – | – | – | ✔ |

:::tip[Regra da categoria pequena]
Correção pequena não tem proposal. Mas se ela **muda um comportamento descrito na spec**, o delta da spec vai no mesmo PR. A spec nunca fica desatualizada.
:::

:::info[Crítica = trilha de auditoria]
Nas mudanças críticas, as changes arquivadas formam a trilha de auditoria: quem pediu (work item), o que foi decidido (proposal e spec), quem aprovou (PR) e quando entrou em produção (pipeline).
:::
