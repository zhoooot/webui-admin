import React from 'react';
import Image from 'next/image';

export interface ViolationReportProps {
    title: string;
    details: string;
    author: string;
    appeal?: boolean;
}

const ViolationReport: React.FC<ViolationReportProps> = ({title, details, author}) => {
    return (
        <div className="rounded-3xl flex flex-row h-42 w-full">
            <div className="flex rounded-s-3xl bg-gray-300 w-1/6 relative overflow-clip">
                <Image className='absolute top-0 left-0 w-full h-full' src="/winter.png" alt='image' layout='fill' objectFit='cover' />
            </div>

            <div className="flex flex-col justify-between p-2 bg-purple-300 w-4/6">
                <h1 className="text-2xl">{title}</h1>
                <p className="text-lg">{details}</p>
                <div className="flex flex-row gap-2">
                    <Image src="/avatar.png" width={20} height={20} alt='user avatar' />
                    <p className="text-sm opacity-75">{author}</p>
                </div> 
            </div>

            <div className='flex flex-row rounded-e-3xl items-end w-1/6 p-2 gap-2 bg-purple-300'>
                <button className='bg-green-300 hover:bg-green-500 rounded-xl p-1 w-1/2'>Permit</button>
                <button className='bg-red-300 hover:bg-red-500 rounded-xl p-1 w-1/2'>Ban</button>
            </div>
        </div>
    )
}

export default ViolationReport;