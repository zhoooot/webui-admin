import React, { useState } from 'react';
import ViolationReportContainer from './components/new_container';
import AppealReportContainer from './components/appeal_container';
import { ViolationList } from './test_data/data';

const Violation = () => {
    const [activeTab, setActiveTab] = useState("New");

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div role="tablist" className="tabs tabs-lifted w-full h-full">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className={`tab [--tab-bg:lightblue]`}
                    onChange={() => setActiveTab("New")}
                    aria-label="New"
                    checked={activeTab === "New"}
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6" >
                    <ViolationReportContainer List={ViolationList} />
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className={`tab [--tab-bg:lightblue]`}
                    onChange={() => setActiveTab("Appeal")}
                    aria-label="Appeal"
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <AppealReportContainer List={ViolationList} />
                </div>
            </div>
        </div>
    );
};

export default Violation;
