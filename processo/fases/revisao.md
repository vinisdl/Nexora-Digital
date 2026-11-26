---
title: 3. Revisão
---

# Fase 3 · Revisão

**Objetivo da fase:** aprovar a spec **antes de existir código**. O cenário esquecido aparece aqui, e não em produção.

| | |
|---|---|
| **Entra com** | G2 · Spec completa (delta da spec validado, tasks estimadas) |
| **Sai com** | **G3 · Spec aprovada**: PR aprovado pelos revisores obrigatórios da categoria |
| **Responsável pela fase (A)** | Tech Lead |
| **Estado no Azure DevOps** | `Em revisão` → `Spec aprovada` |

:::info[Por que revisar a spec e não só o código?]
O rollback do Nexora Sales que afetou cerca de 30 clientes foi causado por um cenário que ninguém escreveu nem testou. Revisar cenários WHEN/THEN é barato; corrigir em produção, não.
:::

## A3.1 · Abrir o PR da spec

| Campo | Descrição |
|---|---|
| **Objetivo** | Colocar a change em revisão formal, com rastreabilidade até o work item |
| **Quando** | Logo após passar no G2 |
| **Papéis** | R: Dev · A: Tech Lead · I: PO, QA |
| **Entradas** | Change em `openspec/changes/<id>-<slug>/` (proposal, delta da spec, design se houver, tasks) |
| **Passos** | 1. Fazer push da branch `change/<id>-<slug>` · 2. Abrir o PR usando o [template de PR](/docs/templates/pull-request) · 3. Citar `AB#<id>` no título · 4. Marcar o label da categoria (o CODEOWNERS escolhe os revisores) |
| **Saídas** | Pull Request da spec (AF06) ligado ao work item |
| **Templates** | [Pull Request](/docs/templates/pull-request) |
| **Ferramentas** | GitHub, Azure DevOps |
| **Critério de saída** | PR aberto, pipeline verde (validação da spec) e revisores atribuídos |

## A3.2 · Revisar os cenários

| Campo | Descrição |
|---|---|
| **Objetivo** | Garantir que os cenários cobrem o comportamento esperado e os casos de borda |
| **Quando** | PR da spec aberto |
| **Papéis** | R: QA · A: Tech Lead · C: Dev, PO |
| **Entradas** | Delta da spec (AF03), critério de aceite do work item |
| **Passos** | 1. Conferir que cada critério de aceite virou pelo menos um cenário · 2. Procurar casos de borda e cenários negativos · 3. Verificar se cada cenário é testável (WHEN e THEN observáveis) · 4. Comentar no PR ou aprovar |
| **Saídas** | Comentários no PR ou aprovação do QA |
| **Templates** | [Checklist G3](/docs/templates/checklist-g3-revisao) |
| **Ferramentas** | GitHub (review do PR) |
| **Critério de saída** | Nenhum comentário bloqueante do QA em aberto |

## A3.3 · Revisar a viabilidade técnica

| Campo | Descrição |
|---|---|
| **Objetivo** | Confirmar que a solução proposta é viável, segura e coerente com a arquitetura |
| **Quando** | PR da spec aberto (em paralelo à A3.2) |
| **Papéis** | R/A: Tech Lead · C: Dev · Grande: + TLs das equipes envolvidas · Crítica: + Segurança |
| **Entradas** | Delta da spec, design.md (grande e crítica), tasks.md |
| **Passos** | 1. Avaliar impacto em outras capacidades da spec · 2. Conferir o design.md e as alternativas descartadas · 3. Validar a estimativa das tasks · 4. Crítica: anexar a revisão de segurança (AF07) |
| **Saídas** | Aprovação técnica no PR; revisão de segurança (crítica) |
| **Templates** | [Checklist G3](/docs/templates/checklist-g3-revisao), [design.md](/docs/templates/design), [Checklist de segurança](/docs/templates/checklist-seguranca) (crítica) |
| **Ferramentas** | GitHub |
| **Critério de saída** | Aprovação do(s) Tech Lead(s) e, se crítica, da Segurança |

## A3.4 · Aprovar escopo e valor

| Campo | Descrição |
|---|---|
| **Objetivo** | Garantir que a spec entrega o que o negócio pediu, nem mais nem menos |
| **Quando** | Após A3.2 e A3.3 sem bloqueios |
| **Papéis** | R: PO · A: Tech Lead · I: solicitante |
| **Entradas** | proposal.md, delta da spec, comentários da revisão |
| **Passos** | 1. Ler a proposal e os cenários pela ótica do cliente · 2. Confirmar o que está fora de escopo · 3. Aprovar o PR |
| **Saídas** | Aprovação do PO no PR; work item movido para `Spec aprovada` |
| **Templates** | [proposal.md](/docs/templates/proposal) |
| **Ferramentas** | GitHub, Azure DevOps |
| **Critério de saída** | **G3 atingido**: todos os revisores obrigatórios da categoria aprovaram |

## Revisores obrigatórios por categoria

| Pequena | Média | Grande | Crítica |
|---|---|---|---|
| 1 par | PO + QA + TL | + TLs das equipes envolvidas | + Segurança |

:::tip[Mudou a spec depois do G3?]
A revisão é reaberta e o campo *Specs reabertas* do work item soma 1. Essa métrica mostra onde a especificação está fraca.
:::
