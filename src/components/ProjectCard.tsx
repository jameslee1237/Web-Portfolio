import React from 'react';
import { useRouter } from 'next/navigation';

const ProjectCard = ({
    project,
}: {
    project: {
        id: string;
        image: string;
    }
}) => {
    const router = useRouter();
    
    const handleClick = () => {
        router.push(`/project/${project.id}`)
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-[300px] h-[200px] bg-[#ebebb0] rounded-md cursor-pointer hover:-translate-y-6 transition-all duration-200 flex justify-center items-center">
                <div className="transform relative">
                    <h1 className="text-[20px] font-bold text-black text-center">
                        <button onClick={handleClick}>{project.image}</button>
                    </h1>
                </div>
            </div>
        </div>
    );
    
};

export default ProjectCard;