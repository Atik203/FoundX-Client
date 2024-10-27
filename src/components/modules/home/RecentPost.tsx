import getRecentPosts from "@/src/services/RecentPosts";
import Link from "next/link";
import Container from "../../ui/Container";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white dark:bg-gray-800 rounded-lg p-4"
          >
            <h2 className="text-lg font-semibold dark:text-white">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
            <Link href={`/found-items/${post._id}`}>
              <p className="text-blue-500 dark:text-blue-400 hover:underline">
                Read More
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
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
