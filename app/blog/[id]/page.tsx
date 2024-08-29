import Image from "next/image";
import Link from "next/link";

import { NotFound } from "@/components/InfoBlock";
import posts from "@/data/posts";

import "./page.scss";

const Post = async (props: { params: { id: string } }) => {
  const post = Array.from(posts).find((p) => p.id === props.params.id);
  if (!post) return <NotFound />;

  const date = new Date(post.created);

  return (
    <div className="postContainer">
      <h1> {post.title}</h1>
      <h6 className="postDate">{`${date.getUTCDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`}</h6>
      <div className="descriptionWrapper">
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
      <div className="tagsList">
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
