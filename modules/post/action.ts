"use server";

import { getPostDetails } from "@/services/get-post-details";
import { sanitizePostDetails } from "../../sanitizers/post-id";
import { getPostsByCategory } from "@/services/get-posts-by-category";
import { sanitizePostsList } from "@/sanitizers/post-list";
import { POST_LIMIT_ARTICLE_VIEW } from "@/constants/posts";

export async function getPostDetailsAction(id: string) {
  const response = await getPostDetails(id);

  const sanitizedPost = sanitizePostDetails(response.post);

  return {
    post: sanitizedPost,
  };
}

export async function getCorrelatedPostsAction(category: string) {
  const response = await getPostsByCategory({ category, limit: POST_LIMIT_ARTICLE_VIEW, page: 1 });

  const sanitizedPosts = sanitizePostsList(response.posts);

  return {
    posts: sanitizedPosts,
  };
}