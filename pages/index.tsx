import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col relative">
      <Head>
        <title>Next typeScript Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.container}`}>
        <div className="w-full text-xl text-gray-600 first-letter:text-9xl first-letter:text-blue-600 py-16 md:py-28 lg:py-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, labore
          nisi quam dolores recusandae reprehenderit velit sapiente neque
          impedit veniam ab incidunt doloremque quibusdam libero? Quisquam eum
          in accusantium deleniti!
        </div>
      </div>
    </div>
  );
};

export default Home;
