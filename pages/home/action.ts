"use server";

import { getAllPosts } from "@/services/get-all-posts";
import { sanitizePostsList } from "./sanitizer";
import type { PostListResponse } from "@/types/post.list";
import { getPostsByCategory } from "@/services/get-posts-by-category";

type GetPostsActionParams = {
  page?: number;
  q?: string;
  category?: string;
};

export async function getPostsAction(params: GetPostsActionParams) {
  const { page, q, category } = params;

  let response: PostListResponse

  if (category) {
    response = await getPostsByCategory({ page, q, category });
  } else {
    response = await getAllPosts({ page, q });
  }


  const sanitizedPosts = sanitizePostsList(response.posts);

  return {
    posts: sanitizedPosts,
    pagination: {
      currentPage: response.pagination.currentPage,
      totalPages: response.pagination.totalPages,
    },
  }
}

