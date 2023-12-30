import React, { useState } from 'react';
import ViolationReportContainer from './components/new_container';
import AppealReportContainer from './components/appeal_container';

export const ViolationList = [
    {
        title: 'Test Title',
        details: 'Test Details',
        author: 'Test Author',
        appeal: true
    },
    {
        title: 'Test Title 2',
        details: 'Test Details 2',
        author: 'Test Author 2',
        appeal: true
    },
    {
        title: 'Test Title 3',
        details: 'Test Details 3',
        author: 'Test Author 3',
        appeal: true
    },
    {
        title: 'Test Title 4',
        details: 'Test Details 4',
        author: 'Test Author 4',
        appeal: false
    },
    {
        title: 'Test Title 5',
        details: 'Test Details 5',
        author: 'Test Author 5',
        appeal: true
    },
    {
        title: 'Test Title 6',
        details: 'Test Details 6',
        author: 'Test Author 6',
        appeal: false
    },
]

const Violation = () => {
    return (

        <div className="flex flex-col h-screen bg-gray-100">
            <div role="tablist" className="tabs tabs-lifted w-full h-full">
                <input type="radio" name="my_tabs_2" role="tab" className="tab [--tab-bg:lightblue]" onChange={() => {}} aria-label="New" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <ViolationReportContainer List={ViolationList}/>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab [--tab-bg:lightblue]" onChange={() => {}} aria-label="Appeal" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <AppealReportContainer List={ViolationList}/>
                </div>
            </div>
        </div>
    )
}

export default Violation;