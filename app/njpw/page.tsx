import { BlogPostDTO } from "@/src/type/dto";
import { fetchBlogs } from "../actions/fetchblog";
import filterByPromotion from "@/src/utlis/filterByPromotion";
import Blog from "@/src/components/Blog";

export default async function njpw() {
  const blogs = await fetchBlogs();
  const njpwPosts: BlogPostDTO[] = filterByPromotion(blogs, "njpw");
  const sortedBlogs = njpwPosts.sort(
    (a: BlogPostDTO, b: BlogPostDTO) => b.id - a.id
  );

  return (
    <div className="container mx-auto flex items-center flex-col ">
      <div className="inline-flex items-center justify-center w-full ">
        <hr className="max-w-96 w-96 h-px my-8 bg-gray-500 border-2 dark:bg-gray-700" />
        <h1 className="flex justify-self-center uppercase font-bold  text-6xl text-white  dark:text-white dark:bg-gray-900 ">
          njpw new
        </h1>
        <hr className="max-w-96 w-96 h-px my-8 bg-gray-500 border-2 dark:bg-gray-700" />
      </div>
      <div className="flex item-center flex-wrap justify-center ">
        {sortedBlogs?.map((blog: BlogPostDTO) => (
          <div className="flex-row mx-4 justify-around my-5">
            <Blog key={blog.id} blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
