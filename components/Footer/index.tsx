import Link from "next/link";
import styles from "./Footer.module.css";
import Contact from "../Contact";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Contact size={40} />
      <p> ©2023 Anastasiia Fedko</p>
      <Link href={"https://github.com/FedkoAnastasiia/discover-krakow-blog"}>
        GitHub source code
      </Link>
    </div>
  );
};

export default Footer;
