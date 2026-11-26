---
title: Checklist de conformidade
---

# Checklist de conformidade

Cada item abaixo é uma expectativa explícita da Nexora Digital (descrição do case) ou um uso esperado do portal. A coluna "Evidência" aponta onde o item é atendido.

## O processo define...

| # | Expectativa da Nexora | Atende | Evidência |
|---|---|---|---|
| C01 | Fases ou macroatividades | ✅ | [Ciclo de vida](/docs/visao-geral/ciclo-de-vida): 5 fases + contínuo |
| C02 | Atividades | ✅ | 23 atividades com ficha padrão nas [fases](/docs/fases/entrada) |
| C03 | Papéis e responsabilidades | ✅ | [RACI](/docs/papeis/raci) com um único A por linha + 7 páginas de papel |
| C04 | Artefatos | ✅ | [Catálogo AF01–AF12](/docs/artefatos/catalogo) |
| C05 | Critérios de qualidade | ✅ | [Qualidade](/docs/governanca/qualidade) e gates G1–G4 |
| C06 | Práticas de engenharia | ✅ | [Qualidade · práticas obrigatórias](/docs/governanca/qualidade), estratégia de testes |
| C07 | Gerência de configuração | ✅ | [Gerência de configuração](/docs/governanca/gerencia-de-configuracao): branches, SemVer, baseline, release, hotfix |
| C08 | Métricas | ✅ | [Métricas](/docs/governanca/metricas): 7 métricas com fórmula, fonte e meta |
| C09 | Mecanismos de melhoria contínua | ✅ | [Melhoria contínua](/docs/governanca/melhoria-continua) e [histórico organizacional](/docs/governanca/historico-organizacional) |
| C10 | Customização por categoria de projeto | ✅ | [Categorias e tailoring](/docs/visao-geral/categorias) |
| C11 | Gestão de requisitos e mudanças | ✅ | Spec + change no Git, [regra do Teams](/docs/ferramentas/teams), specs reabertas |
| C12 | Orientação de uso das ferramentas existentes | ✅ | [Ferramentas](/docs/ferramentas/azure-devops) |
| C13 | Requisitos de segurança, rastreabilidade e auditoria | ✅ | Categoria crítica, [checklist de segurança](/docs/templates/checklist-seguranca), trilha de auditoria |
| C14 | Justificativa das decisões | ✅ | [Decisões (ADRs)](/docs/sobre/decisoes) e [rastreabilidade](/docs/contexto/rastreabilidade) |
| C15 | Processo versionado e evoluível | ✅ | Docs-as-code, SemVer do processo, [changelog](/docs/sobre/changelog) |

## Pelo portal, cada pessoa consegue...

| # | Uso esperado (case) | Atende | Onde |
|---|---|---|---|
| U1 | Um **novo profissional** entende como a Nexora desenvolve software | ✅ | [Início](/docs), [jornada do Rafael](/docs/contexto/personas), [exemplo](/docs/exemplo/ponta-a-ponta) |
| U2 | Um **gerente** identifica qual configuração usar num projeto | ✅ | [Categorias: 4 perguntas + matriz](/docs/visao-geral/categorias) |
| U3 | Um **desenvolvedor** descobre quais atividades executar | ✅ | [Papel do Dev](/docs/papeis/desenvolvedor) + fichas das fases |
| U4 | Um **Product Owner** entende suas responsabilidades | ✅ | [Papel do PO](/docs/papeis/product-owner) + RACI |
| U5 | Um **QA** encontra os critérios de qualidade | ✅ | [Qualidade](/docs/governanca/qualidade) + checklists G2–G4 |
| U6 | Uma **equipe** acessa templates, checklists e métricas | ✅ | [Templates e checklists](/docs/templates), [Métricas](/docs/governanca/metricas) |

## Consistência interna

| Verificação | Resultado |
|---|---|
| Toda atividade tem papel R e A definido | ✅ |
| Todo artefato tem responsável, fase e template | ✅ |
| Todo gate tem dono, critério e forma de verificação | ✅ |
| Todo sintoma do diagnóstico tem elemento correspondente | ✅ ([rastreabilidade](/docs/contexto/rastreabilidade)) |
| A IA não aparece como R ou A em nenhuma atividade | ✅ |
| Todos os links do portal funcionam | ✅ (o build falha se houver link quebrado) |
