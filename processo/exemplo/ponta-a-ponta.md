---
title: Exemplo ponta a ponta
sidebar_label: Exemplo ponta a ponta
---

# Exemplo ponta a ponta: uma change do pedido ao deploy

Esta página acompanha **uma mudança real do tipo que causou o rollback do Nexora Sales**, mostrando o que cada papel faz, quais artefatos nascem e como cada gate é verificado. É o melhor jeito de entender o processo antes de usá-lo.

:::info[O cenário]
Um cliente do varejo reclama: o frete está sendo calculado sobre o valor **sem** o desconto, e o pedido fica mais caro do que deveria. Foi uma mudança nessa regra, sem o cenário do cliente com tabela de preço própria, que travou cerca de 30 clientes no passado.
:::

**Personagens:** Paula (PO do Sales) · Rafael (Dev) · Thiago (QA) · Bruna (Tech Lead) · Igor (DevOps). Cliente: Ana, vendedora que usa o Sales.

## Fase 1 · Entrada

A Ana relata o problema ao suporte, e a conversa continua no Teams. Paula **não deixa a decisão no Teams**: registra o work item.

```markdown
Título: [Sales] Aplicar desconto antes de calcular o frete
Tipo: User Story · Categoria: Média · Solicitante: Ana (Loja Exemplo), via suporte

## Problema
O frete é calculado sobre o valor sem desconto; o cliente paga frete a mais.

## Valor
Preço correto no pedido; menos chamados de suporte sobre frete.

## Critério de aceite
- Dado um pedido com desconto, quando o frete é calculado, então usa o valor com desconto
- Dado um cliente com tabela de preço própria, quando o pedido é fechado, então nada muda no total dele
```

- **A1.2 · Categoria:** Bruna classifica como **média**. Mexe no processamento de pedidos, que afeta muitos clientes, mas é uma equipe só, em semanas.
- **G1 · DoR:** campos obrigatórios preenchidos, e o Azure DevOps permite mover para `Pronto`. ✅
- Work item: **AB#1234**.

## Fase 2 · Especificação

Rafael abre a change, com nome, branch e pasta derivados do mesmo ID:

```bash
git switch -c change/1234-ajuste-desconto
openspec/changes/1234-ajuste-desconto/
├── proposal.md
├── tasks.md
└── specs/pedidos/spec.md
```

Ele escreve a `proposal.md` com Paula. A seção mais importante é **Fora de escopo**: "mudança na tabela de frete por região fica para outra change". Isso foi combinado no Teams e agora está escrito.

Depois escreve o **delta da spec**, com apoio da IA para rascunhar cenários:

```markdown
## MODIFIED Requirements
### Requirement: Processamento de pedidos
O sistema SHALL aplicar o desconto do cliente antes de calcular o frete.

#### Scenario: Cliente com desconto
- WHEN o pedido tem 10% de desconto
- THEN o frete é calculado sobre o valor com desconto

#### Scenario: Cliente sem desconto
- WHEN o pedido não tem desconto
- THEN o total permanece igual ao atual
```

Como é média, não precisa de `design.md`. Rafael quebra em `tasks.md` e estima em 3 dias.

- **G2 · Spec completa:** o pipeline roda `openspec validate --strict` ✅ e as tasks estão estimadas ✅.

## Fase 3 · Revisão: onde o erro do passado é pego

Rafael abre o PR `[média] Ajuste de desconto antes do frete AB#1234`. O label `média` faz o CODEOWNERS pedir **PO + QA + Tech Lead**.

**A3.2 · Thiago (QA)** revisa os cenários com o [Checklist G3](/docs/templates/checklist-g3-revisao) e comenta:

> ❌ Bloqueante: falta o cenário do **cliente com tabela de preço própria**, que está no critério de aceite. Também falta o caso de **desconto de 100%** (frete sobre zero?).

Rafael adiciona os dois cenários:

```markdown
#### Scenario: Cliente com tabela de preço própria
- WHEN o cliente usa tabela de preço própria com desconto embutido
- THEN o desconto não é aplicado duas vezes e o total é igual ao atual

#### Scenario: Desconto de 100%
- WHEN o pedido tem 100% de desconto
- THEN o frete mínimo da tabela é cobrado
```

Como a spec mudou **antes** do G3, não conta como reabertura. **Este é exatamente o cenário que faltou no rollback**: agora ele foi encontrado na revisão, com custo de 10 minutos, e não em produção, com 30 clientes parados.

- **A3.3 · Bruna (TL)** aprova a viabilidade. **A3.4 · Paula (PO)** confirma escopo e o "fora de escopo".
- **G3 · Spec aprovada:** branch policy verifica as 3 aprovações ✅. Work item vai para `Spec aprovada`.

## Fase 4 · Construção

- Rafael implementa as tasks (com IA), commitando `feat: desconto antes do frete AB#1234`.
- Thiago automatiza **os 4 cenários como 4 testes** (1 cenário = 1 teste).
- Bruna faz o code review.
- Pipeline: build ✅ · testes unitários ✅ · 4/4 testes de cenário ✅ · regressão da spec oficial ✅ · análise estática ✅.

## Fase 5 · Entrega

- **A5.1:** Paula homologa **contra os cenários**, não contra a memória da conversa, e registra o aceite.
- **A5.2:** `openspec archive 1234-ajuste-desconto`: o delta entra em `openspec/specs/pedidos/spec.md`.
- **A5.3:** Igor aprova o deploy no pipeline; tag `sales-v4.12.0`; release notes geradas da proposal.
- **G4 · Done:** cenários passando ✅ · code review ✅ · aceite do PO ✅ · change arquivada ✅. Work item `Concluído`.

## O que ficou registrado (e o que a Elisa, do compliance, consegue provar)

| Pergunta | Evidência |
|---|---|
| Quem pediu? | AB#1234 · Ana, via suporte |
| O que foi decidido? | `proposal.md` (com fora de escopo) e delta da spec, arquivados |
| Quem aprovou? | PR com aprovação de Paula, Thiago e Bruna |
| Foi testado? | 4 testes de cenário no pipeline, ligados ao PR |
| Quando foi para produção? | Tag `sales-v4.12.0` e log de deploy |

## O que virou métrica

| Métrica | Valor nesta change |
|---|---|
| Lead time (`Pronto` → `Concluído`) | 6 dias úteis |
| Specs reabertas | 0 (os cenários faltantes entraram antes do G3) |
| Aprovada no G3 na 1ª tentativa | Não: precisou de uma rodada (o comentário do QA) |
| Desvio de estimativa | 3 dias estimados, 3,5 realizados → 1,17 |
| Defeitos pós-release (30 dias) | 0 |

Cada número entra no painel AF11 e no [histórico organizacional](/docs/governanca/historico-organizacional) sem ninguém preencher planilha.

## E se fosse outra categoria?

| Se fosse... | O que mudaria |
|---|---|
| **Pequena** (ex.: corrigir um texto na tela de pedido) | Sem proposal; delta da spec só se mudasse comportamento; 1 revisor par |
| **Grande** (ex.: novo motor de preços para Sales e Flow) | + `design.md`; revisão dos Tech Leads das duas equipes |
| **Crítica** (ex.: mesma regra para um cliente regulado) | + [checklist de segurança](/docs/templates/checklist-seguranca); Segurança aprova o PR e o deploy |

Veja a matriz completa em [Categorias e tailoring](/docs/visao-geral/categorias).
