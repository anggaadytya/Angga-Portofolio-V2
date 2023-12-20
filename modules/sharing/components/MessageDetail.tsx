import Image from "next/image";
import React from "react";

interface MessageDetailProps {
  id: string;
  image: string;
  sender: string;
  message: string;
  date: string;
}

const MessageDetail = ({
  id,
  image,
  sender,
  message,
  date,
}: MessageDetailProps) => {
  return (
    <div className="flex gap-x-2 pb-4 " key={id}>
      <div className="w-9 h-9 rounded-full border border-neutral-400">
        <Image
          src={image}
          alt="Sharing"
          width={1000}
          height={1000}
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center space-x-3 pb-1">
          <h1 className="text-sm md:text-md font-medium dark:text-neutral-300">
            {sender}
          </h1>
          <p className="text-xs dark:text-neutral-400 text-neutral-800">
            {date}
          </p>
        </div>
        <div className="bg-neutral-300 dark:bg-[#696969] w-[fit-content] max-w-[98%] rounded-r-md rounded-bl-md ">
          <h2 className="text-xs md:text-sm font-base  p-2 text-justify">
            {message}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;
