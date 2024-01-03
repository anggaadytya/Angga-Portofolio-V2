import React from "react";

interface inputMessageProps {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  hanldeMessage: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputMessage = ({
  newMessage,
  setNewMessage,
  hanldeMessage,
  handleKeyDown,
}: inputMessageProps) => {
  return (
    <div className="flex items-center justify-center gap-x-3 pt-4 border-t border-neutral-400">
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
  );
};

export default InputMessage;
