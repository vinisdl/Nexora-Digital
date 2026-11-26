---
title: 2. Especificação
---

# Fase 2 · Especificação

**Objetivo da fase:** descrever **o quê** muda e **por quê**, com cenários verificáveis, antes de decidir o **como** no código.

| | |
|---|---|
| **Entra com** | G1 · Definition of Ready |
| **Sai com** | **G2 · Spec completa** |
| **Responsável pela fase (A)** | PO (o "o quê" é do negócio) |
| **Estado no Azure DevOps** | `Em especificação` |

## A2.1 · Abrir a change

| Campo | Descrição |
|---|---|
| **Objetivo** | Criar o espaço da mudança no repositório, ligado ao work item |
| **Papéis** | R: Dev · A: PO |
| **Entradas** | Work item pronto (AF01) |
| **Passos** | 1. Criar a branch `change/<id>-<slug>` · 2. Criar a pasta `openspec/changes/<id>-<slug>/` · 3. Mover o work item para `Em especificação` |
| **Saídas** | Change criada |
| **Ferramentas** | GitHub, OpenSpec |
| **Critério de saída** | Branch e pasta da change existem e citam o `AB#<id>` |

## A2.2 · Escrever a proposal.md (média, grande e crítica)

| Campo | Descrição |
|---|---|
| **Objetivo** | Registrar motivo, escopo, fora de escopo e impacto |
| **Papéis** | R: Dev (escreve com o PO) · A: PO · C: Tech Lead |
| **Entradas** | Work item, conversa com o solicitante |
| **Saídas** | proposal.md (AF02) |
| **Templates** | [proposal.md](/docs/templates/proposal) |
| **Critério de saída** | PO concorda com o texto |

## A2.3 · Escrever o delta da spec com cenários WHEN/THEN

| Campo | Descrição |
|---|---|
| **Objetivo** | Transformar o critério de aceite em requisitos verificáveis |
| **Papéis** | R: Dev (com apoio de IA) · A: PO · C: QA (revisa os cenários desde o rascunho) |
| **Entradas** | proposal.md, spec oficial atual |
| **Passos** | 1. Identificar a capacidade afetada · 2. Marcar requisitos ADDED, MODIFIED ou REMOVED · 3. Escrever pelo menos um cenário por requisito |
| **Saídas** | Delta da spec (AF03) |
| **Templates** | [Delta da spec](/docs/templates/spec-delta) |
| **Critério de saída** | Todo requisito com cenário |

## A2.4 · Escrever o design.md (grande e crítica)

| Campo | Descrição |
|---|---|
| **Objetivo** | Registrar a decisão técnica e as alternativas descartadas |
| **Papéis** | R: Dev · A: Tech Lead |
| **Saídas** | design.md (AF04) |
| **Templates** | [design.md](/docs/templates/design) |

## A2.5 · Quebrar em tasks e estimar

| Campo | Descrição |
|---|---|
| **Objetivo** | Estimar a partir de um escopo fechado, não de uma ideia |
| **Papéis** | R: Dev · A: Tech Lead |
| **Saídas** | tasks.md (AF05) |
| **Templates** | [tasks.md](/docs/templates/tasks) |
| **Critério de saída** | **G2 atingido**: `openspec validate --strict` passa e as tasks estão estimadas. Veja o [Checklist G2](/docs/templates/checklist-g2-spec-completa) |
