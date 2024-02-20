import React from 'react';
import { useRouter } from 'next/navigation';

const ProjectCard = ({
    project,
}: {
    project: {
        id: string;
        image: string;
        start_date: string;
    }
}) => {
    const router = useRouter();
    
    const handleClick = () => {
        router.push(`/project/${project.id}`)
    }

    return (
        <div className="flex items-center" onClick={handleClick}>
            <div className="relative w-[300px] h-[200px] bg-[#fbfbcb] rounded-md cursor-pointer hover:-translate-y-6 transition-all duration-200 flex justify-center">
                <div className="absolute top-1/3 left-0 right-0 border-t border-black">
                    <p className="absolute left-2 text-6px text-black font-bold">Start date</p>
                    <p className="absolute left-2 top-4 text-10px font-bold text-black">{project.start_date}</p>
                </div>
                <div className="absolute top-3 left-4">
                    <p className="text-15px font-bold text-black">{project.image}</p>
                </div>
            </div>
        </div>
        
    );
    
};

export default ProjectCard;