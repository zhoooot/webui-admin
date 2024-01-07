import React, { useState } from 'react';
import ViolationReportContainer from './components/new_container';
import AppealReportContainer from './components/appeal_container';
import { ViolationList } from './test_data/data';

const Violation = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState('new');

    return (
        <div className="bg-white p-2 h-[80vh] w-full bg-purple-500 ">
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="default-tab-content" role="tablist">
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'new' ? 'border-purple-500' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                            onClick={() => setActiveTab('new')}
                            type="button"
                            role="tab"
                            aria-controls="new"
                            aria-selected={activeTab === 'new'}
                        >
                            Profile
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'appeal' ? 'border-purple-500' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                            onClick={() => setActiveTab('appeal')}
                            type="button"
                            role="tab"
                            aria-controls="appeal"
                            aria-selected={activeTab === 'appeal'}
                        >
                            Appeal
                        </button>
                    </li>
                </ul>
            </div>
            <div id="default-tab-content">
                <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 h-[60vh] border border-1 border-gray-500 ${activeTab === 'new' ? 'block' : 'hidden'}`} id="new" role="tabpanel" aria-labelledby="new-tab">
                    <ViolationReportContainer List={ViolationList} />
                </div>
                <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 h-[60vh] border border-1 border-gray-500 ${activeTab === 'appeal' ? 'block' : 'hidden'}`} id="appeal" role="tabpanel" aria-labelledby="appeal-tab">
                    <AppealReportContainer List={ViolationList} />
                </div>
            </div>
        </div>
    );
};

export default Violation;

