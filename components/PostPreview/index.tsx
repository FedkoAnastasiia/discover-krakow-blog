import Link from "next/link";
import styles from "./PostPreview.module.css";
import Image from "next/image";

interface IPostPreview {
  id: string;
  image: string;
  title: string;
  shortDescription: string;
}

const PostPreview = ({ id, image, title, shortDescription }: IPostPreview) => {
  return (
    <div className={styles.container}>
      <Link className={styles.previewContainer} href={`/blog/${id}`}>
        <Image src={image} height={200} width={250} alt={title} />
        <div className={styles.infoBlock}>
          <h2>{title}</h2>
          <p>{shortDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
