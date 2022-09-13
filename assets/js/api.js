async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/JuanSsilva07/Portfolio/main/data/profile.json?token=GHSAT0AAAAAABWEFIQK5BY6ZG2FUR3SQHZGYZAVBQQ";
  const feching = await fetch(url);
  return await feching.json();
}
