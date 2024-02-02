import React from 'react';
import { projectDetails } from '@/constants';

export default function ProjectDetailPage({ 
    params 
}: {
    params: {
        id: string;
    }
}) {
    const ProjectDetail = projectDetails.find((t) => t.id === params.id);

    if (!ProjectDetail) {
        return <div className="text-white text-[40px] text-center font-bold">Project not found</div>
    }

    const { title, description } = ProjectDetail;

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