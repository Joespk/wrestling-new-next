import { BlogPostDTO } from "@/src/type/dto";
import { fetchBlogs } from "./actions/fetchblog";
import Blog from "@/src/components/Blog";
import Newblog from "@/src/components/Newblog";
import Newblogtopright from "@/src/components/Newblogtopright";

export default async function Home() {
  const blogs = await fetchBlogs();
  const sortedBlogs = blogs.sort(
    (a: BlogPostDTO, b: BlogPostDTO) => b.id - a.id
  );

  return (
    <div className="container mx-auto flex items-center flex-col ">
      <div className="flex max-w-[1024px] my-3">
        {sortedBlogs.slice(0, 1).map((blog: BlogPostDTO) => (
          <Newblog key={blog.id} blog={blog} />
        ))}
        <div className="flex flex-col ">
          {sortedBlogs.slice(1, 2).map((blog: BlogPostDTO) => (
            <Newblogtopright key={blog.id} blog={blog} />
          ))}
          {sortedBlogs.slice(2, 3).map((blog: BlogPostDTO) => (
            <Newblogtopright key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <div className="flex item-center flex-wrap justify-center ">
        {sortedBlogs?.slice(3).map((blog: BlogPostDTO) => (
          <div className="flex-row mx-4 justify-around my-5">
            <Blog key={blog.id} blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
