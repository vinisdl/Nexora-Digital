---
title: Metamodelo
---

# Metamodelo do processo

O processo é descrito com um metamodelo simples, inspirado no **SPEM 2.0** (Software & Systems Process Engineering Metamodel, OMG). Isso garante que toda atividade seja descrita do mesmo jeito.

```
Fase ──contém──▶ Atividade ──detalhada em──▶ Passos
                     │
                     ├── executada por ──▶ Papel (RACI)
                     ├── consome ───────▶ Artefato de entrada
                     ├── produz ────────▶ Artefato de saída
                     ├── orientada por ─▶ Template / Checklist
                     ├── apoiada por ───▶ Ferramenta
                     └── termina em ────▶ Critério de saída (gate)
```

## Elementos

| Elemento | Definição | Onde está no portal |
|---|---|---|
| Fase | Etapa do ciclo de vida que termina num gate | [Ciclo de vida](./ciclo-de-vida.mdx) |
| Atividade | Trabalho com um responsável e um resultado verificável | [Fases e atividades](/docs/fases/entrada) |
| Papel | Conjunto de responsabilidades, não um cargo | [Papéis](/docs/papeis/raci) |
| Artefato | Produto de trabalho versionado ou registrado | [Catálogo](/docs/artefatos/catalogo) |
| Template / Checklist | Guia para produzir um artefato ou passar num gate | [Templates](/docs/templates) |
| Ferramenta | Onde o trabalho acontece | [Ferramentas](/docs/ferramentas/azure-devops) |

## A ficha padrão de atividade

Toda atividade do portal segue a mesma ficha (recomendação R3 da Sprint 5):

| Campo | Pergunta que responde |
|---|---|
| **Objetivo** | Para que serve esta atividade? |
| **Quando** | O que dispara a atividade? |
| **Papéis** | Quem é R, A, C e I? |
| **Entradas** | O que preciso ter em mãos? |
| **Passos** | O que faço, em ordem? |
| **Saídas** | O que fica registrado ao final? |
| **Templates** | Qual modelo ou checklist uso? |
| **Ferramentas** | Onde faço? |
| **Critério de saída** | Como sei que terminei? |
