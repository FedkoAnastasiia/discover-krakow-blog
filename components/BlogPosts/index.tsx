import { IPost } from "@/common/interfaces";

import styles from "./BlogPosts.module.css";
import PostPreview from "../PostPreview";
import Link from "next/link";
import { NoPosts } from "../InfoBlock";

const BlogPosts = async (props: { tag?: string }) => {
  const filterTag = props.tag;

  const allPosts: IPost[] = await fetch(
    "http://localhost:3000/api/content"
  ).then((res) => res.json());

  const tags = new Map<string, number>();

  allPosts.forEach((p) => {
    p.tags.forEach((t) => {
      if (tags.has(t)) {
        tags.set(t, tags.get(t) + 1);
      } else {
        tags.set(t, 1);
      }
    });
  });

  const filteredPosts = (
    filterTag
      ? allPosts.filter((p) => p.tags.includes(filterTag))
      : [...allPosts]
  ).sort((a, b) => {
    const d1 = a.created.split("-").join("");
    const d2 = b.created.split("-").join("");
    return a < b ? 1 : a < b ? -1 : 0;
  });

  return (
    <div className={styles.container}>
      <div className={styles.tagsContainer}>
        <h3>Tags</h3>
        <div className={styles.tagsList}>
          {Array.from(tags, ([tag, count]) => ({ tag, count })).map(
            (t, tIndex) => (
              <Link
                className={t.tag === filterTag ? styles.selectedTag : ""}
                key={tIndex}
                href={`/blog/tag/${t.tag.replace(" ", "_")}`}>
                {t.tag} ({t.count})
              </Link>
            )
          )}
          <Link className={filterTag ? "" : styles.selectedTag} href={"/blog"}>
            All posts
          </Link>
        </div>
      </div>

      <div className={styles.postsContainer}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((p) => (
            <PostPreview
              key={p.id}
              id={p.id}
              title={p.title}
              shortDescription={p.preview}
              image={p.image}
            />
          ))
        ) : (
          <NoPosts />
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
