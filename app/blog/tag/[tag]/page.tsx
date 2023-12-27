import BlogPosts from "@/components/BlogPosts";

const FilteredBlog = (props) => {
  return <BlogPosts tag={props.params.tag.replace("_", " ")} />;
};

export default FilteredBlog;
