---
title: 4. Construção
---

# Fase 4 · Construção

**Objetivo da fase:** implementar exatamente o que a spec aprovada descreve e transformar cada cenário em teste automatizado.

| | |
|---|---|
| **Entra com** | G3 · Spec aprovada |
| **Sai com** | PR de código aprovado e pipeline verde (parte técnica do G4) |
| **Responsável pela fase (A)** | Tech Lead |
| **Estado no Azure DevOps** | `Em construção` |

## A4.1 · Implementar as tasks

| Campo | Descrição |
|---|---|
| **Papéis** | R: Dev (com apoio de IA) · A: Tech Lead |
| **Entradas** | tasks.md, delta da spec aprovado |
| **Passos** | 1. Executar as tasks na ordem · 2. Marcar cada task concluída no tasks.md · 3. Commits citando `AB#<id>` |
| **Saídas** | Código |
| **Critério de saída** | Todas as tasks marcadas |

## A4.2 · Automatizar os cenários

| Campo | Descrição |
|---|---|
| **Papéis** | R/A: QA · R: Dev (apoia) |
| **Entradas** | Cenários WHEN/THEN do delta da spec |
| **Passos** | 1. Um cenário = um teste · 2. O nome do teste cita o cenário · 3. Incluir o teste na suíte do pipeline |
| **Saídas** | Testes dos cenários (AF08) |
| **Critério de saída** | Todo cenário tem teste e o teste passa |

## A4.3 · Code review

| Campo | Descrição |
|---|---|
| **Papéis** | R: par ou Tech Lead · A: Tech Lead |
| **Entradas** | PR de código |
| **Passos** | 1. Conferir aderência à spec · 2. Conferir qualidade e segurança do código · 3. Aprovar ou pedir ajustes |
| **Saídas** | PR de código aprovado |
| **Templates** | [Pull Request](/docs/templates/pull-request) |

## A4.4 · Pipeline de CI

| Campo | Descrição |
|---|---|
| **Papéis** | R: DevOps (mantém o pipeline) · A: Tech Lead |
| **Passos** | Build → `openspec validate --strict` → testes dos cenários → coleta de métricas |
| **Saídas** | Pipeline verde |
| **Ferramentas** | [Pipeline](/docs/ferramentas/pipeline) |
