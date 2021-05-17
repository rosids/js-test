import React from 'react';
import SearchBar from '../../components/SearchBar';
import TableProject from '../../components/TableProjects';

export default function Home() {
  return (
    <>
      <header>Repositório de Rosids</header>
      <SearchBar />
      <TableProject />
    </>
  );
}
