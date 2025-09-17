"use server";

import { getAllPosts } from "@/services/get-all-posts";
import { sanitizePostsList } from "../../sanitizers/post-list";
import type { PostListResponse } from "@/types/post.list";
import { getPostsByCategory } from "@/services/get-posts-by-category";
import { getPostsByTag } from "@/services/get-posts-by-tag";

type GetPostsActionParams = {
  page?: number;
  tag?: string;
  category?: string;
};

export async function getPostsAction(params: GetPostsActionParams) {
  try {
    const response: PostListResponse = await handleResponse(params);

    if ("error" in response) {
      throw new Error("Error ao carregar as postagens", {
        cause: response.error,
      });
    }

    const sanitizedPosts = sanitizePostsList(response.posts);

    return {
      posts: sanitizedPosts,
      pagination: {
        currentPage: response.pagination.currentPage,
        totalPages: response.pagination.totalPages,
      },
      cause: null,
    }
  } catch (error: unknown) {
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
      },
      cause: (error as Error).cause as string,
    }
  }
}

function handleResponse(params: GetPostsActionParams) {
  if (params.tag) {
    return getPostsByTag({ page: params.page, tag: params.tag });
  }
  if (params.category) {
    return getPostsByCategory({ page: params.page, category: params.category });
  }
  return getAllPosts({ page: params.page });
}