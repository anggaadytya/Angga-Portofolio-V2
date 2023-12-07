import React from "react";

interface TitleDashboardProps {
  icons?: JSX.Element;
  title: string;
  paragraf: string;
}

const TitleDashboard = ({ icons, title, paragraf }: TitleDashboardProps) => {
  return (
    <div>
      <div className="flex gap-x-3 items-center space-y-1 ">
        {icons}
        <h2 className="font-bold text-neutral-800 dark:text-neutral-200 pb-1">
          {title}
        </h2>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400  text-sm pb-2">
        {paragraf}
      </p>
    </div>
  );
};

export default TitleDashboard;
