---
title: Checklist G3 · Spec aprovada
sidebar_label: Checklist G3 · Spec aprovada
---

# Checklist G3 · Spec aprovada

Gate entre **Revisão** e **Construção**. Aprovador: **Tech Lead**.

```markdown
G3 · Spec aprovada (AB#<id>)

QA
- [ ] Os cenários cobrem os critérios de aceite
- [ ] Há cenários para casos de borda e erros
- [ ] Todo cenário é testável (WHEN e THEN observáveis)

Tech Lead
- [ ] A solução é viável e coerente com a arquitetura
- [ ] Impacto em outras capacidades da spec avaliado
- [ ] Estimativa das tasks é plausível
- [ ] Grande: TLs das equipes envolvidas aprovaram
- [ ] Crítica: revisão de segurança anexada

PO
- [ ] O escopo entrega o valor pedido
- [ ] O "fora de escopo" está correto

- [ ] Todos os revisores obrigatórios da categoria aprovaram o PR
```

| Item | Verificação |
|---|---|
| Revisores obrigatórios aprovaram | Automática: branch policy + CODEOWNERS |
| Conteúdo da revisão | Manual: QA, TL, PO |
