import { useState } from "react";
import UserChart from "./charts/user-chart";

enum TIME {
  THIS_WEEK,
  THIS_MONTH,
  LAST_THREE_MONTHS,
  LAST_SIX_MONTHS,
}

const UserStats = () => {
  const [timeState, setTimeState] = useState(TIME.THIS_WEEK);

  const getTimeLabel = (): string => {
    switch (timeState) {
      case TIME.THIS_WEEK:
        return "Last 7 days";
      case TIME.THIS_MONTH:
        return "Last 30 days";
      case TIME.LAST_THREE_MONTHS:
        return "Last 3 months";
      case TIME.LAST_SIX_MONTHS:
        return "Last 6 months";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white h-min p-12 rounded-lg">
      <div className="flex flex-row">
        <div>
          <text className="text-5xl text-black">3000</text>
          <br></br>
          <text className=" text-purple-500">New User</text>
        </div>
        <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
          <button
            id="hs-dropdown"
            type="button"
            className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            {getTimeLabel()}
            <svg
              className="hs-dropdown-open:rotate-180 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
            aria-labelledby="hs-dropdown"
          >
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
              href="#"
              onClick={() => setTimeState(TIME.THIS_WEEK)}
            >
              Last 7 days
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
              href="#"
              onClick={() => setTimeState(TIME.THIS_MONTH)}
            >
              Last 30 days
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
              href="#"
              onClick={() => setTimeState(TIME.LAST_THREE_MONTHS)}
            >
              Last 3 months
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
              href="#"
              onClick={() => setTimeState(TIME.LAST_SIX_MONTHS)}
            >
              Last 6 months
            </a>
          </div>
        </div>
      </div>
      <div>
        <UserChart></UserChart>
      </div>
    </div>
  );
};

export default UserStats;
