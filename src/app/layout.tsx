"use client";

import ReduxProvider from "@/redux/provider";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
export const metadata: Metadata = {
  title: "Booking App",
  description: "Hotel booking app by Aikadev",
  manifest: "/manifest.json",
  icons: "/icon.png",
};
// toastify
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// material
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
  return (
    <ReduxProvider>
      <html lang="en">
        <link rel="manifest" href="/manifest.json" />
        <ThemeProvider>
          <body className={inter.className}>
            <div className="">{props.children}</div>
            <ToastContainer />
          </body>
        </ThemeProvider>
      </html>
    </ReduxProvider>
  );
}
