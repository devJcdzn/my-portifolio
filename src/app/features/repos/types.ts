type GitHubRepo = {
  name: string;
  html_url: string;
  description: string;
  full_name: string;
  owner: {
    avatar_url: string;
    html_url: string;
    login: string;
  };
  topics: string[];
  stargazers_count: number;
  language: string;
};
