---
title: 1. Entrada
---

# Fase 1 · Entrada

**Objetivo da fase:** transformar um pedido (do cliente, do suporte, de uma conversa no Teams) em uma demanda registrada, classificada e priorizada.

| | |
|---|---|
| **Entra com** | Um pedido de mudança, de qualquer origem |
| **Sai com** | **G1 · Definition of Ready** |
| **Responsável pela fase (A)** | PO |
| **Estado no Azure DevOps** | `Novo` → `Pronto` |

## A1.1 · Registrar a demanda

| Campo | Descrição |
|---|---|
| **Objetivo** | Nenhum pedido fica só na conversa: tudo vira work item |
| **Papéis** | R/A: PO · I: Dev, QA |
| **Entradas** | Pedido do solicitante |
| **Passos** | 1. Criar o work item (User Story ou Bug) · 2. Preencher problema, valor e solicitante · 3. Escrever o critério de aceite em linguagem de negócio |
| **Saídas** | Work item (AF01) |
| **Templates** | [Work item](/docs/templates/work-item) |
| **Ferramentas** | Azure DevOps Boards |
| **Critério de saída** | Campos obrigatórios preenchidos |

## A1.2 · Classificar a categoria

| Campo | Descrição |
|---|---|
| **Objetivo** | Definir o rigor da mudança: pequena, média, grande ou crítica |
| **Papéis** | R: Tech Lead (avalia tamanho e risco) · A: PO · C: QA |
| **Entradas** | Work item registrado |
| **Passos** | 1. Avaliar tamanho e equipes envolvidas · 2. Avaliar risco (dados sensíveis, cliente regulado, segurança) · 3. Preencher o campo *Categoria* |
| **Saídas** | Work item classificado |
| **Templates** | [Categorias e tailoring](/docs/visao-geral/categorias) |
| **Ferramentas** | Azure DevOps |
| **Critério de saída** | Categoria definida; na dúvida, a mais alta |

## A1.3 · Priorizar no backlog

| Campo | Descrição |
|---|---|
| **Objetivo** | Ordenar o backlog pelo valor e pelo risco |
| **Papéis** | R/A: PO · C: Tech Lead |
| **Entradas** | Work items classificados |
| **Passos** | 1. Ordenar o backlog · 2. Conferir o [Checklist G1](/docs/templates/checklist-g1-dor) · 3. Mover para `Pronto` |
| **Saídas** | Backlog priorizado |
| **Templates** | [Checklist G1 · DoR](/docs/templates/checklist-g1-dor) |
| **Ferramentas** | Azure DevOps Boards |
| **Critério de saída** | **G1 atingido** |
