import React from "react";

const TagTitle = () => {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-xl lg:text-xl font-medium font-sora">
          <h1>Hi, I&apos;m Angga Adytya</h1>{" "}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>
            Based in Aceh <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="text-sm md:text-md text-justify text-neutral-400 dark:text-neutral-400">
          I am a Frontend Developer. I have 3 years of experience. Focus on Web
          Development. I love coding. I love to learn new things.
        </p>
      </div>
    </section>
  );
};

export default TagTitle;
