import type { PostDetailsResponse } from "@/types/post.id";
import { sanitizePostsList } from "./post-list";

export function sanitizePostDetails(post: PostDetailsResponse["post"]) {
  return {
    id: post.id,
    title: post.title,
    description: post.content,
    imageUrl: post.imageUrl,
    category: post.category.name,
    tags: post.tags.map((tag) => tag.name),
    content: post.content,
  }
}

export type SanitizedPost = ReturnType<typeof sanitizePostsList>[number];