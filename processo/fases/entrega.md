---
title: 5. Entrega
---

# Fase 5 · Entrega

**Objetivo da fase:** aceitar a mudança, incorporar o delta à spec oficial e colocar em produção com rastreabilidade.

| | |
|---|---|
| **Entra com** | PR de código aprovado e pipeline verde |
| **Sai com** | **G4 · Done** |
| **Responsável pela fase (A)** | PO (aceite) |
| **Estado no Azure DevOps** | `Em entrega` → `Concluído` |

## A5.1 · Aceite do PO

| Campo | Descrição |
|---|---|
| **Papéis** | R/A: PO · C: QA |
| **Entradas** | Ambiente de homologação, cenários da spec |
| **Passos** | 1. Homologar contra os cenários (não contra a memória da conversa) · 2. Registrar o aceite no work item |
| **Critério de saída** | Aceite registrado |

## A5.2 · Arquivar a change

| Campo | Descrição |
|---|---|
| **Papéis** | R: Dev · A: Tech Lead |
| **Passos** | 1. Rodar `openspec archive <change>` · 2. O delta entra em `openspec/specs/` · 3. Merge na branch principal |
| **Saídas** | Spec oficial atualizada (AF09) |
| **Critério de saída** | A spec oficial descreve o sistema que vai para produção |

## A5.3 · Deploy pelo pipeline

| Campo | Descrição |
|---|---|
| **Papéis** | R: DevOps · A: PO · C: Tech Lead |
| **Passos** | 1. Deploy pelo pipeline (nunca manual) · 2. Release notes geradas a partir das changes arquivadas |
| **Saídas** | Release em produção, release notes (AF10) |

## A5.4 · Acompanhar o pós-release

| Campo | Descrição |
|---|---|
| **Papéis** | R: DevOps · C: QA |
| **Passos** | Defeito encontrado depois da release vira Bug **ligado à change de origem** |
| **Saídas** | Métrica de defeitos pós-release alimentada |

:::tip[G4 · Definition of Done]
Cenários da spec passando + code review + aceite do PO + change arquivada. Veja o [Checklist G4](/docs/templates/checklist-g4-dod).
:::
