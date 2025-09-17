import { use } from "react";
import { getPostDetailsAction } from "./action";
import { PostMainDetails } from "./post.main-details";
import { PostContentText } from "./post.text";

export function PostContent({
  fetchPostDetails,
}: {
  fetchPostDetails: ReturnType<typeof getPostDetailsAction>;
}) {
  const { post } = use(fetchPostDetails);
  return (
    <article className="space-y-16">
      <PostMainDetails
        imageUrl={post.imageUrl}
        title={post.title}
        category={post.category}
        tags={post.tags}
      />
      <PostContentText content={post.content} />
    </article>
  );
}
