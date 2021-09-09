import Head from "next/head";
import { useState } from "react";
import LoggedInView from "../components/LoggedInView"
import LoginCard from "../components/LoginCard";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState({
    id: 1,
    name: "Mohammad",
    surname: "Sabah",
  });

  return (
    <div className="background">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

        <LoggedInView />
    </div>
  );
}
