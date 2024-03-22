import ElementDialog from "./ElementDialog";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ElementDialog />
      {children}
    </>
  );
};

export default Layout;
