"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import ExpCard from "./ExpCard";
import { experiences } from "@/constants";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul>
          <li>Node.js</li>
          <li>React</li>
          <li>MySQL</li>
          <li>Typescript</li>
          <li>CSS</li>
        </ul>
      ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul>
            <li>Universit College London</li>
          </ul>
        ),
    },
]

const About = () => {
    const [tab, setTab] = useState<string>("skills");

    const handleTabChange = (id: string) => {
        setTab(id);
    }
    
    return (
        <div className="bg-[#2c7092] pb-[8rem] pt-[4rem] md:pt-[8rem]">
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-start">
                <div className="mb-[3rem]">
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        ABOUT ME
                    </h1>
                    <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                        Some <span className="text-yellow-400">Text</span>
                    </h2>
                    <p className="text-[19px] text-slate-300 md:text-lg mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div>
                        <div>
                        {TAB_DATA.map((tabItem) => (
                            <TabButton 
                             key={tabItem.id}
                             selectTab={() => handleTabChange(tabItem.id)}
                             active={tab === tabItem.id}
                            >
                                {tabItem.title}
                            </TabButton>
                        ))}       
                        </div>
                        <div className="mt-4 text-white">
                            {TAB_DATA.find((t) => t.id === tab)?.content}
                        </div>
                    </div>
                </div>
                <div className="lg:w-[700px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                    <h1 className="text-[30px] md:text-[40px] mb-4 text-white font-bold text-center">
                        Experience
                    </h1>
                    <div className="flex flex-col items-center"> 
                        {experiences.map((experience) => (
                            <ExpCard key={experience.id} experience={experience}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;