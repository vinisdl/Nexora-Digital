---
sidebar_position: 3
---

# Categorias de Change

O rigor cresce com o risco. Mesmo ciclo para todos, com artefatos proporcionais.

## Pequena - dias

**Quando usar:** Correcoes rapidas, ajustes visuais, bugs isolados

**Artefatos:** Tasks + PR com code review

**Aprovadores:** 1 reviewer (peer)

## Media - semanas

**Quando usar:** Integracoes, novas funcionalidades de escopo limitado

**Artefatos:** proposal.md + delta da spec + tasks.md + PR

**Aprovadores:** QA + PO

## Grande - meses

**Quando usar:** Funcionalidades de alto impacto, mudancas arquiteturais

**Artefatos:** tudo da Media + design.md

**Aprovadores:** QA + PO + Tech Lead(s)

## Critica - regulada

**Quando usar:** Seguranca, criptografia, dados sensiveis, compliance

**Artefatos:** tudo da Grande + revisao de seguranca formal

**Aprovadores:** QA + PO + Tech Lead(s) + Revisor de Seguranca

**Nota:** Changes arquivadas viram trilha de auditoria.

## Fluxograma de Classificacao

```
Afeta seguranca ou dados regulados?
  Sim -> CRITICA

Leva meses ou envolve multiplas equipes?
  Sim -> GRANDE

Envolve integracao ou impacta clientes?
  Sim -> MEDIA

Caso contrario:
  PEQUENA
```

## Work Items Relacionados
- PBI #16: Definir ciclo unico de mudanca com categorias de change
