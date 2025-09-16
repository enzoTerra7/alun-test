import { PostCard } from "@/components/post-card";
import { SanitizedPost } from "./sanitizer";
import { use } from "react";

type PostListProps = {
  fetchPosts: Promise<{
    posts: SanitizedPost[];
    pagination: {
      currentPage: number;
      totalPages: number;
    };
  }>;
};

export function PostList({ fetchPosts }: PostListProps) {
  const { posts } = use(fetchPosts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
