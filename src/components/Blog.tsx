import Image from "next/image";
import { BlogPostDTO } from "../type/dto";

interface IBlogprops {
  blog: BlogPostDTO;
}

const Blog = async ({ blog }: IBlogprops) => {
  const thumbnailUrl = blog.attributes.Thumbnail.data.attributes.url;
  return (
    <div>
      <img src={`${process.env.STRAPI_BASE_URL}${thumbnailUrl}`} />
      <h1>{blog.attributes.blog}</h1>
      <span>{blog.attributes.description}</span>
    </div>
  );
};

export default Blog;
