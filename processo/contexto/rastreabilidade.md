---
title: Rastreabilidade problema → processo
sidebar_label: Rastreabilidade
---

# Rastreabilidade: do problema ao processo

Cada elemento do processo existe por causa de um problema real da Nexora. Esta página liga os dois lados: se um elemento não resolve nenhum problema, ele não deveria estar aqui. Se um problema não tem elemento, o processo tem uma lacuna.

## Sintomas do diagnóstico → elementos do processo

| # | Sintoma (AS-IS) | Necessidade | Elemento do processo |
|---|---|---|---|
| S1 | Cada equipe trabalha de um jeito (Scrum, Kanban, listas soltas) | Uma referência comum, sem engessar projeto pequeno | Um só [ciclo de vida](/docs/visao-geral/ciclo-de-vida) + [matriz de tailoring](/docs/visao-geral/categorias) por categoria |
| S2 | "Done" com vários significados | Critério de conclusão único e verificável | [G4 · Definition of Done](/docs/templates/checklist-g4-dod), igual para toda a empresa |
| S3 | Prazos imprevisíveis (3 meses viram 5 ou 6) | Escopo fechado antes de estimar, e histórico para comparar | Spec e [tasks.md](/docs/templates/tasks) antes da estimativa; [G1](/docs/templates/checklist-g1-dor) e [G2](/docs/templates/checklist-g2-spec-completa); [histórico organizacional](/docs/governanca/historico-organizacional) |
| S4 | Bugs em produção (rollback no Sales, cerca de 30 clientes) | Saber quem testa o quê, e testar antes de entregar | QA dono dos cenários; 1 cenário = 1 teste; [Revisão](/docs/fases/revisao) da spec antes do código; [Qualidade](/docs/governanca/qualidade) |
| S5 | Ninguém sabia quem era responsável pelos testes | Responsabilidade explícita por atividade | [Matriz RACI](/docs/papeis/raci) com um único A por linha; ficha padrão de atividade ([metamodelo](/docs/visao-geral/metamodelo)) |
| S6 | Requisitos e mudanças se perdem no Teams | Toda decisão registrada e rastreável | Toda mudança é uma change no Git ligada ao work item (`AB#id`); regra do [Teams](/docs/ferramentas/teams) |
| S7 | Versionamento diferente em cada equipe (GitFlow, feature branch, commit na main) | Uma estratégia de branch e release para todos | [Gerência de configuração](/docs/governanca/gerencia-de-configuracao): trunk-based com branches curtas, SemVer, tags e hotfix padronizados |
| S8 | Documentação desigual e conhecimento só na cabeça das pessoas | Documentação mínima obrigatória por categoria | [Catálogo de artefatos](/docs/artefatos/catalogo); spec oficial como memória do sistema; este portal |
| S9 | Muitas ferramentas, pouca visão integrada | Papel claro de cada ferramenta e ligação entre elas | [Ferramentas](/docs/ferramentas/azure-devops): Azure DevOps = demanda e métrica, GitHub = spec e código, ligados por ID |
| S10 | Nenhuma métrica confiável (lead time, retrabalho, defeitos) | Métricas coletadas sem esforço manual | [Métricas](/docs/governanca/metricas) coletadas pelo pipeline; painel AF11 |
| S11 | Clientes regulados pedem segurança, rastreabilidade e auditoria | Rigor extra só onde o risco exige | Categoria **crítica**, [checklist de segurança](/docs/templates/checklist-seguranca), trilha de auditoria |
| S12 | A organização não aprende com os próprios projetos | Ciclo de aprendizado sistemático | [Retrospectiva do processo](/docs/fases/melhoria-continua) a cada release; [melhoria vira change](/docs/governanca/melhoria-continua) |

## As perguntas da diretoria → onde a resposta está

O case lista perguntas que a diretoria não conseguia responder. Com o processo, cada uma tem uma fonte de dados definida.

| Pergunta da diretoria | Como o processo responde |
|---|---|
| Quanto tempo uma demanda leva da aprovação até a produção? | **Lead time** (work item `Pronto` → `Concluído`), painel AF11 |
| Quanto do esforço é consumido por retrabalho? | **% de specs reabertas** e **taxa de retrabalho** (tasks reabertas após o G3) |
| Quantos defeitos são encontrados depois de uma release? | **Defeitos pós-release**, bugs ligados à change de origem |
| Quais tipos de projeto têm mais atrasos? | Lead time e desvio de estimativa **por categoria** |
| As estimativas estão melhorando? | **Desvio de estimativa** (real ÷ estimado) por release |
| Quais práticas estão dando melhores resultados? | Comparação de métricas entre equipes na [retrospectiva do processo](/docs/fases/melhoria-continua) |
| O processo está melhorando ao longo do tempo? | Tendência das métricas no [histórico organizacional](/docs/governanca/historico-organizacional) |

Detalhes de fórmula, fonte e meta: [Métricas](/docs/governanca/metricas).

## Recomendações da revisão (Sprint 5) → elementos do processo

| Recomendação | Onde virou processo |
|---|---|
| R1 Gates de entrada e saída | [Ciclo de vida e gates G1 a G4](/docs/visao-geral/ciclo-de-vida) |
| R2 Matriz RACI | [Matriz RACI](/docs/papeis/raci) |
| R3 Ficha padrão por atividade | [Metamodelo](/docs/visao-geral/metamodelo) e fichas das [fases](/docs/fases/entrada) |
| R4 Ligar work item, PR e change + métricas | [Azure DevOps](/docs/ferramentas/azure-devops) e [Métricas](/docs/governanca/metricas) |
| R5 Templates e checklists | [Templates e checklists](/docs/templates) |
| R6 Histórico e retrospectiva | [Melhoria contínua](/docs/governanca/melhoria-continua) e [histórico organizacional](/docs/governanca/historico-organizacional) |
| Revisão cruzada (Sprint 6): incluir personas | [Personas e jornadas](/docs/contexto/personas) |
