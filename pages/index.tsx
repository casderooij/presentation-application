import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Window from "../components/Window";

const Home: NextPage = () => {
  const [currentWindows, setCurrentWindows] = useState([{}, {}]);

  return (
    <>
      <Head>
        <title>Cas de Rooij</title>
      </Head>

      {currentWindows.map((w, i) => (
        <Window key={i} />
      ))}
    </>
  );
};

export default Home;
