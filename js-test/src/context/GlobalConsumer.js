import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import { requestRepos } from '../services/api';

function GlobalProvider({ children }) {
  const [repos, setRepos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('');
  const [repoDetailsCommits, setRepoDetailsCommits] = useState();
  const [repoDetailsBranches, setRepoDetailsBranches] = useState();
  const [repoDetailsLastUpdate, setRepoDetailsLastUpdate] = useState();

  useEffect(async () => {
    const repositories = await requestRepos();
    setRepos(repositories);
  }, []);

  const provide = {
    values: {
      repos,
      searchValue,
      searchType,
      repoDetailsCommits,
      repoDetailsBranches,
      repoDetailsLastUpdate,
    },
    functions: {
      setSearchValue,
      setSearchType,
      setRepoDetailsCommits,
      setRepoDetailsBranches,
      setRepoDetailsLastUpdate,
    },
  };

  return (
    <GlobalContext.Provider value={provide}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
