import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "../interfaces/Layout";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
