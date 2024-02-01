"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/constants';

const Project = () => {
    const router = useRouter();
    // const handleClick = () => {
    //     router.push(`/project/${id}`)
    // }

    return (
        <div className="bg-[#30689f] pt-[4rem] md:pt-[8rem] pb-[12rem]">
            <h1 className="text-center text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] uppercase mb-[3rem] 
                font-bold text-white">
                Project
            </h1>
            <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Project;