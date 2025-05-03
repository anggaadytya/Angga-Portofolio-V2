import Link from "next/link";
import { GITHUB_ACCOUNTS } from "@/constant/github";

import Calendar from "./Calendar";
import Overview from "./Overview";
import TitleDashboard from "@/components/TitleDashboard";
import { FaGithub } from "react-icons/fa";

type ContributionsProps = {
  githubData: any;
};

export default function Contributors({ githubData }: ContributionsProps) {
  return (
    <div className="w-[90vw] md:w-full">
      <TitleDashboard
        title="Github Contributions"
        icons={<FaGithub />}
        paragraf={""}
      />
      <section className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <p className="dark:text-neutral-400">My contributions github.</p>
          <Link
            href={`https://github.com/${GITHUB_ACCOUNTS.username}`}
            target="_blank"
            passHref
            className="font-code text-sm text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-400"
          >
            @{GITHUB_ACCOUNTS.username}
          </Link>
        </div>

        {!githubData && <div className="dark:text-neutral-400">No Data</div>}

        {githubData && (
          <div className="space-y-3">
            <Calendar data={githubData} />
            <Overview data={githubData} />
          </div>
        )}
      </section>
    </div>
  );
}
