---
title: OpenSpec
---

# OpenSpec

**Papel no processo:** organizar a spec e as mudanças. Separa o que o sistema faz hoje (`specs/`) do que vai mudar (`changes/`).

| Comando | Quando | Fase |
|---|---|---|
| `openspec list` | Ver changes em andamento | Qualquer |
| `openspec validate <change> --strict` | Conferir formato e cenários (G2) | Especificação, pipeline |
| `openspec show <change>` | Ler a change consolidada na revisão | Revisão |
| `openspec archive <change>` | Incorporar o delta à spec oficial | Entrega |

## Ciclo de uma change

1. **Propor:** o work item vira uma change (proposal, delta da spec, tasks).
2. **Revisar:** PR da spec aprovado antes do código.
3. **Implementar:** Dev e IA executam o tasks.md; os cenários viram testes.
4. **Arquivar:** o delta entra na spec oficial, que continua atual depois do deploy.

Estrutura de pastas: veja o [Catálogo de artefatos](/docs/artefatos/catalogo).
