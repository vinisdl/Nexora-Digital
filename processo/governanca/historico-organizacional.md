---
title: Histórico organizacional
---

# Histórico organizacional

Hoje a Nexora "produz muitos dados, mas ainda tem pouca capacidade de aprender sistematicamente com seus próprios projetos". O histórico organizacional é a memória que faltava: um lugar único onde cada release deixa os números e as lições, para que o próximo projeto comece de onde o anterior parou.

## O que entra no histórico

| Registro | Origem | Onde fica | Quem alimenta |
|---|---|---|---|
| **Changes arquivadas** (proposal, design, delta da spec) | `openspec archive` | `openspec/changes/archive/` em cada produto | Automático, na Entrega |
| **Métricas por release** | Painel AF11 | Tabela de releases no repositório do processo | DevOps, a cada release |
| **Atas de retrospectiva do processo** (AF12) | Retrospectiva | `historico/retrospectivas/` no repositório do processo | Comitê do Processo |
| **Lições aprendidas** | Retrospectiva e incidentes | `historico/licoes.md` no repositório do processo | Comitê do Processo |
| **Incidentes e hotfixes** | Bugs pós-release | Work items tipo Bug, ligados à change de origem | QA e DevOps |

## Para que serve: três usos práticos

### 1. Estimar com base no passado

Antes de estimar uma change, o Tech Lead consulta changes **da mesma categoria e do mesmo produto** e usa o lead time real delas como referência. É assim que "3 meses" deixa de virar "5 ou 6": a estimativa passa a ter linha de base.

### 2. Não repetir o mesmo erro

Toda lição aprendida tem o formato:

> **Situação** → **O que aconteceu** → **O que mudou no processo** (link para a versão do changelog)

Exemplo: *Change de desconto no Sales sem cenário de cliente com tabela de preço própria → rollback em 30 clientes → o checklist G3 passou a exigir cenários negativos e de borda (processo 0.9).*

### 3. Mostrar que o processo melhora

A tabela de releases permite responder à pergunta da diretoria: *"o processo está melhorando ao longo do tempo?"*.

| Release do processo | Período | Lead time mediano | Defeitos pós-release | % specs reabertas | Melhorias aprovadas |
|---|---|---|---|---|---|
| 1.0 | 1º trimestre de uso | linha de base | linha de base | linha de base | n/a |
| 1.1 | 2º trimestre | comparar com 1.0 | comparar | comparar | da retrospectiva |

*A tabela começa vazia na Release 1.0; a primeira linha é preenchida na primeira retrospectiva.*

## Regras

- O histórico é **somente acréscimo**: nada é apagado, só corrigido com nova entrada.
- Está no Git, então tem versão e autoria, como o resto do processo.
- Qualquer pessoa da Nexora pode ler; só o Comitê do Processo aprova mudanças em `historico/`.
