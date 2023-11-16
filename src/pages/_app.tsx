"use client;";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import SideBar from "./sidebar";

export default function App({ Component, pageProps }: AppProps) {
  "use client;";
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <div>
      <SideBar></SideBar>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
