"use client";

import { useEffect } from "react";
import Error from "next/error";
import Link from "next/link";
import styles from "./not-found.module.css";

const NotFound = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1> Whoops!</h1>
        <h4>Page not found</h4>
      </div>

      <div className={styles.header}>
        <h2>Looks like this page went on vacation</h2>
        <h4>
          Try our <Link href={"/"}>homepage</Link> or{" "}
          <Link href={"/about"}> about page</Link>
        </h4>
      </div>
    </div>
  );
};

export default NotFound;
