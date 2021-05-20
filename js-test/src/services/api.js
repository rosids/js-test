export async function requestRepos() {
  const results = await (await fetch('https://api.github.com/users/rosids/repos')).json();
  return results;
}

export async function requestRepoLastUpdate(name) {
  const results = await (await fetch(`https://api.github.com/repos/rosids/${name}`)).json();
  return results.updated_at;
}

export async function requestRepoCommits(name) {
  const results = await (await fetch(`https://api.github.com/repos/rosids/${name}/commits?per_page=100`)).json();
  return results;
}

export async function requestRepoBranches(name) {
  const results = await (await fetch(`https://api.github.com/repos/rosids/${name}/branches?per_page=100`)).json();
  return results;
}
