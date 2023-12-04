import React from "react";
import Image from "next/image";

interface ImageProps {
  className?: string;
}

const AvatarImage = ({ className }: ImageProps) => {
  return (
    <div className={`${className} rounded-full bg-neutral-600`}>
      <Image
        src="/heroImage.svg"
        alt="logo"
        width={900}
        height={900}
        className="object-cover w-full h-full rounded-full"
        loading="eager"
      />
    </div>
  );
};

export default AvatarImage;
