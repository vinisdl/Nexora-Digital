---
title: proposal.md
---

# Template · proposal.md (AF02)

Usado na [A2.2](/docs/fases/especificacao). Obrigatório nas categorias média, grande e crítica. Mora em `openspec/changes/<id>-<slug>/proposal.md`.

```markdown
# Proposal: <título da mudança>

Work item: AB#<id> · Categoria: <média | grande | crítica> · Solicitante: <nome>

## Por quê
Problema atual e quem é afetado. Uma ou duas frases.

## O que muda
- Comportamento novo ou alterado, em tópicos
- Marque **BREAKING** se quebrar algo existente

## Fora de escopo
- O que foi conversado mas NÃO entra nesta change

## Impacto
- Capacidades da spec afetadas: specs/<capacidade>
- Sistemas, integrações e clientes afetados
- Riscos conhecidos

## Aprovação
- [ ] PO de acordo com o escopo
```

:::tip
"Fora de escopo" é a seção que mais evita retrabalho: é ali que fica registrado o que foi combinado no Teams e ficou para depois.
:::
