async function requestRepos() {
  const results = await (await fetch('https://api.github.com/users/rosids/repos')).json();
  return results;
}

export default requestRepos;
