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
          <thead className={style.thead}>
            <tr>
              <th>Repositório</th>
              <th>Linguagem</th>
              <th>–</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            {filterRepos.slice(offset, offset + PAGE_SIZE).map(({ id, name, language }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{language || '–'}</td>
                <Link to={`/project/${name}`}>
                  <button type="button">Detalhes</button>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination array={filterRepos} pageSize={PAGE_SIZE} />
    </>
  );
}
