import Image from "next/image";
import { Ubuntu } from "next/font/google";
import Link from "next/link";

import Logo from "@/data/icons/logo_krakow.svg";
import Navigation from "../Navigation";

import "./index.scss";

const ubuntu = Ubuntu({ weight: "500", subsets: ["latin"] });

const Header = () => {
  return (
    <div className="headerContainer">
      <Link className="imageContainer" href={"/"}>
        <Logo />
        <div className={ubuntu.className}>Discover Kraków</div>
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
