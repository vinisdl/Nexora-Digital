import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Processo Nexora SDD',
  tagline: 'Processo Organizacional de Desenvolvimento de Software da Nexora Digital · Release 1.0',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://vinisdl.github.io',
  baseUrl: '/Nexora-Digital/',
  trailingSlash: true,

  organizationName: 'vinisdl',
  projectName: 'Nexora-Digital',

  onBrokenLinks: 'throw',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'processo',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/vinisdl/Nexora-Digital/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Processo Nexora SDD',
      logo: {
        alt: 'Nexora Digital',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'doc', docId: 'intro', label: 'Início', position: 'left'},
        {type: 'doc', docId: 'visao-geral/ciclo-de-vida', label: 'Processo', position: 'left'},
        {type: 'doc', docId: 'papeis/raci', label: 'Papéis', position: 'left'},
        {type: 'doc', docId: 'templates/index', label: 'Templates', position: 'left'},
        {type: 'doc', docId: 'governanca/qualidade', label: 'Governança', position: 'left'},
        {type: 'doc', docId: 'exemplo/ponta-a-ponta', label: 'Exemplo', position: 'left'},
        {type: 'doc', docId: 'sprints/index', label: 'Sprints', position: 'left'},
        {type: 'html', position: 'right', value: '<span class="badge-versao">Release 1.0</span>'},
        {
          href: 'https://github.com/vinisdl/Nexora-Digital',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Processo',
          items: [
            {label: 'Ciclo de vida e gates', to: '/docs/visao-geral/ciclo-de-vida'},
            {label: 'Categorias e tailoring', to: '/docs/visao-geral/categorias'},
            {label: 'Matriz RACI', to: '/docs/papeis/raci'},
            {label: 'Templates e checklists', to: '/docs/templates'},
          ],
        },
        {
          title: 'Governança',
          items: [
            {label: 'Qualidade', to: '/docs/governanca/qualidade'},
            {label: 'Gerência de configuração', to: '/docs/governanca/gerencia-de-configuracao'},
            {label: 'Métricas', to: '/docs/governanca/metricas'},
            {label: 'Melhoria contínua', to: '/docs/governanca/melhoria-continua'},
          ],
        },
        {
          title: 'Sobre',
          items: [
            {label: 'Changelog', to: '/docs/sobre/changelog'},
            {label: 'Validação', to: '/docs/validacao'},
            {label: 'Team Chapter', to: '/docs/team-chapter'},
            {label: 'GitHub', href: 'https://github.com/vinisdl/Nexora-Digital'},
          ],
        },
      ],
      copyright: `Nexora Digital · Processo Organizacional de Desenvolvimento de Software · Release 1.0 · Mantido pelo Comitê do Processo · Marco V. S. Dall Alba e Matheus Milanezi · Unisinos ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
