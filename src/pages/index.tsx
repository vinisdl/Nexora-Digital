import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logoUrl = useBaseUrl('/img/logo.svg');

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <img className={styles.heroLogo} src={logoUrl} alt="" />
        <div>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className={styles.heroText}>
            Como a Nexora Digital desenvolve software: um só ciclo de mudança para
            todas as equipes, especificação antes do código, gates de qualidade
            verificáveis e rigor proporcional ao risco de cada mudança.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs">
              Começar pelo meu papel
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/docs/exemplo/ponta-a-ponta">
              Ver uma change do início ao fim
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const quickLinks = [
  {
    title: 'Ciclo de vida e gates',
    description: '5 fases, gates G1 a G4 e um só "Done" para a empresa inteira.',
    to: '/docs/visao-geral/ciclo-de-vida',
  },
  {
    title: 'Qual configuração usar?',
    description: 'Categorias pequena, média, grande e crítica e a matriz de tailoring.',
    to: '/docs/visao-geral/categorias',
  },
  {
    title: 'Templates e checklists',
    description: 'Modelos prontos de work item, proposal, spec, PR e checklists dos gates.',
    to: '/docs/templates',
  },
  {
    title: 'Qualidade e métricas',
    description: 'Critérios de qualidade, gerência de configuração, métricas e melhoria contínua.',
    to: '/docs/governanca/qualidade',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Portal do Processo Organizacional de Desenvolvimento de Software da Nexora Digital">
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">Acesso rápido</Heading>
            <div className={styles.quickGrid}>
              {quickLinks.map((item) => (
                <Link className={styles.quickLink} to={item.to} key={item.to}>
                  <Heading as="h3">{item.title}</Heading>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
