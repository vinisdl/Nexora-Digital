---
title: Delta da spec
---

# Template · Delta da spec (AF03)

Usado na [A2.3](/docs/fases/especificacao). Mora em `openspec/changes/<id>-<slug>/specs/<capacidade>/spec.md`. No archive, o delta é incorporado à spec oficial.

```markdown
## ADDED Requirements
### Requirement: <nome do requisito>
O sistema SHALL <comportamento verificável>.

#### Scenario: <caso principal>
- WHEN <condição ou ação>
- THEN <resultado observável>

## MODIFIED Requirements
### Requirement: <nome do requisito existente>
<texto completo do requisito, já alterado>

#### Scenario: <caso>
- WHEN ...
- THEN ...

## REMOVED Requirements
### Requirement: <nome>
**Motivo:** <por que deixa de existir>
```

## Exemplo: o caso do rollback do Nexora Sales

```markdown
## MODIFIED Requirements
### Requirement: Processamento de pedidos
O sistema SHALL aplicar o desconto do cliente antes de calcular o frete.

#### Scenario: Cliente com desconto
- WHEN o pedido tem 10% de desconto
- THEN o frete é calculado sobre o valor com desconto

#### Scenario: Cliente sem desconto
- WHEN o pedido não tem desconto
- THEN o total permanece igual ao atual
```

:::info[Regras]
SHALL/MUST para requisitos verificáveis. Pelo menos um cenário por requisito. Cada cenário vira um teste, e o QA é o dono dele.
:::
