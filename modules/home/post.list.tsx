import { PostCard } from "@/components/post-card";
import { use } from "react";
import { PostPagination } from "./post.pagination";
import { PostFilters } from "./post.filters";
import { PostEmpty } from "./post.empty";
import { PostError } from "./post.error";
import { getPostsAction } from "./action";

type PostListProps = {
  fetchPosts: ReturnType<typeof getPostsAction>;
};

export function PostList({ fetchPosts }: PostListProps) {
  const { posts, pagination, cause } = use(fetchPosts);

  const PostContent = cause ? (
    <PostError cause={cause} />
  ) : posts.length > 0 ? (
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
