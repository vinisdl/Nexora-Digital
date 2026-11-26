---
title: Decisões de projeto
---

# Decisões de projeto (ADRs)

Decisões tomadas ao transformar a proposta do Grau A no processo especificado. Cada uma tem um motivo ligado ao contexto da Nexora.

| # | Decisão | Motivo | Alternativa descartada |
|---|---|---|---|
| D1 | Metamodelo inspirado no **SPEM 2.0**: toda atividade tem a mesma ficha | Atende R3; qualquer pessoa lê qualquer atividade do mesmo jeito | Texto livre por atividade (cada autor escreve de um jeito) |
| D2 | **Docs-as-code**: o portal mora no Git e muda por PR | O processo segue o próprio processo; versão e histórico de graça | Wiki do Azure DevOps (sem revisão por PR) |
| D3 | Gates como **checklist + verificação automática** no pipeline, não reunião | Rigor sem burocracia; humano só avalia o que só humano avalia | Comitê de aprovação por fase (lento para mudança pequena) |
| D4 | **Tailoring numa matriz única** por categoria, em vez de 4 processos | Um só ciclo para a empresa, rigor proporcional ao risco | Um processo por tipo de projeto (repete a heterogeneidade atual) |
| D5 | **Azure DevOps** = demandas e métricas; **GitHub** = spec e código; ligação por `AB#<id>` | Usa as ferramentas que a Nexora já tem; rastreabilidade ponta a ponta | Migrar tudo para uma ferramenta só (custo e resistência) |
| D6 | A IA apoia, mas **nunca é R ou A** | A responsabilidade é sempre de um papel humano | IA como revisora obrigatória (não responde por erro) |
| D7 | **Versionamento semântico** do processo: 1.0 após a validação | Deixa claro o que é estável; mudanças futuras ficam rastreáveis | Versão por data (não diz o tamanho da mudança) |
| D8 | **Trunk-based com branches curtas**, não GitFlow | Spec aprovada antes do código dispensa a branch `develop`; SaaS com deploy contínuo | GitFlow (releases empacotadas, branches longas, mais conflito) |
| D9 | **Metas iniciais** nas métricas, recalibradas após 3 releases | Meta sem linha de base é chute; sem meta, não há sinal | Esperar dados para definir metas (o processo nasceria sem alvo) |
| D10 | **QA dono dos cenários e dos testes de aceitação** | O rollback do Sales aconteceu porque ninguém era dono dos testes | Dev dono de todos os testes (QA vira só executor manual) |

A ligação entre cada problema do case e o elemento do processo que o resolve está em [Rastreabilidade](/docs/contexto/rastreabilidade).
