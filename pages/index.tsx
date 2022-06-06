import type { NextPage } from "next";
import Head from "next/head";
import Window from "../components/Window";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cas de Rooij</title>
      </Head>

      <Window />
      <Window />
      <Window />
    </>
  );
};

export default Home;
