import Link from "next/link";

import navigation from "@/data/navigation";
import ThemeButton from "../ThemeButton";

import "./index.scss";

const Navigation = () => {
  return (
    <div className="navigationContainer">
      {navigation.map((n, nIndex) => (
        <Link key={`${nIndex}_${n.title}`} href={n.href}>
          {n.title}
        </Link>
      ))}
      <ThemeButton />
    </div>
  );
};

export default Navigation;
