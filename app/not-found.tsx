"use client";

import { useEffect } from "react";
import Error from "next/error";
import Link from "next/link";
import styles from "./not-found.module.css";

const NotFound = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
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
          <button onClick={() => reset()}> try again</button>
        </h4>
      </div>
    </div>
  );
};

export default NotFound;
