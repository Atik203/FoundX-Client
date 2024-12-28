const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Admin layout</h1>
      {children}
    </div>
  );
};

export default Layout;
