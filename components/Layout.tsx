import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface Props {
  children?: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
