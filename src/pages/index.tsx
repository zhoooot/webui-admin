"use client;";

import { Inter } from "next/font/google";
import UserStats from "./dashboard/components/user-stats";
import QuizStats from "./dashboard/components/quiz-stats";
import NewReportPanel from "./dashboard/components/new-report-panel";
import PrefShortcut from "./dashboard/components/preference-shortcut";

const inter = Inter({ subsets: ["latin"] });

export default function () {
  return (
    <div>
      <div className="m-2">
        <UserStats></UserStats>
      </div>
      <div className="flex flex-row [&>*]:m-2">
        <QuizStats></QuizStats>
        <NewReportPanel></NewReportPanel>
        <PrefShortcut></PrefShortcut>
      </div>
    </div>
  );
}
