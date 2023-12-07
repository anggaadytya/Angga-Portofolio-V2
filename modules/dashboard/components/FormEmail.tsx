import React from "react";
import { motion, useAnimation } from "framer-motion";

const FormEmail = () => {
  const [email, setEmail] = React.useState<string>("");

  const controls = useAnimation();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const isValidateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidateEmail(email)) {
      setEmail("");
      alert("Please enter a valid email address");
    } else {
      controls.start({
        x: 0,
        transition: {
          type: "spring",
          velocity: 600,
          stiffness: 5000,
          damping: 15,
        },
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#282828] p-1 rounded-md md:flex items-center justify-between h-9 w-full hidden"
    >
      <input
        value={email}
        onChange={handleEmail}
        type="text"
        placeholder="name@email.com"
        className="w-36 focus:outline-none bg-transparent placeholder:dark:text-neutral-600 dark:text-neutral-400 text-xs placeholder:text-neutral-100 h-full pt-2 placeholder:text-xs placeholder:font-medium"
      />
      <motion.button
        animate={controls}
        className="bg-[#696969] h-full p-1 px-3 rounded-md text-xs font-medium text-neutral-50"
        onClick={() => {
          controls.start({
            scale: [1, 1.2, 1],
            transition: { duration: 0.3, type: "spring" },
          });
          handleSubmit;
        }}
      >
        Contact
      </motion.button>
    </form>
  );
};

export default FormEmail;
