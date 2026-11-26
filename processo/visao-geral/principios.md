---
title: Princípios
---

# Princípios do processo

O processo nasceu de seis sintomas observados na Nexora (diagnóstico do Grau A). Cada princípio responde a um deles.

| Sintoma (AS-IS) | Princípio (TO-BE) |
|---|---|
| Cada equipe trabalha de um jeito | **Um só ciclo de mudança** para toda a empresa, com rigor proporcional à categoria |
| "Done" sem definição | **Um só Done**, explícito e verificável (gate G4) |
| Prazos imprevisíveis | **Escopo fechado na spec** e nas tasks antes de estimar |
| Bugs em produção | **Cada cenário WHEN/THEN vira um teste**, e o QA é o dono dele |
| Requisitos se perdem no Teams | **Toda mudança é uma change no Git**, ligada ao work item |
| Nenhuma métrica | **Métricas coletadas pelo pipeline**, sem esforço manual |

## Os cinco princípios

1. **A spec vem antes do código.** Pessoas e IA concordam no "o quê" antes do "como".
2. **A spec é a fonte da verdade.** O que está em `openspec/specs/` é o que o sistema faz hoje.
3. **O rigor cresce com o risco.** Uma correção pequena não carrega a burocracia de uma mudança regulada. Veja [Categorias](./categorias.md).
4. **Qualidade verificável, não declarada.** Cada fase termina num gate com critério objetivo. Veja [Ciclo de vida](./ciclo-de-vida.mdx).
5. **Responsabilidade é sempre humana.** A IA apoia a escrita da spec e do código, mas nunca é responsável (R) nem aprovadora (A) de nada.
