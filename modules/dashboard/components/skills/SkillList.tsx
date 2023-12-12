import MarqueeElement from "@/components/MarqueeElement";
import { STACKS } from "@/constant/stacks";

import SkillCard from "./SkillCard";

export default function SkillList() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS
  ).sort(() => Math.random() - 0.5);
  return (
    <section className=" max-w-[20rem] md:max-w-[37rem] mx-auto">
      <div className="flex flex-col overflow-x-hidden">
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
          return (
            <MarqueeElement
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              {slider.map(([name, icon], index) => (
                <SkillCard key={index} name={name} icon={icon} />
              ))}
            </MarqueeElement>
          );
        })}
      </div>
    </section>
  );
}
