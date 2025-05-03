import React from "react";

const Resume = () => {
  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1h-PGqbJ0U_qVol6b95KphRH69qn4ioe5/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <h2 className="font-bold dark:text-neutral-200">Resume</h2>
      <p className="text-xs my-3 dark:text-neutral-400 text-neutral-600 font-medium leading-1 tracking-tight text-justify">
        With a background in D4 Information Technology from the State
        Polytechnic of Lhokseumawe, I bring skills in website development with a
        specific focus on Frontend Development.
      </p>
      <button
        id="download-resume"
        onClick={handleDownloadResume}
        className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium text-neutral-50 hover:bg-neutral-600 "
      >
        Download
      </button>
    </>
  );
};

export default Resume;
