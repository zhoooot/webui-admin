"use client;";

import { Inter } from "next/font/google";
import UserStats from "./components/user-stats";
import QuizStats from "./components/quiz-stats";
import NewReportPanel from "./components/new-report-panel";
import PrefShortcut from "./components/preference-shortcut";

const inter = Inter({ subsets: ["latin"] });

export default function () {
  return (
    <div>
      <div className="m-2">
        <UserStats></UserStats>
      </div>
      <div className="grid grid-flow-row [&>*]:m-2 w-full justify-items-stretch">
        <QuizStats></QuizStats>
        <div className="grid grid-cols-2 gap-4">
          <NewReportPanel></NewReportPanel>
          <PrefShortcut></PrefShortcut>
        </div>
      </div>
    </div>
  );
}
