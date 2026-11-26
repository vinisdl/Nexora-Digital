---
title: Templates e checklists
sidebar_label: Visão geral
---

# Templates e checklists

Templates iguais para todas as equipes (recomendação R5 da Sprint 5). Copie, preencha e versione junto com a change.

## Templates de artefatos

| Template | Artefato | Obrigatório em |
|---|---|---|
| [Work item](./work-item) | AF01 | todas as categorias |
| [proposal.md](./proposal) | AF02 | média, grande, crítica |
| [Delta da spec](./spec-delta) | AF03 | média, grande, crítica (pequena se mudar comportamento) |
| [design.md](./design) | AF04 | grande, crítica |
| [tasks.md](./tasks) | AF05 | todas as categorias |
| [Pull Request](./pull-request) | AF06 | todas as categorias |
| [Checklist de segurança](./checklist-seguranca) | AF07 | crítica |
| [Retrospectiva](./retrospectiva) | AF12 | a cada release |

## Checklists dos gates

| Gate | Checklist | Verificação automática |
|---|---|---|
| G1 · Definition of Ready | [Checklist G1](./checklist-g1-dor) | Campos obrigatórios no Azure DevOps |
| G2 · Spec completa | [Checklist G2](./checklist-g2-spec-completa) | `openspec validate --strict` no pipeline |
| G3 · Spec aprovada | [Checklist G3](./checklist-g3-revisao) | Branch policy + CODEOWNERS |
| G4 · Done | [Checklist G4](./checklist-g4-dod) | Pipeline verde + change arquivada |
