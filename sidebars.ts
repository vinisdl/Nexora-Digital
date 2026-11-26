import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Contexto',
      collapsed: false,
      items: [
        'contexto/diagnostico-as-is',
        'contexto/personas',
        'contexto/rastreabilidade',
      ],
    },
    {
      type: 'category',
      label: 'Visão geral',
      collapsed: false,
      items: [
        'visao-geral/principios',
        'visao-geral/metamodelo',
        'visao-geral/ciclo-de-vida',
        'visao-geral/categorias',
      ],
    },
    {
      type: 'category',
      label: 'Fases e atividades',
      collapsed: false,
      items: [
        'fases/entrada',
        'fases/especificacao',
        'fases/revisao',
        'fases/construcao',
        'fases/entrega',
        'fases/melhoria-continua',
      ],
    },
    {
      type: 'category',
      label: 'Papéis',
      items: [
        'papeis/raci',
        'papeis/product-owner',
        'papeis/desenvolvedor',
        'papeis/tech-lead',
        'papeis/qa',
        'papeis/devops',
        'papeis/seguranca',
        'papeis/comite-do-processo',
      ],
    },
    {
      type: 'category',
      label: 'Artefatos',
      items: ['artefatos/catalogo'],
    },
    {
      type: 'category',
      label: 'Templates e checklists',
      items: [
        'templates/index',
        'templates/work-item',
        'templates/proposal',
        'templates/spec-delta',
        'templates/design',
        'templates/tasks',
        'templates/pull-request',
        'templates/checklist-g1-dor',
        'templates/checklist-g2-spec-completa',
        'templates/checklist-g3-revisao',
        'templates/checklist-g4-dod',
        'templates/checklist-seguranca',
        'templates/retrospectiva',
      ],
    },
    {
      type: 'category',
      label: 'Ferramentas',
      items: [
        'ferramentas/azure-devops',
        'ferramentas/github',
        'ferramentas/openspec',
        'ferramentas/pipeline',
        'ferramentas/ia',
        'ferramentas/teams',
      ],
    },
    {
      type: 'category',
      label: 'Governança',
      items: [
        'governanca/qualidade',
        'governanca/gerencia-de-configuracao',
        'governanca/metricas',
        'governanca/historico-organizacional',
        'governanca/melhoria-continua',
      ],
    },
    'exemplo/ponta-a-ponta',
    {
      type: 'category',
      label: 'Validação',
      items: ['validacao/index', 'validacao/conformidade'],
    },
    {
      type: 'category',
      label: 'Sobre o processo',
      items: [
        'sobre/decisoes',
        'sobre/changelog',
        'sobre/roadmap',
        'sobre/glossario',
      ],
    },
    {
      type: 'category',
      label: 'Projeto (Sprints)',
      items: [
        'sprints/index',
        'sprints/sprint-1',
        'sprints/sprint-2',
        'sprints/sprint-3',
        'sprints/sprint-4',
        'sprints/sprint-5',
        'sprints/sprint-6',
      ],
    },
    {
      type: 'category',
      label: 'Team Chapter',
      items: [
        'team-chapter/index',
        'team-chapter/matheus-grassi-milanezi',
        'team-chapter/marco-vinicius-soares-dall-alba',
      ],
    },
  ],
};

export default sidebars;
