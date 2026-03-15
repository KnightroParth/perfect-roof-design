import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <div id="top" />
    <Navbar />
    <main className="flex-1 pt-20 md:pt-24">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
