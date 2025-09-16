import type { PostListResponse } from "@/types/post.list";

type GetPostsByCategoryFilters = {
  category: string;
  page?: number;
  q?: string;
};

export async function getPostsByCategory(filters: GetPostsByCategoryFilters) {
  const { page, q, category } = filters;

  const queryString = new URLSearchParams("limit=6");
  if (page) queryString.set("page", page.toString());
  if (q) queryString.set("q", q);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/category/${category}?${queryString}`, {
    next: {
      revalidate: 60,
      tags: ["posts", category],
    }
  });
  const data = await response.json();
  return data as PostListResponse;
}