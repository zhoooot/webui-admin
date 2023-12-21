import React from 'react';
import ViolationReportContainer from './components/container';

export const ViolationList = [
    {
        title: 'Test Title',
        details: 'Test Details',
        author: 'Test Author'
    },
    {
        title: 'Test Title 2',
        details: 'Test Details 2',
        author: 'Test Author 2'
    },
    {
        title: 'Test Title 3',
        details: 'Test Details 3',
        author: 'Test Author 3'
    },
    {
        title: 'Test Title 4',
        details: 'Test Details 4',
        author: 'Test Author 4'
    },
    {
        title: 'Test Title 5',
        details: 'Test Details 5',
        author: 'Test Author 5'
    },
]

const Violation = () => {

    return (
        <div className=''>
            <ViolationReportContainer ViolationsList={ViolationList} />
        </div>
    )
}

export default Violation;