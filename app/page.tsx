import { BlogPostDTO } from "@/src/type/dto";
import { fetchBlogs } from "./actions/fetchblog";
import Blog from "@/src/components/Blog";

export default async function Home() {
  const blogs = await fetchBlogs();
  const sortedBlogs = blogs.sort(
    (a: BlogPostDTO, b: BlogPostDTO) => b.id - a.id
  );

  return (
    <div className="container mx-auto flex">
      <h1>My Blog</h1>
      {sortedBlogs.slice(0, 3).map((item: BlogPostDTO) => (
        <div key={item.id}>
          {/* แสดงข้อมูลตามที่คุณต้องการ */}
          <h2>{item.attributes.blog}</h2>
        </div>
      ))}

      {sortedBlogs?.slice(3).map((blog: BlogPostDTO) => (
        <div className="flex-col mx-4 justify-around my-5">
          <Blog key={blog.id} blog={blog} />
        </div>
      ))}
    </div>
  );
}
