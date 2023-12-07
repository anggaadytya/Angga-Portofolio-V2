import { STACKS } from "@/constant/stacks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProjectProps {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  techs: string[];
}

const CardProject = ({
  id,
  slug,
  image,
  title,
  description,
  techs,
}: CardProjectProps) => {
  return (
    <Link
      href={`/dashboard/project/${slug}`}
      key={id}
      className="flex gap-x-4 items-center hover:bg-neutral-800 rounded-lg p-3 my-2 transition-all duration-200 ease-in-out cursor-pointer group relative"
    >
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div>
        <h3 className="text-neutral-800 dark:text-neutral-300 font-medium text-lg">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 font-medium text-xs">
          {description}
        </p>
        <div className="flex gap-2 py-2">
          {techs?.map((stack: string, index: number) => (
            <div key={index}>
              <div className="w-5">{STACKS[stack]}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-2 group-hover:scale-125 group-hover:pr-3 transition-all duration-200 ease-in-out">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default CardProject;
