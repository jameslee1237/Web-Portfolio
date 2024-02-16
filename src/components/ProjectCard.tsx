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
        <div>
            <div className="w-[300px] h-[200px] bg-[#ffd700] rounded-md cursor-pointer hover:-translate-y-6 transition-all duration-200 justify-center">
                <div className="transform relative w-[100%]
                                h-[200px] md:h-[300px]">
                    <h1 className="text-[40px] font-bold text-[#1A5176] text-center">
                        <button onClick={handleClick}>{project.image}</button>
                    </h1>
                </div>   
            </div>
        </div>
    );
};

export default ProjectCard;