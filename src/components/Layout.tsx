import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-slate-400">{children}</main>
    </div>
  );
};

export default Layout;
