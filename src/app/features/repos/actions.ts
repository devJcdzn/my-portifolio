"use server";

export async function getRepos() {
  const response = await fetch(
    "https://api.github.com/users/devJcdzn/repos?per_page=6&topics=open-source&sort=updated",
    {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },

      next: {
        tags: ["repos"],
        revalidate: 60 * 5,
      },
    }
  );

  const data: GitHubRepo[] = await response.json();

  const codeChallenges = data.filter((repo) =>
    repo.topics.includes("code-challenges") || repo.topics.includes("open-source")
  );

  return codeChallenges;
}
