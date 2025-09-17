import "server-only";
import { POST_LIMIT, POST_REVALIDATE_TIME, POST_TAG } from "@/constants/posts";
import type { PostListResponse } from "@/types/post.list";
import { API_URL } from "@/constants/api";

type GetPostsByTagFilters = {
  tag: string;
  page?: number;
};

export async function getPostsByTag(filters: GetPostsByTagFilters) {
  const { page, tag } = filters;

  const queryString = new URLSearchParams(`limit=${POST_LIMIT}`);
  if (page) queryString.set("page", page.toString());

  const response = await fetch(`${API_URL}/posts/tags/${tag.toLowerCase()}/?${queryString}`, {
    next: {
      revalidate: POST_REVALIDATE_TIME,
      tags: [POST_TAG, tag],
    }
  });
  const data = await response.json();
  return data as PostListResponse;
}