import { Suspense } from "react";
import { getPostsAction } from "./action";
import { PostList } from "./post.list";
import { PostsFallback } from "./posts.fallback";
import { HomePageFooter } from "./footer";
import { Hero } from "./hero";

export async function Home({ searchParams }: PageProps<"/">) {
  const params = await searchParams;

  const page = params.page ? parseInt(params.page as string) : 1;
  const tag = params.tag as string | undefined;
  const category = params.category as string | undefined;

  const fetchPosts = getPostsAction({ page, tag, category });

  return (
    <div>
      <Hero />
      {/* <section className="hero-bg"></section> */}
      <Suspense fallback={<PostsFallback />}>
        <PostList fetchPosts={fetchPosts} />
      </Suspense>
      <HomePageFooter />
    </div>
  );
}
