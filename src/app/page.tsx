"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Info from "./Info";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <SessionProvider>
        <Info />
      </SessionProvider>
    </main>
  );
}
