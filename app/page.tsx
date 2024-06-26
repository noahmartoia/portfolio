import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import name from "../composants/composants1"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.description}>
          <div className={styles.margin}>
          <h2 className={styles.big}>
            Hi
          </h2>
          <h2 className={styles.big}>
            I'm <span className={styles.blue}>{name()}</span>
          </h2>
          <h2 className={styles.big}>
            Web Developer
          </h2>
          </div>
          <div>
            <img src="https://placehold.co/250" alt="placeholder" className={styles.border_radius}></img>
          </div>
        </div>
        <div>
          <a href="contact" className={styles.contact}>Contact</a>
        </div>
    </>
  );
}
