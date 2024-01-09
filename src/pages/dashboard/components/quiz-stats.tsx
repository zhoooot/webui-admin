import React, { useEffect, useState } from "react";
import QuizChart from "./charts/quiz-chart";
import IChartData from "../interface/IUserChartData";
import axios from "axios";

enum TIME {
  THIS_WEEK,
  THIS_MONTH,
}

const QuizStats = (): JSX.Element => {
  const [timeState, setTimeState] = useState(TIME.THIS_WEEK);
  const [quiz, setQuiz] = useState(0);
  const [data, setData] = useState<IChartData>(new IChartData([{x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}]));

  const getTimeLabel = (time: any): string => {
    switch (time) {
      case TIME.THIS_WEEK:
        return "Last 7 days";
      case TIME.THIS_MONTH:
        return "Last 30 days";
      default:
        return "";
    }
  };

  useEffect(() => {
    let days = 7;
    const apiURL = "http://localhost:3000/api/stats/quiz/week"
    try {
      axios.get(apiURL).then((res) => {
        let count = 0;
        for (let i = 0; i < res.data.length; i++) {
          const {x, y} = res.data[i];
          count += y;
        }
        setUser(count);
        setData(new IChartData(res.data));
      });
    }
    catch(err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    let days = 0;
    (timeState === TIME.THIS_WEEK) ? days = 7 : days = 30;
    const apiURL = "http://localhost:3000/api/stats/quiz" + (days == 7 ? "/week" : "/month");
    //const apiURL = process.env.NEXT_PUBLIC_API_URL + "/stats/user" + (days == 7 ? "/week" : "/month");
    try {
      axios.get(apiURL).then((res) => {
        let count = 0;
        for (let i = 0; i < res.data.length; i++) {
          const {x, y} = res.data[i];
          count += y;
        }
        setUser(count);
        setData(new IChartData(res.data));
      });
    }
    catch(err) {
      console.log(err);
    }
  }, [timeState]);

  return (
    <div className="bg-white h-min p-12 rounded-lg flex-grow">
      <div className="flex flex-row">
        <div className="flex flex-grow flex-col">
          <text className="text-5xl text-black">{quiz}</text>
          <text className=" text-purple-500">
            New Quiz{quiz > 1 ? "zes" : ""}
          </text>
        </div>
        <details className="dropdown">
          <summary className="m-1 btn">{getTimeLabel(timeState)}</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            {[
              TIME.THIS_WEEK,
              TIME.THIS_MONTH,
            ].map((time, index) => {
              return (
                <div key={index}>
                  <li>
                    <a onClick={() => setTimeState(time)}>
                      {getTimeLabel(time)}
                    </a>
                  </li>
                </div>
              );
            })}
          </ul>
        </details>
      </div>
      <div className="bg-white rounded-lg flex-grow">
        <QuizChart></QuizChart>
      </div>
    </div>
  );
};

export default QuizStats;
function setUser(count: number) {
  throw new Error("Function not implemented.");
}

