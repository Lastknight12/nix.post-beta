import { notFound } from "next/navigation";
import Post from "~/app/_components/main/Post";
import { api } from "~/trpc/server";

export default async function Tag({ params }: { params: { tag: string } }) {
  const tagName = params.tag;

  const posts = await api.post.getPostsByTag({ tagName: tagName });

  if (posts.length === 0) {
    return notFound();
  }

  return (
    <div>
      <h1 className="font-montserrat text-3xl font-bold">
        All posts by tag: {tagName}
      </h1>

      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}
