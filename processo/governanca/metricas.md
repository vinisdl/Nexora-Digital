---
title: Métricas
---

# Métricas do processo

As métricas respondem ao sintoma "muitos dados, nenhuma métrica confiável" do diagnóstico e à recomendação R4. Elas são coletadas pelo pipeline e pelo Azure DevOps Analytics, **sem planilha manual**: quem trabalha no processo já gera os dados ao mover o work item e abrir o PR.

## Como escolhemos (GQM)

Usamos *Goal-Question-Metric*: primeiro o objetivo, depois a pergunta, só então a métrica. Métrica sem pergunta não entra.

| Objetivo | Pergunta | Métrica |
|---|---|---|
| **Previsibilidade** | Quanto tempo o cliente espera? As estimativas estão melhorando? | Lead time · Desvio de estimativa |
| **Qualidade** | A qualidade chega à produção? | Defeitos pós-release · % de cenários com teste |
| **Eficiência** | Quanto esforço perdemos com retrabalho? | % de specs reabertas · Taxa de retrabalho |
| **Aderência** | Os gates estão claros e sendo cumpridos? | % aprovadas no gate na 1ª tentativa |

## As métricas

| Métrica | Fórmula | Fonte | Frequência | Meta inicial |
|---|---|---|---|---|
| **Lead time** | Data `Concluído` − data `Pronto` (aprovação até produção), mediana por categoria | Azure DevOps Analytics | Contínua; análise por release | Pequena ≤ 5 dias úteis · Média ≤ 4 semanas |
| **Desvio de estimativa** | Esforço real ÷ esforço estimado nas tasks, por change | tasks.md + Azure DevOps | Por release | Entre 0,8 e 1,3 |
| **Defeitos pós-release** | Bugs ligados (`AB#`) a changes da release, abertos até 30 dias após o deploy | Consulta no Azure DevOps | Por release | Queda a cada trimestre; zero defeito crítico |
| **% de cenários com teste** | Cenários com teste automatizado ÷ cenários da change | Pipeline | A cada PR | 100% em changes novas (bloqueia G4) |
| **% de specs reabertas** | Changes com *Specs reabertas* > 0 ÷ changes concluídas | Campo do work item | Por release | ≤ 20% |
| **Taxa de retrabalho** | Horas em tasks reabertas após o G3 ÷ horas totais da change | Azure DevOps | Por release | ≤ 15% |
| **% aprovadas no gate na 1ª tentativa** | Changes que passaram no G3 sem nova rodada ÷ changes revisadas | GitHub + Azure DevOps | Por release | ≥ 70% |

:::info[Sobre as metas]
As metas da Release 1.0 são **metas iniciais**, definidas a partir do que o case descreve (estimativas que estouram 60–100%) e de referências de mercado. Depois de **3 releases** com dados reais, o Comitê do Processo recalibra cada meta com a linha de base da Nexora, e a mudança entra no [changelog](/docs/sobre/changelog).
:::

## Onde ver: o painel (AF11)

Um dashboard único no Azure DevOps, igual para todas as equipes, com filtros por produto, equipe e categoria:

| Widget | Mostra |
|---|---|
| Lead time por categoria | Mediana e percentil 85 das últimas releases |
| Cumulative Flow | Quantos work items em cada estado (fase) e onde está o gargalo |
| Defeitos pós-release | Por release, com link para a change de origem |
| Gates | % de specs reabertas e % aprovadas na 1ª tentativa |
| Estimativa | Desvio de estimativa por categoria |

A consulta base do lead time no Azure DevOps (WIQL) filtra work items `Concluído` na release, com os campos `Categoria`, `Pronto em` e `Concluído em`. O dashboard é configurado uma vez pelo DevOps e copiado para cada projeto.

## Como as métricas são usadas

1. O painel (AF11) mostra a tendência por release.
2. A [retrospectiva do processo](/docs/fases/melhoria-continua) analisa a tendência e compara equipes e categorias.
3. Os números de cada release entram no [histórico organizacional](/docs/governanca/historico-organizacional).
4. A melhoria escolhida vira uma change no repositório do processo.

:::warning[Regra de uso]
Métrica é usada para **melhorar o processo**, nunca para avaliar pessoas. Comparar equipes serve para descobrir qual prática funciona melhor e espalhá-la, não para ranquear quem trabalha mais.
:::
