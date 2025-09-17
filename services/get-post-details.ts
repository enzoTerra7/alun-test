import { API_URL } from "@/constants/api";
import { POST_REVALIDATE_TIME, POST_DETAILS_TAG } from "@/constants/posts";
import { PostDetailsResponse } from "@/types/post.id";
import "server-only";

export async function getPostDetails(id: string) {
  const response = await fetch(`${API_URL}/posts/id/${id}`, {
    next: {
      revalidate: POST_REVALIDATE_TIME,
      tags: [POST_DETAILS_TAG],
    }
  });
  const data = await response.json();
  return data as PostDetailsResponse;
}