import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function TableProject() {
  const { values: { repos, searchValue, searchType } } = useContext(GlobalContext);

  const filterRepos = repos.filter((repo) => {
    if (!searchValue) return true;
    return repo[searchType] && repo[searchType].toLowerCase().includes(searchValue);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Repositório</th>
          <th>Linguagem</th>
        </tr>
      </thead>
      <tbody>
        {filterRepos.map(({ id, name, language }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{language}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
