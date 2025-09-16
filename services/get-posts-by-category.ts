import { POST_LIMIT, POST_REVALIDATE_TIME, POST_TAG } from "@/constants/posts";
import type { PostListResponse } from "@/types/post.list";

type GetPostsByCategoryFilters = {
  category: string;
  page?: number;
  q?: string;
};

export async function getPostsByCategory(filters: GetPostsByCategoryFilters) {
  const { page, q, category } = filters;

  const queryString = new URLSearchParams(`limit=${POST_LIMIT}`);
  if (page) queryString.set("page", page.toString());
  if (q) queryString.set("q", q);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/category/${category}?${queryString}`, {
    next: {
      revalidate: POST_REVALIDATE_TIME,
      tags: [POST_TAG, category],
    }
  });
  const data = await response.json();
  return data as PostListResponse;
}