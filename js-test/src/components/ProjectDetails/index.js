import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import style from './style.module.css';

export default function ProjectDetails() {
  const {
    values: {
      repoDetailsCommits, repoDetailsBranches,
      repoDetailsLastUpdate,
    },
  } = useContext(GlobalContext);

  const { name } = useParams();

  return (
    <div className={style.detailsContainer}>
      <section className={style.details}>
        <h3>
          O repositório
          {' '}
          {name}
        </h3>
        <p>
          Possui
          {' '}
          { repoDetailsCommits }
          {' '}
          {repoDetailsCommits > 1 ? 'commits' : 'commit'}
        </p>
        <p>
          Possui
          {' '}
          {repoDetailsBranches}
          {' '}
          {repoDetailsBranches > 1 ? 'branches' : 'branch'}
        </p>
        <p>
          Última atualização em
          {' '}
          {new Date(repoDetailsLastUpdate).toLocaleString('pt-br')}
        </p>
        <Link to="/projects">Voltar</Link>
      </section>
    </div>
  );
}
