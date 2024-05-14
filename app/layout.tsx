import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import name from "../composants/composants1";

export const metadata = {
  title: 'portfolio',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.description}>
          <h1 className={styles.darkred}>
            {name()} studio
          </h1>
          <div className={styles.flex}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        {children}
        </main>
        </body>
    </html>
  )
}

const inter = Inter({ subsets: ["latin"] });
