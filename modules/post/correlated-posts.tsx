import { use } from "react";
import { getCorrelatedPostsAction } from "./action";
import { PostCard } from "@/components/post-card";

export function CorrelatedPosts({
  fetchCorrelatedPosts,
}: {
  fetchCorrelatedPosts: ReturnType<typeof getCorrelatedPostsAction>;
}) {
  const { posts } = use(fetchCorrelatedPosts);
  return (
    <section aria-labelledby="Posts relacionados" className="space-y-10">
      <h2 className="text-secondary font-chakra-petch text-2xl font-bold">
        Postagens relacionadas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
