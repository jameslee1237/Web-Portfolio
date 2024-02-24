"use client";
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/constants';

const Project = () => {
    return (
        <div className="bg-[#30689f] pt-[4rem] md:pt-[8rem] pb-[12rem] items-center flex flex-col justify-center">
            <h1 className="text-center text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] uppercase mb-[3rem] 
                font-bold text-white">
                Project
            </h1>
            <div className="pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[4rem] gap-y-[4rem]">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Project;