"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import TitleDashboard from "@/components/TitleDashboard";
import { FiPhoneCall } from "react-icons/fi";
import { useSharingStore } from "@/stores/sharingStore";
import { toast } from "react-toastify";
import { SocialLinks } from "@/constant";
import Link from "next/link";

const Contact = () => {
  const { loading, setLoading } = useSharingStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmail = (e: any) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kjxef31",
        "template_aaqj1ze",
        e.target,
        "M4Y6va-AgVOD0MGUT"
      )
      .then((Response) => {
        console.log("Success", Response.status, Response.text);
      })
      .catch((err) => {
        console.log("Failed", err);
      })
      .finally(() => {
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Message sent successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  return (
    <>
      <TitleDashboard
        title="Contact"
        paragraf="If you have any questions or suggestions, feel free to contact me."
        icons={<FiPhoneCall />}
      />
      <div className="w-full flex flex-col transition-all duration-300 ease-in">
        <h1 className="text-sm font-medium">Social Media</h1>
        <div className="flex flex-wrap gap-2  py-6">
          {SocialLinks.map((social, index) => (
            <Link
              href={social.href}
              key={index}
              className={`flex items-center justify-center gap-x-1 w-[110px] h-[30px] rounded-md ${social.bgColor} `}
            >
              {social.icons}
              <h1 className="text-sm font-medium tracking-wide">
                {social.title}
              </h1>
            </Link>
          ))}
        </div>
        <h1 className="text-sm font-medium">send me a message</h1>
        <form className="w-full  gap-4 py-4 grid" onSubmit={handleEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="h-9 rounded px-2 placeholder:text-sm outline-none col-span-2 md:col-span-1 border border-neutral-300 dark:border-neutral-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="h-9 rounded px-2 placeholder:text-sm outline-none col-span-2 md:col-span-1 border border-neutral-300 dark:border-neutral-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="rounded px-2 placeholder:text-sm outline-none col-span-2 border border-neutral-300 dark:border-neutral-600"
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="bg-[#696969] h-9 p-1 rounded-md text-xs font-medium text-neutral-50 hover:bg-neutral-600 col-span-2"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
