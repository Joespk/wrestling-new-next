import Link from "next/link";
import { BlogPostDTO } from "../type/dto";

interface IBlogprops {
  blog: BlogPostDTO;
}

const Newblogtopright = ({ blog }: IBlogprops) => {
  const thumbnailUrl = blog.attributes.Thumbnail.data.attributes.url;
  return (
    <Link href={`blog/${blog.id}`}>
      <div className="flex flex-col mx-0 my-0 relative ">
        <img
          src={`${process.env.STRAPI_BASE_URL}${thumbnailUrl}`}
          alt="Right Image 1"
          className="max-w-full h-[180px] z-0 w-[320px] "
        />
        <div className="absolute inset-0 flex items-end justify-center my-3">
          <h1 className="inline-block text-base px-1 rounded-md  mx-2 text-white font-semibold border-l-8 border-solid border-yellow-600 z-10 subpixel-antialiased brightness-125">
            {blog.attributes.blog}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Newblogtopright;
