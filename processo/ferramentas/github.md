---
title: GitHub
---

# GitHub

**Papel no processo:** fonte da spec e do código. Os dois moram no mesmo repositório, então a spec nunca fica longe do código que ela descreve.

| Elemento | Convenção |
|---|---|
| Branch | `change/<id>-<slug>` (ex.: `change/1234-ajuste-desconto`) |
| Commit e PR | Citam `AB#<id>` para ligar ao Azure DevOps |
| Template de PR | `.github/pull_request_template.md` ([ver template](/docs/templates/pull-request)) |
| Revisores | `CODEOWNERS` + label da categoria definem os revisores obrigatórios |
| Branch policy | Merge só com pipeline verde e revisores obrigatórios aprovados (G3) |
