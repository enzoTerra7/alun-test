import type { PostListResponse } from "@/types/post.list";
import "server-only";

type GetAllPostsFilters = {
  page?: number;
  q?: string;
};

export async function getAllPosts(filters: GetAllPostsFilters) {
  const { page, q } = filters;

  const queryString = new URLSearchParams("limit=6");
  if (page) queryString.set("page", page.toString());
  if (q) queryString.set("q", q);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?${queryString}`, {
    next: {
      revalidate: 60,
      tags: ["posts"],
    }
  });
  const data = await response.json();
  return data as PostListResponse;
}