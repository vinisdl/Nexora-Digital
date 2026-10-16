---
sidebar_position: 5
---

# Definition of Done (DoD)

## DoD Organizacional da Nexora Digital

> **DONE = cenarios da spec passando + code review + aceite do PO + change arquivada**

Este e o UNICO DoD valido para toda a Nexora Digital, independente da equipe ou produto.

## Criterios Detalhados

### 1. Cenarios da spec passando
- Todos os cenarios WHEN/THEN cobertos por testes automatizados
- Testes passando no pipeline CI/CD
- QA validou a cobertura dos cenarios

### 2. Code review aprovado
- **Pequena:** 1 reviewer (peer)
- **Media:** QA + PO
- **Grande/Critica:** QA + PO + Tech Lead

### 3. Aceite do PO
- PO validou que a implementacao atende o especificado
- Aceite registrado no work item do Azure DevOps (nao vale verbal no Teams)

### 4. Change arquivada
- Delta da spec incorporado em `openspec/specs/`
- Diretorio `openspec/changes/[nome]/` versionado no Git
- Work item marcado como "Done" no Azure DevOps

## O que NAO e suficiente para Done

- "O commit foi feito"
- "Funciona na minha maquina"
- "O PR foi aberto mas nao aprovado"
- "O PO aprovou verbalmente no Teams" (precisa estar no work item)

## Historico

| Versao | Data | Alteracao |
|--------|------|-----------|
| 1.0 | 2026-10 | Versao inicial - proposta SDD T2 |

## Work Items Relacionados
- PBI #18: Estabelecer Definition of Done organizacional
