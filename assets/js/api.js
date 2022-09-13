async function fetchProfileData() {
  const url ="https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json";
  const feching = await fetch(url);
  return await feching.json()
}
