---
sidebar_position: 4
---

# Templates OpenSpec

Todos os templates ficam versionados em `openspec/changes/[nome-da-change]/`.

## proposal.md

```markdown
# Proposal: [nome-da-change]

Data: YYYY-MM-DD | Autor: [nome] | Work Item: #[id]
Categoria: Pequena | Media | Grande | Critica

## Motivo
Por que essa mudanca e necessaria? Qual problema resolve?

## Impacto
Quais sistemas, equipes e clientes sao afetados?

## Mudancas Propostas
Lista de mudancas em alto nivel.

## Riscos
Riscos identificados e mitigacoes.
```

## design.md (apenas Media, Grande e Critica)

```markdown
# Design: [nome-da-change]

## Contexto
Contexto tecnico e restricoes relevantes.

## Alternativas Consideradas
1. [Alternativa 1] - trade-offs
2. [Alternativa 2] - trade-offs

## Decisao
Qual alternativa foi escolhida e por que.

## Consequencias
O que fica mais facil e o que fica mais dificil.
```

## tasks.md

```markdown
# Tasks: [nome-da-change]

- [ ] [Task 1]
- [ ] [Task 2]
- [ ] Testes automatizados para todos os cenarios WHEN/THEN
- [ ] Code review aprovado
- [ ] Aceite do PO
- [ ] Change arquivada em specs/
```

## spec.md

```markdown
# Spec: [nome-do-modulo]

## ADDED Requirements

### Requirement: [nome]
O sistema SHALL [comportamento esperado].

#### Scenario: [nome do cenario]
- GIVEN [estado inicial]
- WHEN [evento ou acao]
- THEN [resultado esperado]

## MODIFIED Requirements
(requisitos modificados com delta explicito)

## REMOVED Requirements
(requisitos removidos com justificativa)
```

## Work Items Relacionados
- PBI #17: Criar templates OpenSpec no repositorio
