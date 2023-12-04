import Image from "next/image";
import React from "react";

const Spotify = () => {
  return (
    <>
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/114200420?v=4"
          alt="logo"
          width={900}
          height={900}
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="font-bold text-neutral-200 tracking-wider py-2">Pulang</h1>
      <div className="py-4 flex justify-around">
        <h1 className="font-bold text-neutral-200">-</h1>
        <h1 className="font-bold text-neutral-200">0</h1>
        <h1 className="font-bold text-neutral-200">+</h1>
      </div>
    </>
  );
};

export default Spotify;
