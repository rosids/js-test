import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import GlobalContext from '../../context/GlobalContext';
import style from './style.module.css';

export default function TableProject() {
  const { values: { repos, searchValue, searchType } } = useContext(GlobalContext);

  const filterRepos = repos.filter((repo) => {
    if (!searchValue) return true;
    return repo[searchType] && repo[searchType].toLowerCase().includes(searchValue);
  });

  return (
    <div className={style.tableContainer}>
      <table>
        <thead className={style.thead}>
          <tr>
            <th>Repositório</th>
            <th>Linguagem</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {filterRepos.map(({ id, name, language }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{language}</td>
              <Link to={`/project/${name}`}>
                <button type="button">Detalhes</button>
              </Link>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
