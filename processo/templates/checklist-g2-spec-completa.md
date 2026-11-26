---
title: Checklist G2 · Spec completa
sidebar_label: Checklist G2 · Spec completa
---

# Checklist G2 · Spec completa

Gate entre **Especificação** e **Revisão**. Guardião: **QA**.

```markdown
G2 · Spec completa (AB#<id>)

- [ ] proposal.md preenchida (média, grande, crítica)
- [ ] Todo requisito do delta usa SHALL ou MUST
- [ ] Todo requisito tem pelo menos 1 cenário WHEN/THEN
- [ ] Todo critério de aceite do work item virou pelo menos 1 cenário
- [ ] design.md preenchido (grande, crítica)
- [ ] tasks.md com tasks pequenas e estimadas
- [ ] openspec validate --strict passa no pipeline
```

| Item | Verificação |
|---|---|
| Formato, requisitos com cenário | Automática: `openspec validate --strict` |
| Critério de aceite coberto, tasks estimadas | Manual: QA e Dev |
