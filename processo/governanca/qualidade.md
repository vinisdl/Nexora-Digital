---
title: Qualidade
---

# Qualidade

Na Nexora, qualidade não é uma fase no fim do processo nem um departamento: é um conjunto de **critérios verificáveis** distribuídos pelo ciclo. Esta página junta todos eles num só lugar, para QA, Tech Lead e qualquer pessoa que precise saber "o que é bom o suficiente".

:::info[Por que distribuída?]
No rollback do Nexora Sales, o Dev achava que o QA testaria, o QA achava que o Dev automatizaria, e o PO achava que tudo já estava testado quando chegou a ele. Critério que é de todo mundo acaba não sendo de ninguém. Aqui, cada critério tem um dono e um momento.
:::

## Os quatro gates

| Gate | Momento | Dono | Critério resumido | Verificação |
|---|---|---|---|---|
| **G1 · DoR** | Entrada → Especificação | PO | Problema, valor, solicitante e critério de aceite registrados; categoria e prioridade definidas | Campos obrigatórios no Azure DevOps + [Checklist G1](/docs/templates/checklist-g1-dor) |
| **G2 · Spec completa** | Especificação → Revisão | Dev (QA confere) | Todo requisito com cenário; `openspec validate --strict` passando; tasks estimadas | Automática no pipeline + [Checklist G2](/docs/templates/checklist-g2-spec-completa) |
| **G3 · Spec aprovada** | Revisão → Construção | Tech Lead | Revisores obrigatórios da categoria aprovaram o PR da spec | Branch policy + CODEOWNERS + [Checklist G3](/docs/templates/checklist-g3-revisao) |
| **G4 · Done** | Entrega → Concluído | PO (aceite) | Cenários passando + code review + aceite do PO + change arquivada | Pipeline + [Checklist G4](/docs/templates/checklist-g4-dod) |

Crítica tem um critério extra antes do G3: o [checklist de segurança](/docs/templates/checklist-seguranca) (AF07).

## Quem garante o quê

| Pergunta | Resposta no processo |
|---|---|
| Quem escreve os cenários? | O **Dev**, na Especificação (com apoio de IA). |
| Quem garante que os cenários estão completos? | O **QA**, na [A3.2 · Revisar os cenários](/docs/fases/revisao), antes do código. |
| Quem automatiza os testes? | O **QA é o dono** dos testes dos cenários (AF08); o Dev apoia e escreve os testes unitários do próprio código. |
| Quem revisa o código? | O **Tech Lead** ou um par, na [A4.3 · Code review](/docs/fases/construcao). |
| Quem diz que está pronto? | O **PO** dá o aceite contra os cenários, e o pipeline confirma o resto do G4. |

## Estratégia de testes

| Nível | O que cobre | Quem escreve | Quando roda | Obrigatório em |
|---|---|---|---|---|
| **Unitário** | Regras internas do código | Dev | A cada push | Todas as categorias |
| **Cenário (aceitação)** | Cada cenário WHEN/THEN da spec, 1 cenário = 1 teste | QA (dono), Dev apoia | A cada PR e no merge | Todas que têm delta da spec |
| **Regressão** | Cenários da spec oficial já arquivados | Pipeline | A cada merge na `main` | Todas |
| **Integração / contrato** | Integrações com sistemas de clientes | Dev + QA | A cada PR que toca a integração | Média (integração), grande, crítica |
| **Segurança** | Análise estática, dependências, revisão manual | DevOps (automático) + Segurança (manual) | A cada PR; manual na crítica | Automático: todas · manual: crítica |

**Regra de cobertura:** a métrica que importa não é % de linhas, mas **% de cenários com teste automatizado**. A meta é 100% para cenários novos: um cenário sem teste não passa no G4.

## Práticas de engenharia obrigatórias

- **Revisão antes do código:** a spec é revisada por PR (Fase 3) antes de qualquer implementação.
- **Code review em todo PR**, por pelo menos 1 pessoa diferente do autor.
- **Pipeline verde** para fazer merge: build, testes, `openspec validate --strict` e análise estática.
- **Nada de commit direto na `main`**: tudo entra por PR (veja [Gerência de configuração](/docs/governanca/gerencia-de-configuracao)).
- **Código gerado por IA** segue as mesmas regras e é responsabilidade de quem abriu o PR ([IA](/docs/ferramentas/ia)).

## Defeitos

| Situação | O que fazer |
|---|---|
| Defeito encontrado na Revisão ou Construção | Corrigir na mesma change; se mudou a spec, soma 1 em *Specs reabertas* |
| Defeito encontrado após a release | Abrir **Bug** ligado à change de origem (`AB#id`), com o cenário que faltou. O bug entra na Entrada como qualquer demanda (pequena, ou crítica se afetar cliente regulado) |
| Defeito grave em produção | [Hotfix](/docs/governanca/gerencia-de-configuracao#hotfix-e-rollback): rollback ou correção pelo fluxo de hotfix; análise na retrospectiva do processo |

Todo defeito pós-release responde a uma pergunta na retrospectiva: **qual cenário faltou na spec, e por que a revisão não o encontrou?**

## Indicadores de qualidade

Medidos automaticamente (detalhes em [Métricas](/docs/governanca/metricas)): defeitos pós-release, % de specs reabertas, % aprovadas no gate na 1ª tentativa e % de cenários com teste automatizado.
