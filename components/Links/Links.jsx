import React from "react";
import Messages from "./Messages";
import Notification from "./Notification";
import Settings from "./Settings";


const Links = () => {



  return (
    <div className="flex flex-col flex-1 items-stretch py-10 px-5 ">
      <Settings />
      <Notification />
      <Messages />
    </div>
  );
};

export default Links;
