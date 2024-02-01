import React from 'react';

export default function ProjectDetailPage() {
    const ProjectDetail = {
        title: 'Project Title',
        description: 'Project detail'
    }

    return (
        <div className="text-white">
            <h1>{ProjectDetail.title}</h1>
            <p>{ProjectDetail.description}</p>
        </div>
    )
}