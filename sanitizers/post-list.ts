import type { PostListResponse } from "@/types/post.list";

export function sanitizePostsList(posts: PostListResponse["posts"]) {
  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    description: post.content,
    imageUrl: post.imageUrl,
    category: {
      slug: post.category.slug,
      name: post.category.name,
    },
  }));
}

export type SanitizedPost = ReturnType<typeof sanitizePostsList>[number];