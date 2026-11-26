---
title: Validação da Release 1.0
sidebar_label: Como validamos
slug: /validacao
---

# Validação da Release 1.0

Antes de virar 1.0, o processo passou por três verificações independentes. Cada uma responde a uma pergunta diferente.

| Verificação | Pergunta | Resultado |
|---|---|---|
| **1. Revisão cruzada** por outra equipe | Quem não participou consegue entender e usar o processo só pelo portal? | Avaliação positiva; a única recomendação foi incorporada |
| **2. Checklist de conformidade** | O processo cobre tudo o que a Nexora pediu? | 100% dos itens atendidos ([ver checklist](/docs/validacao/conformidade)) |
| **3. Exemplo ponta a ponta** | O processo funciona do pedido ao deploy, sem lacunas entre fases? | Executado do G1 ao G4 ([ver exemplo](/docs/exemplo/ponta-a-ponta)) |

## 1. Revisão cruzada (Sprint 6)

**Como foi feita:** uma equipe da turma que não participou da elaboração revisou o processo consultando o portal, nos mesmos 5 eixos usados na revisão da Sprint 5 (estrutura, papéis, atividades e artefatos, ferramentas, diretrizes).

**Resultado:** avaliação positiva, sem pendência bloqueante. A única lacuna apontada foi a falta de personas.

**Recomendação recebida e como foi tratada:**

| # | Recomendação | Decisão | Onde está |
|---|---|---|---|
| RC1 | Deixar explícito **para quem** o processo foi feito, com personas, como na revisão da Sprint 5 | Aceita | [Personas e jornadas](/docs/contexto/personas): os 5 clientes e 5 perfis internos com a jornada de leitura de cada um |

## 2. Checklist de conformidade

O case define o que a Nexora espera do processo: fases, atividades, papéis, artefatos, critérios de qualidade, práticas de engenharia, gerência de configuração, métricas, melhoria contínua e customização por categoria. Cada item foi verificado contra o portal.

👉 [Checklist de conformidade completo](/docs/validacao/conformidade)

## 3. Exemplo ponta a ponta

Uma change do tipo que causou o rollback do Nexora Sales foi conduzida por todas as fases, com os artefatos preenchidos e os gates verificados. O exemplo mostra o QA encontrando, **na revisão da spec**, o cenário que faltou no incidente original.

👉 [Exemplo ponta a ponta](/docs/exemplo/ponta-a-ponta)

## Critérios de saída da Release 1.0

| Critério | Situação |
|---|---|
| Toda atividade com ficha completa | ✅ |
| Todos os templates e checklists publicados (inclusive segurança) | ✅ |
| Exemplo executado do G1 ao G4 sem lacunas | ✅ |
| Revisão cruzada sem pendência bloqueante | ✅ |
| Metas iniciais das métricas definidas | ✅ (recalibração após 3 releases) |
| Portal publicado e versionado (tag `processo-v1.0`) | ✅ |

## O que fica para depois da 1.0

O que só pode ser validado com uso real está no [roadmap](/docs/sobre/roadmap): piloto com uma equipe real da Nexora, recalibração das metas com a linha de base e primeira retrospectiva do processo.
