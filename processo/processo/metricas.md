---
sidebar_position: 7
---

# Metricas do Processo SDD

## Objetivo

Resolver o sintoma #06 (dados sem metricas): medir a saude do processo para identificar gargalos.

## Metricas Definidas

### Lead Time
- **O que mede:** Tempo desde criacao do work item ate arquivamento da change
- **Formula:** `Lead Time = Data de arquivamento - Data de criacao`
- **Objetivo inicial:** Estabelecer baseline nos primeiros 3 meses

### Specs Reabertas
- **O que mede:** Changes que voltaram para especificacao
- **Benchmark:** Mais de 20% indica problemas na qualidade da especificacao

### Defeitos Pos-Release
- **O que mede:** Bugs em producao por release vs baseline pre-SDD
- **Objetivo:** Reducao de 20% por sprint nos primeiros 6 meses

### Custo de Retrabalho
- **Formula:** `% Retrabalho = (Horas nao planejadas / Total horas) * 100`
- **Meta:** Abaixo de 15% de retrabalho por sprint

## Revisao de Metricas

| Metrica | Frequencia | Responsavel |
|---------|------------|-------------|
| Lead Time | Semanal | Tech Lead |
| Specs reabertas | Por sprint | QA |
| Defeitos pos-release | Por release | QA + PO |
| Custo de retrabalho | Por sprint | Tech Lead |

## Work Items Relacionados
- PBI #22: Implementar coleta de metricas do processo SDD
