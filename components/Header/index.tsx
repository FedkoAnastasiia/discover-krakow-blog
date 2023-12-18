import Image from "next/image";
import { Ubuntu } from "next/font/google";
import Logo from "@/data/icons/logo_krakow.svg";
import Navigation from "../Navigation";
import styles from "./Header.module.css";
import Link from "next/link";

const ubuntu = Ubuntu({ weight: "500", subsets: ["latin"] });

const Header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.imageContainer} href={"/"}>
        <Logo />
        <div className={ubuntu.className}>Discover Kraków</div>
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
