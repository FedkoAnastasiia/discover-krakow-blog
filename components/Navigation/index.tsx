import Link from "next/link";
import navigation from "@/data/navigation";
import styles from "./Navigation.module.css";
import ThemeButton from "../ThemeButton";

const Navigation = () => {
  return (
    <div className={styles.container}>
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
