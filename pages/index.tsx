import { useAtom } from "jotai";
import type { NextPage } from "next";
import Head from "next/head";
import Window from "../components/Window";
import { readWindowsAtom } from "../lib/windowStore";

const Home: NextPage = () => {
  const [windowArray] = useAtom(readWindowsAtom);

  return (
    <>
      <Head>
        <title>Cas de Rooij</title>
      </Head>

      {windowArray.map((window, i) => (
        <Window window={window} key={i} />
      ))}
    </>
  );
};

export default Home;
