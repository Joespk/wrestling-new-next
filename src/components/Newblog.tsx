import { BlogPostDTO } from "../type/dto";

interface IBlogprops {
  blog: BlogPostDTO;
}

const Newblog = ({ blog }: IBlogprops) => {
  const thumbnailUrl = blog.attributes.Thumbnail.data.attributes.url;
  return (
    <div className="flex mx-0 my-0 flex-col relative">
      <img
        src={`${process.env.STRAPI_BASE_URL}${thumbnailUrl}`}
        alt="Left Image"
        className="h-[360px] z-0 w-[480px]"
      />
      <div className="absolute inset-0 flex items-end justify-center my-8">
        <h1 className="inline-block text-2xl px-1 rounded-md  mx-2 text-white font-semibold border-l-8 border-solid border-yellow-600 z-10 brightness-125">
          {blog.attributes.blog}
        </h1>
      </div>
    </div>
  );
};

export default Newblog;
