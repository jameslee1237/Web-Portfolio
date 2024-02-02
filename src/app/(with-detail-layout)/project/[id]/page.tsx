import React from 'react';
import { projectDetails } from '@/constants';

export default function ProjectDetailPage({ 
    params 
}: {
    params: {
        id: string;
    }
}) {
    const title = projectDetails.find((t) => t.id === params.id)?.title;
    const description = projectDetails.find((t) => t.id === params.id)?.description;

    return (
        <div className="text-center">
            <div className="text-white text-4xl font-bold mt-16 mb-8">
                <h1>{title}</h1>
            </div>
            <div className="text-white text-[20px]">
                <p>{description}</p>
            </div>
        </div>
        
    )
}