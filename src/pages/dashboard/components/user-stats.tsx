import { useState } from "react";
import UserChart from "./charts/user-chart";
import { time } from "console";

enum TIME {
  THIS_WEEK,
  THIS_MONTH,
  LAST_THREE_MONTHS,
  LAST_SIX_MONTHS,
}

const UserStats = () => {
  const [timeState, setTimeState] = useState(TIME.THIS_WEEK);
  const [user, setUser] = useState(0);

  const getTimeLabel = (time: any): string => {
    switch (time) {
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
    <div className="bg-white h-min p-12 rounded-lg flex-grow">
      <div className="flex flex-row">
        <div className="flex flex-grow flex-col">
          <text className="text-5xl text-black">{user}</text>
          <text className=" text-purple-500">
            New User{user > 1 ? "s" : ""}
          </text>
        </div>
        <details className="dropdown">
          <summary className="m-1 btn">{getTimeLabel(timeState)}</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            { [TIME.THIS_WEEK, TIME.THIS_MONTH, TIME.LAST_THREE_MONTHS, TIME.LAST_SIX_MONTHS].map((time, index) => {
              return (
                <div key={index}>
                <li>
                  <a onClick={() => setTimeState(time)}>{getTimeLabel(time)}</a>
                </li>
                </div>
              );
            })}
          </ul>
        </details>
      </div>
      <div>
        <UserChart></UserChart>
      </div>
    </div>
  );
};

export default UserStats;
