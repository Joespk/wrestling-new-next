import { BlogPostDTO, IAllowPromotion } from "../type/dto";

const filterByPromotion = (
  posts: BlogPostDTO[],
  promotion: IAllowPromotion
): BlogPostDTO[] => {
  return posts.filter((post) => post.attributes.promotion === promotion);
};

export default filterByPromotion;
