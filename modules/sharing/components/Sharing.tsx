"use client";
import LineBreak from "@/components/LineBreak";
import TitleDashboard from "@/components/TitleDashboard";
import Image from "next/image";
import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useSharingStore } from "@/stores/sharingStore";
import { useSession, signIn, signOut } from "next-auth/react";

interface Message {
  id: number;
  date: string;
  image: string;
  sender: string;
  message: string;
}

const LogOutButton = () => {
  const { setLoading } = useSharingStore();
  return (
    <button
      className="flex items-center justify-center gap-x-3 bg-[#696969] h-9 w-16 rounded-md text-xs font-medium text-neutral-50 tracking-wide transition-all "
      onClick={() => signOut()}
    >
      Log Out
    </button>
  );
};

const Sharing = () => {
  const { data: session } = useSession();
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: 1,
      image: "https://avatars.githubusercontent.com/u/114200121?v=4",
      sender: "Viranda Zaizafun",
      date: "",
      message: "hello my name is Viranda Zaizafun ",
    },
  ]);
  const [newMessage, setNewMessage] = React.useState<string>("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const hanldeMessage = () => {
    if (newMessage.trim() !== "") {
      const currentDate = new Date().toLocaleString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
      const newMSG = {
        id: messages.length + 1,
        image: session?.user?.image || "",
        sender: session?.user?.name || "",
        date: currentDate,
        message: newMessage,
      };
      setMessages([...messages, newMSG]);
      setNewMessage("");
      console.log({ newMSG });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      hanldeMessage();
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <TitleDashboard
        icons={<FiMessageCircle />}
        title="Sharing Session"
        paragraf="Sharing Session With Friends"
        button={session ? <LogOutButton /> : null}
      />
      <LineBreak />
      <div
        className={`overflow-y-auto h-[30rem] scroll-smooth transition-all duration-300 ease-in-out ${
          session ? "" : "blur-sm"
        } `}
      >
        {messages.map((message) => (
          <div className="flex gap-x-2 pb-4 " key={message.id}>
            <div className="w-9 h-9 rounded-full border border-neutral-400">
              <Image
                src={message.image}
                alt="Sharing"
                width={1000}
                height={1000}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center space-x-3 pb-1">
                <h1 className="text-md font-medium dark:text-neutral-300">
                  {message.sender}
                </h1>
                <p className="text-xs dark:text-neutral-400 text-neutral-800">
                  {message.date}
                </p>
              </div>
              <div className="bg-neutral-300 dark:bg-[#696969] w-[fit-content] max-w-[98%] rounded-r-md rounded-bl-md ">
                <h2 className="text-sm font-base  p-2 text-justify">
                  {message.message}
                </h2>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {session ? (
        <div className="flex items-center justify-center gap-x-3 pt-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full h-9 p-1 rounded-md outline-none bg-neutral-300 dark:text-neutral-800 px-4"
          />
          <button
            className="bg-[#696969] h-9 w-20 p-1 rounded-md text-xs font-medium text-neutral-50"
            onClick={hanldeMessage}
          >
            Send
          </button>
        </div>
      ) : (
        <button
          className="flex items-center justify-center gap-x-3 mt-4 bg-[#696969] h-9 w-full rounded-md text-xs font-medium text-neutral-50 tracking-wide transition-all"
          // onClick={() => setLoading(true)}
          onClick={() => signIn("github")}
        >
          <FaGithub /> Login With Github
        </button>
      )}
    </>
  );
};

export default Sharing;
