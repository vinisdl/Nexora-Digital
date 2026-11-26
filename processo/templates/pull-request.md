---
title: Pull Request
---

# Template · Pull Request (AF06)

Fica em `.github/pull_request_template.md` e é preenchido automaticamente ao abrir o PR, tanto o PR da spec ([Revisão](/docs/fases/revisao)) quanto o de código ([Construção](/docs/fases/construcao)).

```markdown
## AB#<id> · <título da change>

Tipo de PR: [ ] Spec  [ ] Código
Categoria: [ ] Pequena  [ ] Média  [ ] Grande  [ ] Crítica
Change: openspec/changes/<id>-<slug>/

## O que muda
Resumo em 2 ou 3 linhas (copie do "O que muda" da proposal).

## Como verificar
Cenários afetados:
- Scenario: ...

## Checklist
- [ ] Pipeline verde (openspec validate --strict + testes)
- [ ] Revisores da categoria atribuídos
- [ ] Spec reaberta? Se sim, explique o motivo:
```

## Revisores obrigatórios (CODEOWNERS + label da categoria)

| Pequena | Média | Grande | Crítica |
|---|---|---|---|
| 1 par | PO + QA + TL | + TLs das equipes envolvidas | + Segurança |
