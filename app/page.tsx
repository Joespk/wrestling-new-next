import { BlogPostDTO } from "@/src/type/dto";
import { fetchBlogs } from "./actions/fetchblog";
import Blog from "@/src/components/Blog";

export default async function Home() {
  const blogs = await fetchBlogs();
  const sortedBlogs = blogs.sort(
    (a: BlogPostDTO, b: BlogPostDTO) => b.id - a.id
  );

  return (
    <div>
      hello word
      {sortedBlogs?.map((blog: BlogPostDTO) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
