import { BlogPostDTO } from "../type/dto";

interface IBlogprops {
  blog: BlogPostDTO;
}

const Newblogtopright = ({ blog }: IBlogprops) => {
  const thumbnailUrl = blog.attributes.Thumbnail.data.attributes.url;
  return (
    <div className="flex flex-col">
      <div>
        <img
          src={`${process.env.STRAPI_BASE_URL}${thumbnailUrl}`}
          alt="Right Image 1"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Newblogtopright;
