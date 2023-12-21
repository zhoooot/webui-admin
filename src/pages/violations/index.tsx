import React, { useState } from 'react';
import ViolationReportContainer from './components/new_container';
import TopBar from './components/top_bar';
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
    const [view, setView] = useState('none');

    return (

        <div className="flex flex-col h-screen bg-gray-100">
            <div className='flex flex-row p-4 gap-2'>
                <button className='bg-purple-300 hover:bg-purple-500 focus:bg-purple-700 rounded-xl p-1 w-1/2' onClick={() => setView('new')}>New</button>
                <button className='bg-purple-300 hover:bg-purple-500 focus:bg-purple-700 rounded-xl p-1 w-1/2' onClick={() => setView('appeal')}>Appeal</button>
            </div>
            {view === 'new' ? <ViolationReportContainer List={ViolationList}/> : null}
            {view === 'appeal' ? <AppealReportContainer List={ViolationList}/> : null}
        </div>
    )
}

export default Violation;