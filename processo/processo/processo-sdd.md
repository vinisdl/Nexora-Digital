---
sidebar_position: 2
---

# Processo SDD com OpenSpec

## A Abordagem

**Spec-Driven Development:** a especificacao vem antes do codigo e e ela a fonte da verdade.

- **Alinhar antes:** Pessoas e IA concordam no "o que" antes do "como"
- **Versionada:** A spec mora no Git, junto do codigo
- **Mudanca controlada:** Cada mudanca e proposta, revisada e arquivada

## O Ciclo OpenSpec

```
Passo 1: Propor
  O work item do Azure DevOps vira uma change:
  proposal.md, tasks.md e o delta da spec

Passo 2: Revisar
  PR no GitHub: PO, QA e Tech Lead aprovam
  a spec ANTES de existir codigo

Passo 3: Implementar
  Dev e IA executam o tasks.md
  Os cenarios da spec viram testes automatizados

Passo 4: Arquivar
  O delta e incorporado a spec oficial
  que segue atual depois do deploy
```

## O Processo por Fases

| Fase | Atividade | Responsavel | Artefato |
|------|-----------|-------------|----------|
| 1. Entrada | Registrar e priorizar | PO | Work item (Azure) |
| 2. Especificacao | Proposta e cenarios | PO + Dev (IA) | proposal.md, spec |
| 3. Revisao | Aprovar spec | Tech Lead, QA, PO | Pull Request |
| 4. Construcao | Implementar e testar | Dev + IA, QA | Codigo, testes |
| 5. Entrega | Arquivar e deploy | Tech Lead, DevOps | specs/, pipeline |

## Definition of Done

**DONE = cenarios da spec passando + code review + aceite do PO + change arquivada**

## Estrutura do Repositorio

```
openspec/
  project.md
  specs/[feature]/spec.md
  changes/[nome-da-change]/
    proposal.md
    design.md
    tasks.md
    specs/[feature]/spec.md
```

## Exemplo de Spec

```markdown
## MODIFIED Requirements

### Requirement: Processamento de pedidos
O sistema SHALL aplicar o desconto do cliente antes de calcular o frete.

#### Scenario: Cliente com desconto
- WHEN o pedido tem 10% de desconto
- THEN o frete e calculado sobre o valor com desconto

#### Scenario: Cliente sem desconto
- WHEN o pedido nao tem desconto
- THEN o total permanece igual ao atual
```

SHALL/MUST = Requisito verificavel. WHEN/THEN = Cenario que vira teste.

## Work Items Relacionados
- PBI #15: Proposta SDD com OpenSpec - TO-BE Preliminar
- PBI #16: Definir ciclo unico de mudanca com categorias
