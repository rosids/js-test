import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import { requestRepos } from '../services/api';

function GlobalProvider({ children }) {
  const [repos, setRepos] = useState([]);
  const [userRepos, setUserRepos] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('');
  const [repoDetailsCommits, setRepoDetailsCommits] = useState();
  const [repoDetailsBranches, setRepoDetailsBranches] = useState();
  const [repoDetailsLastUpdate, setRepoDetailsLastUpdate] = useState();
  const [offset, setOffset] = useState(0);

  useEffect(async () => {
    const repositories = await requestRepos();
    setRepos(repositories);
    setUserRepos(repositories[0].owner.login);
  }, []);

  const provide = {
    values: {
      repos,
      userRepos,
      searchValue,
      searchType,
      repoDetailsCommits,
      repoDetailsBranches,
      repoDetailsLastUpdate,
      offset,
    },
    functions: {
      setSearchValue,
      setSearchType,
      setRepoDetailsCommits,
      setRepoDetailsBranches,
      setRepoDetailsLastUpdate,
      setOffset,
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
