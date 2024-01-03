"use client";
import LineBreak from "@/components/LineBreak";
import TitleDashboard from "@/components/TitleDashboard";
import { useState, useRef, useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import supabase from "@/libs/supabase";
import LogOut from "./LogOut";
import ButtonSign from "./ButtonSign";
import InputMessage from "./InputMessage";
import MessageDetail from "./MessageDetail";

interface SharingSession {
  id: string;
  image: string;
  sender: string;
  message: string;
  date: string;
}

const Sharing = () => {
  const { data: session } = useSession();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<SharingSession[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const hanldeMessage = async () => {
    if (newMessage.trim() !== "") {
      const currentDate = new Date().toLocaleString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
      const { email, image, name } = session?.user || {};
      const newMSG = {
        id: uuidv4(),
        email: email || "",
        image: image || "",
        sender: name || "",
        date: currentDate,
        message: newMessage,
      };

      try {
        const { data, error } = await supabase
          .from("sharingsession")
          .insert([newMSG]);

        if (error) {
          console.error("Error inserting message:", error);
        } else {
          console.log("Inserted message:", data);

          setNewMessage("");
        }
      } catch (error: any) {
        console.error("Error inserting message:", error.message);
      }
      setMessages((prevMessages) => [...prevMessages, newMSG]);
      setNewMessage("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      hanldeMessage();
    }
  };

  const fetchMessage = async () => {
    try {
      const { data: db, error } = await supabase
        .from("sharingsession")
        .select();
      if (error) {
        console.error("Error fetching messages:", error);
      } else {
        console.log("Fetched data from supabase:", db);
        const convertedData: SharingSession[] = db.map((item: any) => ({
          id: item.email,
          image: item.image || "",
          sender: item.sender,
          message: item.message,
          date: item.date,
        }));
        console.log("Converted data:", convertedData);
        setMessages(convertedData);
      }
    } catch (error: any) {
      console.error("Error fetching messages:", error.message);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <>
      <TitleDashboard
        icons={<FiMessageCircle />}
        title="Sharing Session"
        paragraf="Sharing Session With Me"
        button={session ? <LogOut signOut={() => signOut()} /> : null}
      />
      <LineBreak />
      <div
        className={`overflow-y-auto h-[30rem] scroll-smooth transition-all duration-300 ease-in-out scrollbar-hide  ${
          session ? "" : "blur-sm"
        } `}
      >
        {messages?.map((message) => (
          <MessageDetail key={message.id} {...message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {session ? (
        <InputMessage
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          hanldeMessage={hanldeMessage}
          handleKeyDown={handleKeyDown}
        />
      ) : (
        <div className="border-t border-neutral-400">
          <p className="text-center text-neutral-400">Please Sign in to Chat</p>
          <ButtonSign signIn={() => signIn("github")} />
        </div>
      )}
    </>
  );
};

export default Sharing;
