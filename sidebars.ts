import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Processo SDD',
      items: [
        'processo/diagnostico-as-is',
        'processo/processo-sdd',
        'processo/categorias-de-change',
        'processo/templates-openspec',
        'processo/definition-of-done',
        'processo/papeis-e-responsabilidades',
        'processo/metricas',
      ],
    },
    {
      type: 'category',
      label: 'Sprints',
      items: [
        'sprints/index',
        'sprints/sprint-1',
        'sprints/sprint-2',
        'sprints/sprint-3',
        'sprints/sprint-4',
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
