import React from "react";

const Resume = () => {
  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1jLuEFpR5mTxNBmQNbU2BnrzMyj7twgnD/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div>
      <h2 className="font-bold text-neutral-200">Resume</h2>
      <p className="text-xs my-3 text-neutral-400 font-medium leading-1 tracking-tight text-justify">
        With a background in D4 Information Technology from the State
        Polytechnic of Lhokseumawe, I bring skills in website development with a
        specific focus on Frontend Development.
      </p>
      <button
        onClick={handleDownloadResume}
        className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium text-neutral-50"
      >
        Download
      </button>
    </div>
  );
};

export default Resume;
