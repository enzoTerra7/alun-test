import "server-only";
import { POST_REVALIDATE_TIME } from "@/constants/posts";
import { POST_LIMIT } from "@/constants/posts";
import { POST_TAG } from "@/constants/posts";
import type { PostListResponse } from "@/types/post.list";

type GetAllPostsFilters = {
  page?: number;
};

export async function getAllPosts(filters: GetAllPostsFilters) {
  const { page } = filters;

  const queryString = new URLSearchParams(`limit=${POST_LIMIT}`);
  if (page) queryString.set("page", page.toString());

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?${queryString}`, {
    next: {
      revalidate: POST_REVALIDATE_TIME,
      tags: [POST_TAG],
    }
  });
  const data = await response.json();
  return data as PostListResponse;
}