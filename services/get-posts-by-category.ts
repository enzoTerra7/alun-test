import "server-only";
import { POST_LIMIT, POST_REVALIDATE_TIME, POST_TAG } from "@/constants/posts";
import type { PostListResponse } from "@/types/post.list";

type GetPostsByCategoryFilters = {
  category: string;
  page?: number;
  limit?: number;
};

export async function getPostsByCategory(filters: GetPostsByCategoryFilters) {
  const { page, category, limit = POST_LIMIT } = filters;

  const queryString = new URLSearchParams(`limit=${limit}`);
  if (page) queryString.set("page", page.toString());

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/category/${category}?${queryString}`, {
    next: {
      revalidate: POST_REVALIDATE_TIME,
      tags: [POST_TAG, category],
    }
  });
  const data = await response.json();
  return data as PostListResponse;
}