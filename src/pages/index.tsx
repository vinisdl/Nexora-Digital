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
            Portal de processo para padronizar o ciclo de mudancas da Nexora
            Digital com especificacoes versionadas, revisao antecipada e
            criterios claros de entrega.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs">
              Acessar processo
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/docs/sprints">
              Ver sprints
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const quickLinks = [
  {
    title: 'Diagnostico AS-IS',
    description: 'Os 6 sintomas organizacionais que motivam o processo SDD.',
    to: '/docs/processo/diagnostico-as-is',
  },
  {
    title: 'Processo SDD',
    description: 'Fases, responsabilidades e artefatos do ciclo OpenSpec.',
    to: '/docs/processo/processo-sdd',
  },
  {
    title: 'Definition of Done',
    description: 'Criterios obrigatorios para considerar uma mudanca entregue.',
    to: '/docs/processo/definition-of-done',
  },
  {
    title: 'Metricas',
    description: 'Indicadores para medir lead time, defeitos e retrabalho.',
    to: '/docs/processo/metricas',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Portal de processo SDD com OpenSpec da Nexora Digital">
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">Documentacao principal</Heading>
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
