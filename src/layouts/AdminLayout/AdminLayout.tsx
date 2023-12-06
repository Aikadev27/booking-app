"use client";

import Footer from "@/components/Footer/Footer";

export interface IAdminLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export default function AdminLayout(props: IAdminLayoutProps) {
  return (
    <>
      <div className="grid grid-cols-11 min-h-screen max-h-full  ">
        <div className="col-span-2 relative">{props.sidebar}</div>
        <div data-aos="fade-up" className="col-span-9 bg-blue-gray-100">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}
