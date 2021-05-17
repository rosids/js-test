import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function SearchBar() {
  const {
    values: {
      searchValue,
      searchType,
    },
    functions: {
      setSearchValue,
      setSearchType,
    },
  } = useContext(GlobalContext);

  return (
    <form>
      <select
        name="searchType"
        value={searchType}
        onChange={({ target }) => setSearchType(target.value)}
      >
        <option value="name">Nome</option>
        <option value="language">Tecnologia</option>
      </select>
      <label htmlFor="searchValue">
        <input type="text" value={searchValue} onChange={({ target }) => setSearchValue(target.value)} />
      </label>
    </form>
  );
}
