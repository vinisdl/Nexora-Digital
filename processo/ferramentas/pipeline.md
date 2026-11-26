---
title: Pipeline
---

# Pipeline (Azure Pipelines ou GitHub Actions)

**Papel no processo:** tornar os gates verificáveis sem reunião e coletar as métricas sem esforço manual.

| Etapa | O que verifica | Gate |
|---|---|---|
| Validação da spec | `openspec validate --strict` em toda change aberta | G2 |
| Build | Compila o código | G4 |
| Testes dos cenários | Cada cenário WHEN/THEN tem teste e o teste passa | G4 |
| Coleta de métricas | Datas de transição, specs reabertas, deploys | Métricas |
| Deploy | Só pelo pipeline; gera release notes das changes arquivadas | G4 |

:::info[Gate automático, não reunião]
O pipeline bloqueia o merge se a spec não validar ou se um cenário falhar. A aprovação humana fica para o que só humano avalia: valor, escopo e viabilidade.
:::
