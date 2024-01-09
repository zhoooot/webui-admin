"use client";
import React, { useEffect, useState } from "react";
import ViolationReportContainer from "./components/new_container";
import AppealReportContainer from "./components/appeal_container";
import { ViolationList } from "./test_data/data";
import axios from "axios";
import { VIO_URL } from "@/config";
import { ViolationReportProps } from "./components/reports";
import { IViolation } from "./interface/IViolation";
import { IVioData } from "./interface/IVioData";

const Violation = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("new");

  const [viodata, setViolations] = useState<IVioData[]>([]);
  const [appealdata, setAppeal] = useState<IVioData[]>([]);

  useEffect(() => {
    console.log("******* Violation data is: ", viodata);
    console.log("******* Appeal data is: ", appealdata);
  }, [viodata, appealdata]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(VIO_URL + "/status/PENDING", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      const violation = res.data.map((vio: IViolation) => {
        return {
          vio_id: vio.vio_id,
          title: vio.quiz_id,
          details: vio.detail,
          author: vio.auth_id,
          appeal: false,
        };
      });
      const res2 = await axios.get(VIO_URL + "/all", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      const appeal = res2.data
        .filter((vio: IViolation) => vio.status != "pending")
        .map((vio: IViolation) => {
          return {
            vio_id: vio.vio_id,
            title: vio.quiz_id,
            details: vio.detail,
            author: vio.auth_id,
            appeal: true,
          };
        });
      console.log("Appeal list is: ", appeal);
      console.log("Violation list is: ", violation);
      setAppeal(appeal);
      console.log(violation);
      setViolations([...violation]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchViolation = async () => {
      const res = await axios.get(VIO_URL + "/status/PENDING", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      const violation = res.data.map((vio: IViolation) => {
        return {
          vio_id: vio.vio_id,
          title: vio.quiz_id,
          details: vio.detail,
        };
      });
    };
    const fetchAppeal = async () => {
      const res2 = await axios.get(VIO_URL + "/all", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      const appeal = res2.data
        .filter((vio: IViolation) => vio.status != "pending")
        .map((vio: IViolation) => {
          return {
            vio_id: vio.vio_id,
            title: vio.quiz_id,
            details: vio.detail,
            author: vio.auth_id,
            appeal: true,
          };
        });
    };

    if (activeTab) {
        fetchViolation();
    }
    else {
        fetchAppeal();
    }
  }, [activeTab]);

  return (
    <div className="bg-white p-2 h-[80vh] w-full bg-purple-500 ">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "new"
                  ? "border-purple-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("new")}
              type="button"
              role="tab"
              aria-controls="new"
              aria-selected={activeTab === "new"}
            >
              New
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "appeal"
                  ? "border-purple-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("appeal")}
              type="button"
              role="tab"
              aria-controls="appeal"
              aria-selected={activeTab === "appeal"}
            >
              Appeal
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 h-[60vh] border border-1 border-gray-500 ${
            activeTab === "new" ? "block" : "hidden"
          }`}
          id="new"
          role="tabpanel"
          aria-labelledby="new-tab"
        >
          <ViolationReportContainer List={viodata} />
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 h-[60vh] border border-1 border-gray-500 ${
            activeTab === "appeal" ? "block" : "hidden"
          }`}
          id="appeal"
          role="tabpanel"
          aria-labelledby="appeal-tab"
        >
          <AppealReportContainer List={appealdata} />
        </div>
      </div>
    </div>
  );
};

export default Violation;
