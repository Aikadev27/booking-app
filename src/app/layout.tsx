"use client";

// aos scroll view
import AOS from "aos";
import "aos/dist/aos.css";
import ReduxProvider from "@/redux/provider";

// import font awesome icon
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// global style
import "@/styles/globals.css";

// import { Metadata } from "next";
import { Inter } from "next/font/google";
import { metadata } from "@/utils/metadata";

// toastify
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// material
import { ThemeProvider } from "@material-tailwind/react";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          console.log(
            "Service worker registered successfully. Scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service worker registration failed:", error);
        });
    }
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <ReduxProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          {/* <link rel="manifest" href={`${metadata.manifest}`} /> */}
          <link rel="icon" href={`${metadata.icons}`} />
          <meta name="theme-color" content={`${metadata.themeColor}`} />
          <meta name="description" content={`${metadata.description}`} />
          <title>{`${metadata.title}`}</title>
        </head>
        <ThemeProvider>
          <body className={inter.className}>
            <div className="font-Poppins">{props.children}</div>
            <ToastContainer />
          </body>
        </ThemeProvider>
      </html>
    </ReduxProvider>
  );
}
