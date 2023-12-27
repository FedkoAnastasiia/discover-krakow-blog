import { IPost } from "@/common/interfaces";
import { NotFound } from "@/components/InfoBlock";

import styles from "./Post.module.css";
import Image from "next/image";
import Link from "next/link";

const Post = async (props: { params: { id: string } }) => {
  const posts = await fetch("http://localhost:3000/api/content").then((res) =>
    res.json()
  );

  const post: IPost | undefined = Array.from(posts).find(
    (p) => p.id === props.params.id
  );
  if (!post) return <NotFound />;

  const date = new Date(post.created);

  return (
    <div className={styles.container}>
      <h1> {post.title}</h1>
      <h6 className={styles.postDate}>{`${date.getUTCDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`}</h6>
      <div className={styles.descriptionWrapper}>
        <div> {post.description}</div>
        <Image
          alt={post.id}
          src={post.image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "70%", height: "auto" }}
        />
      </div>
      <div className={styles.tagsList}>
        {post.tags.map((t, tIndex) => (
          <Link key={tIndex} href={`/blog/tag/${t.replace(" ", "_")}`}>
            #{t}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Post;
