import { PostDetailsResponse } from "@/types/post.id";
import "server-only";

export async function getPostDetails(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/id/${id}`);
  const data = await response.json();
  return data as PostDetailsResponse;
}