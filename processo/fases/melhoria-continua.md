---
title: Contínuo · Melhoria do processo
sidebar_label: Melhoria contínua
---

# Contínuo · Melhoria do processo

**Objetivo:** o processo aprende com o uso. Ele é medido, revisado a cada release e melhorado pelo mesmo mecanismo de qualquer mudança: uma change.

| | |
|---|---|
| **Responsável (A)** | Comitê do Processo |
| **Frequência** | A cada release |

## A6.1 · Coletar as métricas

| Campo | Descrição |
|---|---|
| **Papéis** | R: DevOps · A: Comitê do Processo |
| **Passos** | Automático: pipeline e Azure DevOps Analytics alimentam o painel |
| **Saídas** | Painel de métricas (AF11) |

## A6.2 · Retrospectiva do processo

| Campo | Descrição |
|---|---|
| **Papéis** | R/A: Comitê do Processo · C: todos os papéis |
| **Entradas** | Painel de métricas, specs reabertas, defeitos pós-release |
| **Passos** | 1. Revisar a tendência das métricas · 2. Levantar o que atrapalhou · 3. Escolher até 3 melhorias |
| **Saídas** | Ata da retrospectiva (AF12) |
| **Templates** | [Retrospectiva](/docs/templates/retrospectiva) |

## A6.3 · Melhoria vira change

| Campo | Descrição |
|---|---|
| **Papéis** | R: quem propôs · A: Comitê do Processo |
| **Passos** | 1. Abrir PR no repositório do processo (este portal) · 2. Atualizar o [changelog](/docs/sobre/changelog) · 3. Nova versão do processo |
| **Saídas** | Nova versão do processo |
