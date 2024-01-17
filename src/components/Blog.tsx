import { BlogPostDTO } from "../type/dto";
import Link from "next/link";

interface IBlogprops {
  blog: BlogPostDTO;
}

const Blog = async ({ blog }: IBlogprops) => {
  const thumbnailUrl = blog.attributes.Thumbnail.data.attributes.url;
  return (
    <Link href={`blog/${blog.id}`}>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white pb-3 relative">
        <img
          src={`${process.env.STRAPI_BASE_URL}${thumbnailUrl}`}
          width={640}
        />
        <div className="absolute inset-0 flex items-start justify-start mx-5 my-3 ">
          <h4 className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-1 px-3 rounded uppercase">
            {blog.attributes.promotion}
          </h4>
        </div>
        <div className="px-2">
          <h2 className="text-xl font-bold mb-1 line-clamp-2">
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
    </Link>
  );
};

export default Blog;
