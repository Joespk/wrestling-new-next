import { BlogPostDTO } from "@/src/type/dto";
import { fetchBlogs } from "../actions/fetchblog";
import filterByPromotion from "@/src/utlis/filterByPromotion";
import Blog from "@/src/components/Blog";

export default async function tna() {
  const blogs = await fetchBlogs();
  const tnaPosts: BlogPostDTO[] = filterByPromotion(blogs, "tna");
  const sortedBlogs = tnaPosts.sort(
    (a: BlogPostDTO, b: BlogPostDTO) => b.id - a.id
  );

  return (
    <div className="container mx-auto flex items-center flex-col ">
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
