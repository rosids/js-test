import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import ProjectDetails from '../../components/ProjectDetails';
import GlobalContext from '../../context/GlobalContext';
import { requestRepoBranches, requestRepoCommits, requestRepoLastUpdate } from '../../services/api';

export default function RepoDetails() {
  const {
    functions: { setRepoDetailsCommits, setRepoDetailsBranches, setRepoDetailsLastUpdate },
  } = useContext(GlobalContext);

  const { name } = useParams();

  useEffect(async () => {
    const commits = await requestRepoCommits(name);
    setRepoDetailsCommits(commits.length);

    const branches = await requestRepoBranches(name);
    setRepoDetailsBranches(branches.length);

    const lastUpdate = await requestRepoLastUpdate(name);
    setRepoDetailsLastUpdate(lastUpdate);
  }, []);

  return (
    <ProjectDetails />
  );
}
