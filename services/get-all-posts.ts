import { POST_REVALIDATE_TIME } from "@/constants/posts";
import { POST_LIMIT } from "@/constants/posts";
import { POST_TAG } from "@/constants/posts";
import type { PostListResponse } from "@/types/post.list";
import "server-only";

type GetAllPostsFilters = {
  page?: number;
  q?: string;
};

export async function getAllPosts(filters: GetAllPostsFilters) {
  const { page, q } = filters;

  const queryString = new URLSearchParams(`limit=${POST_LIMIT}`);
  if (page) queryString.set("page", page.toString());
  if (q) queryString.set("q", q);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?${queryString}`, {
    next: {
      revalidate: POST_REVALIDATE_TIME,
      tags: [POST_TAG],
    }
  });
  const data = await response.json();
  return data as PostListResponse;
}