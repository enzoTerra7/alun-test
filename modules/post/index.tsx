import { Suspense } from "react";
import { getCorrelatedPostsAction, getPostDetailsAction } from "./action";
import { PostContent } from "./post.content";
import { PostContentFallback } from "./post.content.fallback";
import { CorrelatedPosts } from "./correlated-posts";
import { CorrelatedPostsFallback } from "./correlated-posts.fallback";

export async function PostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ category: string }>;
}) {
  const { id } = await params;
  const { category } = await searchParams;
  const fetchPostDetails = getPostDetailsAction(id);
  const fetchCorrelatedPosts = getCorrelatedPostsAction(category);
  return (
    <div className="space-y-9 pt-12 md:pt-[4.5rem] pb-9">
      <Suspense fallback={<PostContentFallback />}>
        <PostContent fetchPostDetails={fetchPostDetails} />
      </Suspense>
      <Suspense fallback={<CorrelatedPostsFallback />}>
        <CorrelatedPosts fetchCorrelatedPosts={fetchCorrelatedPosts} />
      </Suspense>
    </div>
  );
}
