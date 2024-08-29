import contacts from "@/data/contact";
import { IContact } from "@/common/interfaces";
import ImageLink from "../ImageLink";

import "./index.scss";

const Contact = ({ size }: IContact) => {
  return (
    <div className="contactsCcontainer">
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
