import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function ProjectDetails() {
  const {
    values: {
      repoDetailsCommits, repoDetailsBranches,
      repoDetailsLastUpdate,
    },
  } = useContext(GlobalContext);

  return (
    <section>
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
        {repoDetailsLastUpdate}
      </p>
    </section>
  );
}
