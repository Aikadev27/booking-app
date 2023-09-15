"use client";
import ReduxProvider from "@/redux/provider";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
export const metadata: Metadata = {
  title: "Booking App",
  description: "Hotel booking app by Aikadev",
};
// toastify
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });
export interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="">{props.children}</div>
          <ToastContainer />
        </body>
      </html>
    </ReduxProvider>
  );
}
