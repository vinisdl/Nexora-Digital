---
title: Checklist de segurança (AF07)
sidebar_label: Checklist de segurança
---

# Checklist de segurança · Revisão de segurança (AF07)

Obrigatório **só na categoria crítica**, durante a [A3.3 · Revisar a viabilidade técnica](/docs/fases/revisao). Aprovador: **Segurança**. Anexado ao PR da spec como comentário ou arquivo `openspec/changes/<id>-<slug>/security.md`. Sem ele aprovado, o G3 não fecha.

```markdown
Revisão de segurança (AB#<id>) · Revisor: <nome> · Data: <data>

Dados
- [ ] A change identifica quais dados pessoais ou sensíveis trata (LGPD)
- [ ] Dados sensíveis são criptografados em trânsito e em repouso
- [ ] Nenhum dado sensível aparece em log, mensagem de erro ou ambiente de teste

Acesso
- [ ] Toda operação nova exige autenticação
- [ ] Autorização por perfil foi especificada em cenário WHEN/THEN
- [ ] Há cenário negativo para acesso não autorizado

Auditoria
- [ ] Operações relevantes geram registro de quem, o quê e quando
- [ ] O registro de auditoria não pode ser alterado pelo usuário

Integrações e dependências
- [ ] Integrações com cliente usam canal autenticado
- [ ] Análise de dependências do pipeline sem vulnerabilidade alta ou crítica aberta
- [ ] Segredos estão no cofre do pipeline, nunca no repositório

Requisitos do cliente regulado
- [ ] Requisitos contratuais de segurança e auditoria do cliente foram mapeados na spec
- [ ] Evidências necessárias para auditoria estão previstas (veja Gerência de configuração · Auditoria)

Parecer
- [ ] Aprovado
- [ ] Aprovado com ressalvas: <ressalvas e prazo>
- [ ] Reprovado: <motivo>
```

| Item | Verificação |
|---|---|
| Dependências e análise estática | Automática no pipeline |
| Dados, acesso, auditoria e requisitos do cliente | Manual: Segurança |

:::info[Por que só na crítica?]
Os itens automáticos (dependências, análise estática, segredos) rodam no pipeline de **todas** as categorias. A revisão manual fica restrita à crítica para não tornar lenta uma correção pequena, que é o equilíbrio entre controle e agilidade pedido pela diretoria.
:::

Trilha de auditoria completa: [Gerência de configuração · Auditoria](/docs/governanca/gerencia-de-configuracao#auditoria-categoria-crítica).
