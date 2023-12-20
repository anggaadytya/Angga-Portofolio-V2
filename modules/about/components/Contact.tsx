import React from "react";
import TitleDashboard from "@/components/TitleDashboard";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <TitleDashboard
        title="Contact"
        paragraf="If you have any questions or suggestions, feel free to contact me."
        icons={<FiPhoneCall />}
      />
      <div className="w-full flex flex-col">
        <h1>Or send me a message</h1>
        <form className="w-full flex flex-col gap-4 py-4">
          <input
            type="text"
            placeholder="Name"
            className="h-9 rounded px-2 placeholder:text-sm outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-9 rounded px-2 placeholder:text-sm outline-none"
          />
          <textarea
            placeholder="Message"
            className="rounded px-2 placeholder:text-sm outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#696969] h-9 p-1 rounded-md text-xs font-medium text-neutral-50"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
