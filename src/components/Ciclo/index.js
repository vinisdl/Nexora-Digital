import React from 'react';
import Link from '@docusaurus/Link';

const fases = [
  {num: '1', nome: 'Entrada', desc: 'PO registra, classifica e prioriza a demanda', to: '/docs/fases/entrada'},
  {gate: 'G1 · DoR'},
  {num: '2', nome: 'Especificação', desc: 'Proposal, cenários WHEN/THEN e tasks', to: '/docs/fases/especificacao'},
  {gate: 'G2 · Spec completa'},
  {num: '3', nome: 'Revisão', desc: 'PO, QA e Tech Lead aprovam a spec no PR', to: '/docs/fases/revisao'},
  {gate: 'G3 · Spec aprovada'},
  {num: '4', nome: 'Construção', desc: 'Código e cenários viram testes', to: '/docs/fases/construcao'},
  {num: '5', nome: 'Entrega', desc: 'Aceite, archive da change e deploy', to: '/docs/fases/entrega'},
  {gate: 'G4 · Done'},
];

export function Ciclo() {
  return (
    <div>
      <div className="ciclo">
        {fases.map((f, i) =>
          f.gate ? (
            <div className="ciclo-gate" key={i}>
              <span>{f.gate}</span>
            </div>
          ) : (
            <Link className="ciclo-fase" to={f.to} key={i}>
              <span className="num">FASE {f.num}</span>
              <span className="nome">{f.nome}</span>
              <span className="desc">{f.desc}</span>
            </Link>
          ),
        )}
      </div>
      <div className="ciclo-continuo">
        <strong>Contínuo · Melhoria do processo:</strong> métricas coletadas pelo pipeline → retrospectiva
        do processo a cada release → melhoria vira change no repositório do processo.{' '}
        <Link to="/docs/fases/melhoria-continua">Ver atividades</Link>
      </div>
    </div>
  );
}

const papeis = [
  {nome: 'Sou Product Owner', desc: 'Registrar demanda, escrever a proposal, dar o aceite', to: '/docs/papeis/product-owner'},
  {nome: 'Sou Desenvolvedor', desc: 'Abrir a change, escrever spec e tasks, implementar', to: '/docs/papeis/desenvolvedor'},
  {nome: 'Sou Tech Lead', desc: 'Classificar, revisar viabilidade, aprovar no G3', to: '/docs/papeis/tech-lead'},
  {nome: 'Sou QA', desc: 'Dono dos cenários e dos testes automatizados', to: '/docs/papeis/qa'},
  {nome: 'Sou DevOps', desc: 'Pipeline, deploy e coleta das métricas', to: '/docs/papeis/devops'},
  {nome: 'Sou do Comitê do Processo', desc: 'Versionar e melhorar o próprio processo', to: '/docs/papeis/comite-do-processo'},
];

export function PapeisGrid() {
  return (
    <div className="papeis-grid">
      {papeis.map((p) => (
        <Link className="papel-card" to={p.to} key={p.to}>
          <strong>{p.nome}</strong>
          <span>{p.desc}</span>
        </Link>
      ))}
    </div>
  );
}
