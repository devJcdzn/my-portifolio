import Image from "next/image";
import { getRepos } from "./features/repos/actions";
import Link from "next/link";

export default async function Home() {
  const repos = await getRepos();

  return (
    <div className="relative flex min-h-screen w-full bg-white dark:bg-black">
      <div
        className={
          "absolute inset-0 " +
          "[background-size:20px_20px] " +
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] " +
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        }
      />
      <div className="flex flex-col md:flex-row items-center w-full z-40 p-8 md:p-12 gap-8">
        <div
          className="flex flex-col items-center rounded-xl flex-1 size-full 
          max-w-lg dark:bg-zinc-900/80 p-8 border border-zinc-800"
        >
          <Image
            src={repos[0].owner.avatar_url}
            alt={repos[0].owner.login}
            width={120}
            height={120}
            className="rounded-full border-3 border-lime-500"
          />

          <div className="grid gap-1 place-items-center md:place-items-start mt-6">
            <span className="text-zinc-400 text-sm">Hello, my name is</span>
            <h1 className="text-4xl font-bold mb-2">Jean Carlos</h1>
            <p className="text-zinc-400 text-center md:text-start">
              I have always been very creative when it comes to solving
              problems. I currently work as a fullstack developer. In my daily
              life, I work with several technologies such as Node.js,
              PostgreSQL, NestJs, React.js, Next.js and Docker.
            </p>

            <div className="flex flex-col gap-2 mt-8 w-full">
              <Link
                href={repos[0].owner.html_url}
                className="p-1.5 bg-lime-500 hover:bg-lime-600 transition-colors font-normal 
                text-black tracking-tight rounded-sm w-full 
                flex items-center justify-center text-sm"
              >
                My Github
              </Link>
              <Link
                href={"https://linkedin.com/in/jeancdev"}
                className="p-1.5 bg-lime-500 hover:bg-lime-600 transition-colors font-normal 
                text-black tracking-tight rounded-sm w-full 
                flex items-center justify-center text-sm"
              >
                My Linkedin
              </Link>
            </div>
          </div>

          <div className="space-y-4 mt-6 md:mt-auto">
            <h3 className="text-xl font-semibold">Some Personal Projects</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href={"https://socialflow.site"}
                className="text-lime-300 underline underline-offset-4 text-sm truncate"
              >
                SocialFlow - Assistente de Mídias Sociais
              </Link>
              <Link
                href={"https://inkmemory.site"}
                className="text-lime-300 underline underline-offset-4 text-sm truncate"
              >
                InkMemory - Criador de quadrinhos com IA
              </Link>
              <Link
                href={"https://confiaagenda.com.br"}
                className="text-lime-300 underline underline-offset-4 text-sm truncate"
              >
                Confia Agenda - Seu novo modo de trabalhar
              </Link>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center flex-1 bg-zinc-900/80 
          rounded-xl border border-zinc-800 size-full p-8"
        >
          <h2 className="mx-auto text-2xl font-semibold">My Main Repos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6 w-full">
            {repos.map((repo) => (
              <div
                key={repo.name}
                className="p-4 border border-lime-600/60 rounded-md 
                relative overflow-hidden hover:border-lime-600 cursor default transition-colors"
              >
                <span className="absolute top-0 right-0 bg-lime-400 text-black p-1 text-xs rounded-bl-md">
                  {repo.language}
                </span>

                <h3 className="text-lg font-semibold">{repo.name}</h3>
                <p className="text-zinc-400 text-xs">{repo.full_name}</p>
                <p className="text-sm text-zinc-400 mb-4">{repo.description}</p>
                <Link
                  href={repo.html_url}
                  className="text-lime-300 underline text-sm hover:text-lime-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
