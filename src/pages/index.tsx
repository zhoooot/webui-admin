"use client;";

import { Inter } from "next/font/google";
import UserStats from "./dashboard/components/user-stats";
import QuizStats from "./dashboard/components/quiz-stats";
import NewReportPanel from "./dashboard/components/new-report-panel";
import PrefShortcut from "./dashboard/components/preference-shortcut";

const inter = Inter({ subsets: ["latin"] });

const Hompage = () => {
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

export default Hompage;