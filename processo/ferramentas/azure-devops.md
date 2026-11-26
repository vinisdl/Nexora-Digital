---
title: Azure DevOps
---

# Azure DevOps

**Papel no processo:** fonte das demandas e das métricas. Tudo que é pedido vira work item aqui, e o board mostra em que fase cada demanda está.

## Processo "Nexora SDD" (herdado do Agile)

### Estados do work item = fases do processo

| Estado | Fase | Gate para sair |
|---|---|---|
| `Novo` | 1. Entrada | G1 · DoR |
| `Pronto` | 1. Entrada (concluída) | – |
| `Em especificação` | 2. Especificação | G2 · Spec completa |
| `Em revisão` | 3. Revisão | G3 · Spec aprovada |
| `Spec aprovada` | 3. Revisão (concluída) | – |
| `Em construção` | 4. Construção | PR de código aprovado |
| `Em entrega` | 5. Entrega | G4 · Done |
| `Concluído` | – | – |

### Campos personalizados

| Campo | Tipo | Uso |
|---|---|---|
| Categoria | Lista: Pequena, Média, Grande, Crítica | Define o tailoring e os revisores |
| Solicitante | Texto | Quem pediu (rastreabilidade e auditoria) |
| Change ID | Texto | Nome da change no OpenSpec (`<id>-<slug>`) |
| Specs reabertas | Inteiro | Soma 1 quando a spec muda depois do G3 |

### Regras

- Para mover para `Pronto`: problema, valor, solicitante, critério de aceite e categoria obrigatórios (G1).
- Para mover para `Concluído`: aceite do PO registrado (G4).

## Integração com o GitHub

Commits, branches e PRs com `AB#<id>` aparecem automaticamente no work item (integração Azure Boards + GitHub). Um único ID liga demanda, spec, código e deploy.

## Painel de métricas (AF11)

| Widget | Fonte |
|---|---|
| Lead time (Novo → Concluído) | Analytics · Lead Time widget |
| Cycle time (Em especificação → Concluído) | Analytics · Cycle Time widget |
| Specs reabertas por release | Consulta sobre o campo *Specs reabertas* |
| Defeitos pós-release | Consulta: Bugs ligados a changes já concluídas |

Veja as fórmulas em [Métricas](/docs/governanca/metricas).
