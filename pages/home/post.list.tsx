import { PostCard } from "@/components/post-card";
import { SanitizedPost } from "./sanitizer";
import { use } from "react";
import { PostPagination } from "./post.pagination";
import { PostFilters } from "./post.filters";
import { PostEmpty } from "./post.empty";

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
  const { posts, pagination } = use(fetchPosts);

  const PostContent =
    posts.length > 0 ? (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <PostPagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      </>
    ) : (
      <PostEmpty />
    );

  return (
    <section className="flex flex-col gap-y-8 w-ful">
      <PostFilters />
      {PostContent}
    </section>
  );
}
