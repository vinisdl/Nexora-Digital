---
title: Catálogo de artefatos
---

# Catálogo de artefatos

Todo artefato tem um ID, uma fase de origem, um responsável e um template. Os artefatos da change moram no Git; os de gestão moram no Azure DevOps.

| ID | Artefato | Fase | Responsável | Onde mora | Template |
|---|---|---|---|---|---|
| AF01 | Work item | Entrada | PO | Azure DevOps | [Work item](/docs/templates/work-item) + [G1](/docs/templates/checklist-g1-dor) |
| AF02 | proposal.md | Especificação | Dev + PO | `openspec/changes/` | [proposal.md](/docs/templates/proposal) |
| AF03 | Delta da spec (WHEN/THEN) | Especificação | Dev + QA | `openspec/changes/.../specs/` | [Delta da spec](/docs/templates/spec-delta) |
| AF04 | design.md | Especificação | Dev + TL | `openspec/changes/` | [design.md](/docs/templates/design) |
| AF05 | tasks.md | Especificação | Dev | `openspec/changes/` | [tasks.md](/docs/templates/tasks) |
| AF06 | Pull Request | Revisão / Construção | Dev | GitHub | [Pull Request](/docs/templates/pull-request) + [G3](/docs/templates/checklist-g3-revisao) |
| AF07 | Revisão de segurança | Revisão (crítica) | Segurança | Anexo do PR | [Checklist de segurança](/docs/templates/checklist-seguranca) |
| AF08 | Testes dos cenários | Construção | QA | Repositório de código | Convenção: 1 cenário = 1 teste |
| AF09 | Spec oficial | Entrega | Tech Lead | `openspec/specs/` | Gerada pelo `openspec archive` |
| AF10 | Release notes | Entrega | DevOps | Pipeline | Geradas das changes arquivadas |
| AF11 | Painel de métricas | Contínuo | DevOps | Azure DevOps Dashboards | [Métricas](/docs/governanca/metricas) |
| AF12 | Ata da retrospectiva do processo | Contínuo | Comitê do Processo | Repositório do processo | [Retrospectiva](/docs/templates/retrospectiva) |

## Onde cada artefato fica no repositório

```
openspec/
├── project.md                    # contexto do produto e convenções
├── specs/                        # AF09 · o que o sistema faz hoje
│   └── pedidos/spec.md
└── changes/
    └── 1234-ajuste-desconto/     # <id do work item>-<slug>
        ├── proposal.md           # AF02
        ├── design.md             # AF04 (grande e crítica)
        ├── tasks.md              # AF05
        └── specs/pedidos/spec.md # AF03 · delta da spec
```

## Rastreabilidade

Um único ID liga tudo: o work item **1234** dá nome à change `1234-ajuste-desconto`, à branch `change/1234-ajuste-desconto`, e aparece como `AB#1234` em commits e PRs. Assim, a partir de qualquer artefato é possível chegar a todos os outros.
