import contacts from "@/data/contact";
import { IContact } from "@/common/interfaces";
import styles from "./Contact.module.css";
import ImageLink from "../ImageLink";

const Contact = ({ size }: IContact) => {
  return (
    <div className={styles.container}>
      {contacts.map((c, cIndex) => (
        <ImageLink
          key={cIndex}
          size={size}
          href={c.href}
          alt={c.alt}
          image={c.image}
        />
      ))}
    </div>
  );
};

export default Contact;
