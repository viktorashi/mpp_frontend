import DogDialog from "./ElementDialog";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <DogDialog />
      {children}
    </>
  );
};

export default Layout;
