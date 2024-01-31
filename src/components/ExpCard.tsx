import Link from 'next/link';
import React from 'react';


const ExpCard = ({ 
    experience,
}: {
    experience: {
        id: string;
        title: string;
        summary: string;
    }
}) => {
    return (
        <div className="card">
            <h2>{experience.title}</h2>
            <p>{experience.summary}</p>
            <Link href={`/experience/${experience.id}`}>
                <span>Learn more</span>
            </Link>
        </div>
    );
};

export default ExpCard;