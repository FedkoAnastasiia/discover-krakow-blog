import BlogPosts from "@/components/BlogPosts";

const FilteredBlog = (props: { params: { tag: string } }) => {
  return <BlogPosts tag={props.params.tag.replace("_", " ")} />;
};

export default FilteredBlog;
