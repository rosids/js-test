import React, { useContext } from 'react';
import SearchBar from '../../components/SearchBar';
import TableProject from '../../components/TableProjects';
import GlobalContext from '../../context/GlobalContext';
import style from './style.module.css';

export default function Home() {
  const { values: { userRepos } } = useContext(GlobalContext);
  return (
    <div className={style.homeContainer}>
      <header className={style.header}>
        Repositórios de
        {' '}
        @
        {userRepos}
      </header>
      <SearchBar />
      <TableProject />
    </div>
  );
}
