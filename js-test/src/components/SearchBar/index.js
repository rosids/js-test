import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import style from './style.module.css';

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
    <form className={style.form}>
      <select
        name="searchType"
        value={searchType}
        onChange={({ target }) => setSearchType(target.value)}
      >
        <option value="name">Nome</option>
        <option value="language">Tecnologia</option>
      </select>

      <input name="searchValue" type="text" value={searchValue} onChange={({ target }) => setSearchValue(target.value)} />
    </form>
  );
}
