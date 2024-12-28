const Layout = ({
  children,
  recentPosts,
}: {
  children: React.ReactNode;
  recentPosts: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      {recentPosts}
    </div>
  );
};

export default Layout;
