import { BlogPostDTO } from "../type/dto";

interface IBlogprops {
  blog: BlogPostDTO;
}

const Newblog = ({ blog }: IBlogprops) => {
  const thumbnailUrl = blog.attributes.Thumbnail.data.attributes.url;
  return (
    <div>
      <img
        src={`${process.env.STRAPI_BASE_URL}${thumbnailUrl}`}
        alt="Left Image"
        className="max-w-[640px] h-auto aspect-w-16 aspect-h-9 "
      />
      <h1 className="inline-block text-2xl relative p-1 rounded-md top-[-80px] mx-2 text-white font-semibold bg-yellow-600 ">
        {blog.attributes.blog}
      </h1>
    </div>
  );
};

export default Newblog;
