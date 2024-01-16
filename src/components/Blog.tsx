import { BlogPostDTO } from "../type/dto";
import Link from "next/link";

interface IBlogprops {
  blog: BlogPostDTO;
}

const Blog = async ({ blog }: IBlogprops) => {
  const thumbnailUrl = blog.attributes.Thumbnail.data.attributes.url;
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white ">
      <img src={`${process.env.STRAPI_BASE_URL}${thumbnailUrl}`} width={640} />
      <h4 className="inline-block text-sm relative p-1 rounded-md top-[-200px] mx-2 text-white font-semibold bg-yellow-600 uppercase ">
        {blog.attributes.promotion}
      </h4>
      <div className="p-2">
        <h2 className="text-xl font-bold mb-2 line-clamp-2">
          {blog.attributes.blog}
        </h2>
        <span className="text-gray-600 text-base line-clamp-3 my-2">
          {blog.attributes.description}
        </span>
        <Link
          href={`blog/${blog.id}`}
          className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-1 px-3 rounded "
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Blog;
