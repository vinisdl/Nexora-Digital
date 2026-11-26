---
title: Glossário
---

# Glossário

| Termo | Significado na Nexora |
|---|---|
| **AB#&lt;id&gt;** | Menção a um work item do Azure DevOps em commit ou PR; cria o vínculo automático entre os dois |
| **Archive** | Comando `openspec archive`: incorpora o delta da change na spec oficial e move a change para o histórico |
| **Baseline** | Estado da `main` numa tag de release: código, spec e pipeline naquele ponto |
| **Categoria** | Pequena, média, grande ou crítica; define o rigor (artefatos e revisores) de uma change |
| **Cenário** | Caso de comportamento no formato WHEN/THEN; cada cenário vira um teste automatizado |
| **Change** | Unidade de mudança do OpenSpec: pasta `openspec/changes/<id>-<slug>/` com proposal, delta da spec, design e tasks |
| **CODEOWNERS** | Arquivo do GitHub que define revisores obrigatórios por pasta e categoria |
| **Comitê do Processo** | Grupo dono do processo: versiona, conduz a retrospectiva e aprova melhorias |
| **Delta da spec** | Diferença que a change aplica na spec: requisitos adicionados, modificados ou removidos |
| **DoD (Definition of Done)** | Gate G4: cenários passando + code review + aceite do PO + change arquivada |
| **DoR (Definition of Ready)** | Gate G1: demanda pronta para ser especificada |
| **Docs-as-code** | Documentação mantida no Git e alterada por PR, como código |
| **Feature flag** | Chave que liga ou desliga uma funcionalidade sem novo deploy |
| **Gate** | Critério objetivo entre duas fases (G1 a G4) |
| **Hotfix** | Correção urgente em produção, feita a partir da tag em produção |
| **Lead time** | Tempo da aprovação da demanda (`Pronto`) até a produção (`Concluído`) |
| **OpenSpec** | Ferramenta de Spec-Driven Development que organiza specs e changes no repositório |
| **RACI** | Responsável (R), Aprovador (A), Consultado (C), Informado (I) |
| **SDD (Spec-Driven Development)** | Abordagem em que a especificação vem antes do código e é a fonte da verdade |
| **SemVer** | Versionamento semântico MAJOR.MINOR.PATCH |
| **Spec oficial** | `openspec/specs/`: o que o sistema faz hoje |
| **Spec reaberta** | Mudança na spec depois do G3; reabre a revisão e vira métrica |
| **Tailoring** | Adaptação do processo à categoria da change, pela matriz única |
| **Trunk-based** | Estratégia em que todos integram na `main` por branches curtas |
| **Work item** | Item do Azure DevOps (User Story ou Bug) que representa uma demanda |
