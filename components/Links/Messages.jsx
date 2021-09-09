import React from "react";

const Messages = () => {
  return (
    <div className="flex space-x-10 px-5 py-5 rounded-2xl hover:bg-purple-700 hover:text-white text-purple-500">
      <svg
        width="25"
        height="25"
        viewBox="0 0 20 20"
        fill="none"
        className="fill-current "
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0Z"
        />
      </svg>

      <h2>Messages</h2>
    </div>
  );
};

export default Messages;
