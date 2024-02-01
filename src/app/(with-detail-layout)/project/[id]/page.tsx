import React from 'react';

export default function ProjectDetailPage() {
    const ProjectDetail = {
        title: 'Project Title',
        description: 'Project detail'
    }

    return (
        <div className="text-center">
            <div className="text-white text-4xl font-bold mt-16 mb-8">
                <h1>{ProjectDetail.title}</h1>
            </div>
            <div className="text-white text-[20px]">
                <p>{ProjectDetail.description}</p>
            </div>
        </div>
        
    )
}