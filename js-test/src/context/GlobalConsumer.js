import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import requestRepos from '../services/api';

function GlobalProvider({ children }) {
  const [repos, setRepos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('');

  useEffect(async () => {
    const repositories = await requestRepos();
    setRepos(repositories);
  }, []);

  const provide = {
    values: {
      repos,
      searchValue,
      searchType,
    },
    functions: {
      setSearchValue,
      setSearchType,
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
