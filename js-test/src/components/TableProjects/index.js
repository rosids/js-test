import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import GlobalContext from '../../context/GlobalContext';
import Pagination from '../Pagination';
import style from './style.module.css';

export default function TableProject() {
  const {
    values: {
      repos, searchValue, searchType, offset,
    },
  } = useContext(GlobalContext);

  const filterRepos = repos.filter((repo) => {
    if (!searchValue) return true;
    return repo[searchType] && repo[searchType].toLowerCase().includes(searchValue);
  });

  const PAGE_SIZE = 5;

  return (
    <>
      <div className={style.tableContainer}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Repositório</th>
              <th>Linguagem</th>
              <th>–</th>
            </tr>
          </thead>
          <tbody>
            {filterRepos.slice(offset, offset + PAGE_SIZE).map(({ id, name, language }) => (
              <tr key={id}>
                <td data-label="Repositório">{name}</td>
                <td data-label="Linguagem">{language || '–'}</td>
                <td data-label="-">
                  <Link to={`/project/${name}`} className={style.btn}>
                    Detalhes
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination array={filterRepos} pageSize={PAGE_SIZE} />
    </>
  );
}
