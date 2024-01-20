import { BlogPostDTO } from "@/src/type/dto";
import axios from "axios";
import { marked } from "marked";

const Page = async ({ params }: { params: { id: number } }) => {
  const blogId = params.id;
  const fetchblog = async (blogId: number) => {
    try {
      const res = await axios.get(
        `${process.env.STRAPI_BASE_URL}/api/blogs/${blogId}?populate=*`
      );
      return res.data.data;
    } catch (err) {
      console.log("error", err);
      return [];
    }
  };
  const blog: BlogPostDTO = await fetchblog(blogId);
  const contentHtml = marked(blog.attributes.Detail);
  const thumbnailUrl = blog.attributes.Thumbnail.data.attributes.url;
  return (
    <div className="container mx-auto flex items-center justify-items-center flex-col w-full bg-white bg-opacity-80 text-center my-10 py-10">
      <h1 className="inline-block text-4xl px-1 py-2 rounded-md  mx-2  font-bold">
        {blog.attributes.blog}
      </h1>
      <img
        src={`${process.env.STRAPI_BASE_URL}${thumbnailUrl}`}
        alt="image"
        className="py-3 max-w-[780px]"
      />
      <div className="flex items-center justify-start mx-2 font-bold my-3 px-3 border-l-8 border-solid border-yellow-600">
        <span className="text-2xl  font-bold">
          BY&nbsp;{blog.attributes.author.data.attributes.name}
        </span>
        &nbsp;
        <span className="text-xl  font-normal">
          /&nbsp;{blog.attributes.date}
        </span>
      </div>

      <div
        className="flex items-center flex-col w-[60%] font-normal text-start"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
};

export default Page;
