import React from "react";

const Notification = () => {
  return (
    <div className="flex space-x-10 px-5 py-5 rounded-2xl hover:bg-purple-700 hover:text-white text-purple-500">
      <svg
        width="25"
        height="30"
        viewBox="0 0 20 24"
        fill="none"
        className="fill-current "
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 24C11.375 24 12.5 22.8923 12.5 21.5385H7.5C7.5 22.8923 8.6125 24 10 24ZM17.5 16.6154V10.4615C17.5 6.68308 15.45 3.52 11.875 2.68308V1.84615C11.875 0.824615 11.0375 0 10 0C8.9625 0 8.125 0.824615 8.125 1.84615V2.68308C4.5375 3.52 2.5 6.67077 2.5 10.4615V16.6154L0 19.0769V20.3077H20V19.0769L17.5 16.6154Z"
        />
      </svg>

      <h2>Messages</h2>
    </div>
  );
};

export default Notification;
