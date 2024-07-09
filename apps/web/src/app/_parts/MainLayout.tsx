import { Sidebar, Header } from "~/components";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-screen overflow-y-scroll flex flex-col px-6 ">
        <Header />
        <main className="w-full flex flex-col">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
