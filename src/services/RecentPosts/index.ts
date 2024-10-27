import envConfig from "@/src/config/envConfig";

const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.base_api}/items?sortBy=-createdAt&limit=8`
  );
  return await res.json();
};

export default getRecentPosts;
