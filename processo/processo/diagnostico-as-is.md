---
sidebar_position: 1
---

# Diagnostico AS-IS - Nexora Digital

## Contexto

A Nexora Digital cresceu mais rapido que seu processo:
- **8 anos** de mercado, atendendo pequenas e medias empresas
- **~95 colaboradores**, ~60 em desenvolvimento, teste e operacao
- **3 produtos SaaS**: Sales, Flow e Analytics (+ customizacoes e integracoes)
- **0 processos** organizacionais de desenvolvimento definidos

Ferramentas ja existem: Azure DevOps, GitHub, Microsoft Teams, Pipelines CI/CD

## Os 6 Sintomas

| # | Sintoma | Decisao TO-BE |
|---|---------|---------------|
| 01 | Cada equipe, um jeito (Scrum, Kanban ou listas soltas) | Ciclo unico de mudanca, customizavel por categoria |
| 02 | Done sem definicao (criterios inconsistentes entre equipes) | Definition of Done organizacional e explicito |
| 03 | Prazos impreviziveis (estimativas de 3 meses viram 5 ou 6) | Escopo fechado na spec e tasks.md antes de estimar |
| 04 | Bugs em producao (rollback no Sales afetou ~30 clientes) | Cenarios WHEN/THEN viram testes, QA e o dono deles |
| 05 | Requisitos se perdem (mudancas no Teams nao voltam) | Toda mudanca e uma change no Git, ligada ao work item |
| 06 | Dados sem metricas (sem lead time, custo de retrabalho) | Medir lead time, specs reabertas e defeitos pos-release |

## Work Items Relacionados
- PBI #14: Documentar diagnostico AS-IS da Nexora Digital
