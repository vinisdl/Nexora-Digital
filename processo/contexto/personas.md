---
title: Personas e jornadas
---

# Personas e jornadas

O processo foi desenhado para dois grupos de pessoas:

- **Quem sente o resultado:** os clientes dos produtos da Nexora. Foram eles que guiaram a revisão do processo na Sprint 5.
- **Quem usa o processo no dia a dia:** os profissionais da Nexora. Para eles, este portal precisa responder "o que eu faço agora?".

Personas construídas a partir dos clientes, produtos e papéis descritos no case. A técnica usada na revisão é a *Perspective-Based Reading* (Basili et al., 1996): cada persona lê o processo pelo impacto no seu próprio trabalho.

## Clientes: quem sente o resultado

| Persona | Quem é | O que ela precisa | O que o processo garante |
|---|---|---|---|
| **Ana** | Vendedora de varejo, usa o **Nexora Sales** | *"Uma atualização não pode travar meus pedidos."* | Cada cenário WHEN/THEN vira teste automatizado, e o QA revisa os cenários antes do código ([G3](/docs/templates/checklist-g3-revisao)). O caso do rollback não se repete por falta de cenário. |
| **Bruno** | Gestor de operações, usa o **Nexora Flow** | *"Pedi uma mudança. Alguém registrou o que combinamos?"* | Todo pedido vira work item ([A1.1](/docs/fases/entrada)), e decisão do Teams só vale quando entra na change ([Teams](/docs/ferramentas/teams)). |
| **Carla** | Dona de PME, usa o **Nexora Analytics** | *"Preciso de um prazo em que eu possa confiar."* | Escopo fechado na spec antes de estimar, e lead time medido pelo pipeline ([Métricas](/docs/governanca/metricas)). |
| **Diego** | TI de cliente estratégico, integração sob medida | *"Cada equipe da Nexora me entrega de um jeito."* | Um só ciclo, um só Done e os mesmos templates para todas as equipes ([Templates](/docs/templates)). |
| **Elisa** | Compliance de cliente regulado | *"Preciso provar quem pediu e quem aprovou cada mudança."* | Categoria crítica com revisão de segurança, e trilha de auditoria pelas changes arquivadas ([Gerência de configuração](/docs/governanca/gerencia-de-configuracao)). |

## Profissionais da Nexora: quem usa o processo

Cada jornada mostra o que ler, em que ordem, para começar a trabalhar no processo sem precisar perguntar para ninguém.

### Rafael · desenvolvedor recém-contratado

> *"Entrei ontem. Peguei meu primeiro work item. E agora?"*

1. [Princípios](/docs/visao-geral/principios) e [ciclo de vida](/docs/visao-geral/ciclo-de-vida): 10 minutos para entender a lógica.
2. [Papel do Desenvolvedor](/docs/papeis/desenvolvedor): o que é responsabilidade dele.
3. [Exemplo ponta a ponta](/docs/exemplo/ponta-a-ponta): uma change real, do pedido ao deploy.
4. [Especificação](/docs/fases/especificacao) e os templates [proposal](/docs/templates/proposal), [delta da spec](/docs/templates/spec-delta) e [tasks](/docs/templates/tasks).
5. [Gerência de configuração](/docs/governanca/gerencia-de-configuracao): nome da branch, commit e PR.

**Sinal de que funcionou:** o primeiro PR dele passa no G2 sem ninguém explicar a convenção.

### Marina · gerente de engenharia

> *"Chegou um projeto novo. Quanto rigor ele precisa?"*

1. [Categorias e tailoring](/docs/visao-geral/categorias): as 4 perguntas que definem a categoria e a matriz do que é obrigatório.
2. [Matriz RACI](/docs/papeis/raci): quem precisa estar envolvido.
3. [Métricas](/docs/governanca/metricas) e [histórico organizacional](/docs/governanca/historico-organizacional): lead time de changes parecidas, para conversar sobre prazo com dados.

**Sinal de que funcionou:** ela define a configuração do processo em uma reunião, sem criar uma variação própria.

### Paula · Product Owner

> *"O cliente pediu uma coisa por e-mail, outra no Teams. Onde isso fica?"*

1. [Papel do Product Owner](/docs/papeis/product-owner).
2. [Entrada](/docs/fases/entrada) e o [template de work item](/docs/templates/work-item).
3. [Checklist G1 · DoR](/docs/templates/checklist-g1-dor): quando a demanda está pronta para especificar.
4. [Entrega](/docs/fases/entrega): como dar o aceite contra os cenários.

**Sinal de que funcionou:** nenhuma demanda dela entra na Especificação sem critério de aceite.

### Thiago · QA

> *"Quais são os critérios de qualidade e quando eu entro?"*

1. [Qualidade](/docs/governanca/qualidade): critérios, gates e estratégia de testes em uma página.
2. [Papel do QA](/docs/papeis/qa): ele é dono dos cenários, desde a Especificação.
3. [Revisão](/docs/fases/revisao) e o [Checklist G3](/docs/templates/checklist-g3-revisao).
4. [Checklist G4 · DoD](/docs/templates/checklist-g4-dod).

**Sinal de que funcionou:** ele revisa os cenários no PR da spec, antes de existir código.

### Lúcia · membro do Comitê do Processo

> *"O processo está funcionando? O que mudar na próxima versão?"*

1. [Métricas](/docs/governanca/metricas) e o painel.
2. [Melhoria contínua](/docs/governanca/melhoria-continua) e o [template de retrospectiva](/docs/templates/retrospectiva).
3. [Changelog](/docs/sobre/changelog) e [decisões](/docs/sobre/decisoes).

**Sinal de que funcionou:** cada release do produto termina com uma retrospectiva do processo registrada.
