import { BlogPostDTO, IAllowPromotion } from "@/src/type/dto";
import { fetchBlogs } from "../actions/fetchblog";
import Blog from "@/src/components/Blog";
import filterByPromotion from "@/src/utlis/filterByPromotion";

export default async function wwe() {
  const blogs = await fetchBlogs();
  const wwePosts: BlogPostDTO[] = filterByPromotion(blogs, "wwe");
  const sortedBlogs = wwePosts.sort(
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
