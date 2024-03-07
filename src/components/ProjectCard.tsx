import React from 'react';
import { useRouter } from 'next/navigation';

const ProjectCard = ({
    project,
}: {
    project: {
        id: string;
        image: string;
        start_date: string;
        brief: string;
        skill: string[];
    }
}) => {
    const router = useRouter();
    
    const handleClick = () => {
        router.push(`/project/${project.id}`)
    }

    return (
        <div className="flex items-center lg:max-w-md" onClick={handleClick}>
            <div className="relative w-[430px] h-[300px] bg-[#fbfbcb] rounded-md cursor-pointer hover:-translate-y-6 transition-all duration-200 flex justify-center">
                <div className="absolute top-1/3 left-0 right-0 border-t border-black">
                    <p className="absolute top-2 left-2 text-[15px] text-black opacity-50">Start date</p>
                    <p className="absolute left-2 top-5 text-[22px] font-bold text-black">{project.start_date}</p>
                    <p className="absolute mt-2 top-12 left-2 text-[18px] text-black">{project.brief}</p>
                </div>
                <div className="absolute bottom-4 left-2">
                    <div className="flex">
                        {project.skill.map((s) => (
                            <div key={s} className="flex bg-green-100 items-center mr-4 px-3 py-1">
                                <img src={`/${s}.png`} alt={s} className="w-6 h-6 mr-2" />
                                <p>{s}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute top-3 left-4">
                    <p className="text-[24px] font-bold text-black">{project.image}</p> 
                </div>
            </div>
        </div>
        
    );
    
};

export default ProjectCard;