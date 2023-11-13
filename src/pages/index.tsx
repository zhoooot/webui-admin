'use client;'

import Image from "next/image";
import { Inter } from "next/font/google";
import SideBar from "./components/sidebar";
import IndexPage from "./components/charts/user-chart";

const inter = Inter({ subsets: ["latin"] });

export default function () {
  return (
    <div>
      <SideBar></SideBar>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <IndexPage></IndexPage>
        </div>
      </div>
    </div>
  );
}
