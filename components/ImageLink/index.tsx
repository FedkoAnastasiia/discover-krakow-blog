import { IContact, IImageLink } from "@/common/interfaces";
import Image from "next/image";
import Link from "next/link";
import styles from "./ImageLink.module.css";

const ImageLink = (props: IImageLink & IContact) => {
  return (
    <Link href={props.href}>
      <div
        className={styles.contactImage}
        style={{ width: props.size, height: props.size }}>
        <props.image />
      </div>
    </Link>
  );
};

export default ImageLink;
