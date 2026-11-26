---
title: Gerência de configuração
---

# Gerência de configuração

Hoje cada equipe da Nexora versiona de um jeito: uma usa feature branches, outra uma adaptação de GitFlow, outra faz commit direto na branch principal. Quem muda de equipe precisa reaprender. Esta página define **uma só estratégia** para todos os produtos.

## Itens de configuração

Item de configuração é tudo que precisa de versão, histórico e controle de mudança.

| Item | Onde mora | Quem pode mudar | Como muda |
|---|---|---|---|
| Spec oficial (`openspec/specs/`) | Repositório do produto | Ninguém diretamente | Só pelo `openspec archive` de uma change aprovada |
| Changes (`openspec/changes/`) | Repositório do produto | Dev da change | PR |
| Código-fonte e testes | Repositório do produto | Dev | PR com code review |
| Pipeline (`.github/workflows/`, `azure-pipelines.yml`) | Repositório do produto | DevOps | PR revisado por DevOps |
| Configuração de ambiente (variáveis, infraestrutura) | Repositório de infraestrutura | DevOps | PR; segredos só no cofre do pipeline, nunca no Git |
| Work items | Azure DevOps | PO | Histórico nativo do Azure DevOps |
| O próprio processo (este portal) | Repositório do processo | Comitê do Processo | PR (veja [abaixo](#do-próprio-processo)) |

## Estratégia de branches: trunk-based com branches curtas

Escolhemos **trunk-based development com branches de curta duração**, em vez de GitFlow.

**Por quê:** a spec já é aprovada antes do código (G3), então não precisamos de uma branch `develop` para "estabilizar" a mudança. Branches longas geram conflito e escondem integração. GitFlow faz sentido para releases raras e empacotadas, não para SaaS com deploy contínuo.

```
main  ──●─────────●──────────●───────────●──────▶   (sempre implantável)
         \       / \        /             \
          ●──●──●   ●──●──●   change/1234   ●──●   hotfix/1250
          change/1201        ajuste-desconto       (da tag em produção)
```

| Branch | Para quê | Nasce de | Volta para | Vida útil |
|---|---|---|---|---|
| `main` | Código e spec oficiais, sempre implantáveis | | | Permanente |
| `change/<id>-<slug>` | Uma change do OpenSpec (spec + código) | `main` | `main` por PR | Idealmente até 5 dias úteis |
| `hotfix/<id>-<slug>` | Correção urgente em produção | Tag em produção | `main` por PR | Horas |

**Regras:**

- **Nunca** commit direto na `main`: a branch policy bloqueia.
- Uma change = uma branch = um PR de spec (Fase 3) + commits de código (Fase 4) no mesmo PR ou em PR seguinte, sempre citando o mesmo `AB#<id>`.
- Change grande que não cabe em 5 dias é quebrada em changes menores ou entra na `main` desligada por **feature flag**.
- Merge por **squash**, para cada change virar um commit legível na `main`.

## Convenções

| Elemento | Convenção | Exemplo |
|---|---|---|
| Branch | `change/<id>-<slug>` | `change/1234-ajuste-desconto` |
| Pasta da change | `openspec/changes/<id>-<slug>/` | `openspec/changes/1234-ajuste-desconto/` |
| Commit | `<tipo>: <descrição> AB#<id>` (tipos: `spec`, `feat`, `fix`, `test`, `chore`, `docs`) | `spec: cenários de desconto por cliente AB#1234` |
| Título do PR | `[<categoria>] <título> AB#<id>` | `[média] Ajuste de desconto por cliente AB#1234` |
| Tag de release | `<produto>-v<MAJOR>.<MINOR>.<PATCH>` | `sales-v4.12.0` |

## Versionamento dos produtos

**Versionamento semântico (SemVer)** em todos os produtos:

| Sobe | Quando | Exemplo |
|---|---|---|
| **MAJOR** | Mudança incompatível em API ou integração com cliente | `sales-v5.0.0` |
| **MINOR** | Nova funcionalidade compatível | `sales-v4.13.0` |
| **PATCH** | Correção sem mudança de comportamento descrito na spec | `sales-v4.12.1` |

A tag é criada **pelo pipeline**, nunca à mão.

## Baseline e release

| Conceito | Definição na Nexora |
|---|---|
| **Baseline** | A `main` numa tag de release: código + spec oficial + pipeline naquele ponto |
| **Release** | Conjunto de changes arquivadas desde a última tag, implantado em produção |
| **Release notes (AF10)** | Geradas automaticamente das `proposal.md` das changes arquivadas na release |

**Fluxo de release:**

1. Changes concluídas (G4) já estão na `main` e arquivadas.
2. O pipeline implanta em **homologação**; o PO valida o pacote.
3. Aprovação manual no pipeline (environment com aprovador) implanta em **produção** e cria a tag.
4. Release notes publicadas e work items movidos para `Concluído`.

| Ambiente | Para quê | Quem aprova o deploy |
|---|---|---|
| Desenvolvimento | Teste de cada branch (preview) | Automático |
| Homologação | Aceite do PO e testes de regressão | Automático após merge na `main` |
| Produção | Clientes | DevOps; crítica: + Segurança |

## Hotfix e rollback

Para incidente em produção que afeta clientes:

1. **Primeiro conter:** se a release causou o problema, **rollback** para a tag anterior pelo pipeline (o deploy anterior fica disponível por 7 dias). Se a funcionalidade tem feature flag, desligar a flag.
2. Abrir work item **Bug** com prioridade máxima; categoria pequena, ou crítica se envolver cliente regulado.
3. Criar `hotfix/<id>-<slug>` a partir da tag em produção.
4. Escrever o **cenário que faltou** no delta da spec (vale até para hotfix) e o teste correspondente.
5. PR com revisão de 1 Tech Lead (rito reduzido, mas nunca sem revisão); pipeline verde.
6. Deploy, tag PATCH e merge na `main`.
7. O incidente entra obrigatoriamente na próxima [retrospectiva do processo](/docs/fases/melhoria-continua).

## Auditoria (categoria crítica)

A trilha de auditoria sai de graça da gerência de configuração:

| Pergunta do auditor | Onde está a evidência |
|---|---|
| Quem pediu? | Work item (solicitante, data) |
| O que foi decidido e por quê? | `proposal.md` e `design.md` arquivados |
| Quem aprovou? | Aprovações do PR (GitHub) e checklist de segurança (AF07) |
| O que mudou exatamente? | Delta da spec e diff do código no commit da change |
| Quando entrou em produção? | Tag e log de deploy do pipeline |

## Do próprio processo

O processo também é um item de configuração:

- Mora num repositório Git (este portal, *docs-as-code*).
- Muda só por PR aprovado pelo Comitê do Processo.
- Usa **versionamento semântico**: 0.x durante construção e validação; **1.0** é a primeira release oficial; mudanças de conteúdo sobem o segundo número (1.1, 1.2); mudanças de estrutura (fases, gates, papéis) sobem o primeiro (2.0).
- Toda versão tem entrada no [changelog](/docs/sobre/changelog) e uma tag `processo-vX.Y`.
