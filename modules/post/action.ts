"use server";

import { getPostDetails } from "@/services/get-post-details";
import { sanitizePostDetails } from "../../sanitizers/post-id";
import { getPostsByCategory } from "@/services/get-posts-by-category";
import { sanitizePostsList } from "@/sanitizers/post-list";

export async function getPostDetailsAction(id: string) {
  const response = await getPostDetails(id);

  const sanitizedPost = sanitizePostDetails(response.post);

  return {
    post: sanitizedPost,
  };
}

export async function getCorrelatedPostsAction(category: string) {
  const response = await getPostsByCategory({ category, limit: 3, page: 1 });

  const sanitizedPosts = sanitizePostsList(response.posts);

  return {
    posts: sanitizedPosts,
  };
}