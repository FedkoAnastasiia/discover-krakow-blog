import Link from "next/link";

import { IPost } from "@/common/interfaces";
import posts from "@/data/posts";
import PostPreview from "../PostPreview";
import { NoPosts } from "../InfoBlock";

import "./index.scss";

const BlogPosts = (props: { tag?: string }) => {
  const filterTag = props.tag;

  const allPosts = posts;

  const tags: Map<string, number> = new Map<string, number>();

  allPosts.forEach((p) => {
    p.tags.forEach((t) => {
      if (tags && tags.has(t)) {
        tags.set(t, (tags.get(t) || 0) + 1);
      } else {
        tags.set(t, 1);
      }
    });
  });

  const filteredPosts = filterTag
    ? allPosts.filter((p) => p.tags.includes(filterTag))
    : [...allPosts];

  return (
    <div className="allPostscontainer">
      <div className="tagsContainer">
        <h3>Tags</h3>
        <div className="tagsList">
          {Array.from(tags, ([tag, count]) => ({ tag, count })).map(
            (t, tIndex) => (
              <Link
                className={t.tag === filterTag ? "selectedTag" : ""}
                key={tIndex}
                href={`/blog/tag/${t.tag.replace(" ", "_")}`}>
                {t.tag} ({t.count})
              </Link>
            )
          )}
          <Link className={filterTag ? "" : "selectedTag"} href={"/blog"}>
            All posts
          </Link>
        </div>
      </div>

      <div className="postsContainer">
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
