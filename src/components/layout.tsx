import Header from "./header";
import Footer from "./footer";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
