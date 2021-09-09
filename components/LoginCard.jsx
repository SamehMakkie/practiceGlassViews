import React from "react";
import Logo from "./Logo";

const LoginCard = () => {
  return (
    <main className="flex w-screen h-screen justify-center items-center">
      <div className="items-center w-1/4 rounded-login-cart pass-through p-8 text-primary font-bold">
        <div className="flex justify-center py-2">
          <Logo />
        </div>
        <div className="pt-5">
          <form>
            <div className="py-2">
              <h1 className="py-3">Username</h1>
              <input
                type="text"
                className="block pass-through rounded-full w-full h-12 px-5 outline-none"
                placeholder="Username..."
              />
            </div>
            <div className="py-2">
              <h1 className="py-3">Password</h1>
              <input
                type="password"
                className="block pass-through rounded-full w-full h-12 px-5 outline-none"
                placeholder="Password..."
              />
            </div>
            <div className="pt-10 flex justify-center items-end">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-white hover:text-primary text-white rounded-full font-bold py-2 px-7 ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginCard;
