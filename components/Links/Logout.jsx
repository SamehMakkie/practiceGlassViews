import React from "react";

const Logout = () => {
  return (
    <div className="self-end justify-self-center flex flex-grow justify-center space-x-10 px-5 py-5 rounded-2xl hover:bg-yellow-400 hover:text-white text-purple-500">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        className="fill-current "
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.84722 17.4861L11.8056 19.4444L18.75 12.5L11.8056 5.55556L9.84722 7.51389L13.4306 11.1111H0V13.8889H13.4306L9.84722 17.4861ZM22.2222 0H2.77778C1.23611 0 0 1.25 0 2.77778V8.33333H2.77778V2.77778H22.2222V22.2222H2.77778V16.6667H0V22.2222C0 23.75 1.23611 25 2.77778 25H22.2222C23.75 25 25 23.75 25 22.2222V2.77778C25 1.25 23.75 0 22.2222 0Z"
        />
      </svg>

      <h2>Logout</h2>
    </div>
  );
};

export default Logout;
