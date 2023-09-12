"use client";
import ReduxProvider from "@/redux/provider";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Booking App",
  description: "Hotel booking app by Aikadev",
};

const inter = Inter({ subsets: ["latin"] });
export interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="">
            {/* <ReduxProvider>{props.children}</ReduxProvider> */}

            {props.children}
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
