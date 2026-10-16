---
sidebar_position: 6
---

# Papeis e Responsabilidades

## RACI por Fase

| Fase | PO | Dev+IA | Tech Lead | QA | DevOps |
|------|----|---------|-----------|----|--------|
| 1. Entrada | **R** | I | I | I | I |
| 2. Especificacao | **A** | **R** | C | C | I |
| 3. Revisao | **A** | C | **R** | **R** | I |
| 4. Construcao | I | **R** | C | **R** | I |
| 5. Entrega | **A** | I | **R** | I | **R** |

**R** = Responsavel (faz) | **A** = Aprovador (decide) | **C** = Consultado | **I** = Informado

## Detalhamento

### PO (Product Owner)
- Registrar demanda como work item no Azure DevOps
- Priorizar o backlog
- Revisar e aprovar proposal.md
- Aceitar a entrega (criterio obrigatorio do DoD)

### Dev + IA
- Redigir spec com cenarios WHEN/THEN (com suporte de IA)
- Criar proposal.md e tasks.md
- Implementar seguindo o checklist do tasks.md
- Escrever testes automatizados para cada cenario

### Tech Lead
- Revisar decisoes tecnicas no design.md
- Garantir que a spec cobre todos os cenarios de risco
- Aprovar o PR final
- Coordenar deploy e arquivamento da change

### QA
- Revisar cenarios WHEN/THEN **ANTES do codigo** (na revisao da spec via PR)
- Ser o dono dos testes automatizados dos cenarios
- Validar que a implementacao cobre todos os cenarios
- Aprovar PR quando todos os cenarios estao cobertos

### DevOps
- Manter pipeline CI/CD que executa os testes
- Realizar o deploy
- Arquivar a change em `openspec/specs/` apos o deploy

## Work Items Relacionados
- PBI #20: Definir papeis e responsabilidades no processo SDD
