import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/Navbar";

import * as React from "react";

export interface IFullLayoutProps {
  children: React.ReactNode;
}

export default function FullLayout(props: IFullLayoutProps) {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
