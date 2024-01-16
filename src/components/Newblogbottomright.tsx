import { BlogPostDTO } from "../type/dto";

interface IBlogprops {
  blog: BlogPostDTO;
}

const Newblogbottomright = ({ blog }: IBlogprops) => {
  const thumbnailUrl = blog.attributes.Thumbnail.data.attributes.url;
  return (
    <div className="flex flex-col">
      <div>
        <img
          src={`${process.env.STRAPI_BASE_URL}${thumbnailUrl}`}
          alt="Right Image 1"
          className="aspect-w-16 aspect-h-9"
        />
      </div>
    </div>
  );
};

export default Newblogbottomright;
