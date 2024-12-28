import Card from "@/src/components/ui/Card";
import Container from "@/src/components/ui/Container";
import getRecentPosts from "@/src/services/RecentPosts";
import { IPost } from "@/src/types";
import Link from "next/link";

const RecentPost = async () => {
  const { data: posts } = await getRecentPosts();
  console.log(posts);
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4 dark:text-white text-center">
        Recent Posts
      </h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300 text-center">
        Check out our latest posts below:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post: IPost) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Link href={"/found-items"}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
            See All Posts
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default RecentPost;
