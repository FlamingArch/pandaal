import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>pandaal: Event Ecosystem</title>
        <meta
          name="description"
          content="Have the power to explore and be part of amazing events happening in your city."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://pandaal.in">pandaal</a>
        </h1>

        <p className={styles.description}>Abhi Ban Rha Hai, Sabar Kro</p>
      </main>
    </div>
  );
}
