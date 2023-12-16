import React from "react";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { SocialLinks } from "@/constant";

type SocialMediaProps = {
  title: string;
  href: string;
  icons: JSX.Element;
};

const SocialMedia = () => {
  return (
    <div className="flex items-center md:gap-x-4 justify-around md:justify-center">
      {SocialLinks.map((link: SocialMediaProps, index: number) => (
        <Tooltip content={link.title} key={index}>
          <Link
            href={link.href}
            aria-label={link.title}
            target="_blank"
            className="hover:scale-125 transition-all duration-300 ease-in-out"
          >
            {link.icons}
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

export default SocialMedia;
