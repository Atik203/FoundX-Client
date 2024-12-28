import CardSkeleton from "@/src/components/ui/CardSkeleton";
import Container from "@/src/components/ui/Container";
import Link from "next/link";

const RecentPostLoading = async () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4 dark:text-white text-center">
        Recent Posts
      </h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300 text-center">
        Check out our latest posts below:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <CardSkeleton key={index} />
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

export default RecentPostLoading;
