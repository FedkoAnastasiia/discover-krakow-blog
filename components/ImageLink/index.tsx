import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IContact, IImageLink } from "@/common/interfaces";

import "./index.scss";

const ImageLink = (props: IImageLink & IContact) => {
  const Icon: React.ElementType = props.image;
  return (
    <Link href={props.href}>
      <div
        className="contactImage"
        style={{ width: props.size, height: props.size }}>
        <Icon />
      </div>
    </Link>
  );
};

export default ImageLink;
