import Link from "next/link";

import Contact from "../Contact";

import "./index.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <Contact size={40} />
      <p> ©2024 Anastasiia Fedko</p>
      <Link href={"https://github.com/FedkoAnastasiia/discover-krakow-blog"}>
        GitHub source code
      </Link>
    </div>
  );
};

export default Footer;
