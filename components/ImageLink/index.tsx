import { IContact, IImageLink } from "@/common/interfaces";
import Image from "next/image";
import Link from "next/link";
import styles from "./ImageLink.module.css";
import React from "react";

const ImageLink = (props: IImageLink & IContact) => {
  const Icon: React.ElementType = props.image;
  return (
    <Link href={props.href}>
      <div
        className={styles.contactImage}
        style={{ width: props.size, height: props.size }}>
        <Icon />
      </div>
    </Link>
  );
};

export default ImageLink;
