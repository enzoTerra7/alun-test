"use server";

import { getAllPosts } from "@/services/get-all-posts";
import { sanitizePostsList } from "./sanitizer";
import type { PostListResponse } from "@/types/post.list";
import { getPostsByCategory } from "@/services/get-posts-by-category";
import { getPostsByTag } from "@/services/get-posts-by-tag";

type GetPostsActionParams = {
  page?: number;
  tag?: string;
  category?: string;
};

export async function getPostsAction(params: GetPostsActionParams) {
  const { page, tag, category } = params;

  let response: PostListResponse

  try {
    if (category) {
      response = await getPostsByCategory({ page, category });
    }

    if (tag) {
      response = await getPostsByTag({ page, tag });
    }

    if (!category && !tag) {
      response = await getAllPosts({ page });
    }

    const sanitizedPosts = sanitizePostsList(response!.posts);

    return {
      posts: sanitizedPosts,
      pagination: {
        currentPage: response!.pagination.currentPage,
        totalPages: response!.pagination.totalPages,
      },
    }
  } catch {
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
      },
    }
  }
}

