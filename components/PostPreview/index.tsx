import Link from "next/link";
import Image from "next/image";

import "./index.scss";

interface IPostPreview {
  id: string;
  image: string;
  title: string;
  shortDescription: string;
}

const PostPreview = ({ id, image, title, shortDescription }: IPostPreview) => {
  return (
    <div className="postPreviewContainer">
      <Link className="previewContainer" href={`/blog/${id}`}>
        <Image src={image} height={200} width={250} alt={title} />
        <div className="infoBlock">
          <h2>{title}</h2>
          <p>{shortDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
