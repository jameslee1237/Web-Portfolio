"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { useRouter } from "next/navigation";
import { experiences, TAB_DATA, skill_level } from "@/constants";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TerminalIcon from '@mui/icons-material/Terminal';


const About = () => {
    const [tab, setTab] = useState<string>("skills");
    const level = skill_level;
    const router = useRouter();

    const handleClick = (Expid: string) => {
        router.push(`/experience/${Expid}`)
    }

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
                        Navigating <span className="text-yellow-400">Diversity</span>
                    </h2>
                    <p className="md:text-lg text-slate-300 mb-4">
                        My life has been a dynamic journey, encompassing unique experiences across various countries. Being exposed to different cultures
                        has led to a broadened perspective and a deep appreciation for diversity. Each transition has honed my ability to adapt and thrive amidst change,
                        fostering resilience and adaptability within me. Embracing diversity has not only enriched my worldview and broadened my perspectives 
                        but has also empowered me to find strength in unfamiliar situations. Instead of viewing diversity as a challenge, 
                        I perceive it as a wellspring of inspiration, propelling both personal and intellectual growth. 
                    </p>
                </div>
                <div className="lg:w-[700px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                    <h1 className="text-[30px] md:text-[40px] mb-4 text-white font-bold text-center">
                        Experience
                    </h1>
                    <div className="flex flex-col items-center overflow-hidden"> 
                        <VerticalTimeline>
                            {experiences.map((experience) => (
                                <VerticalTimelineElement
                                 key={experience.id}
                                 className="vertical-timeline-element--work"
                                 contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                                 dateClassName="ml-4 mr-4"
                                 contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                 date={experience.date}
                                 iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                 iconClassName="hover:scale-110"
                                 icon={<TerminalIcon />}
                                 iconOnClick={() => handleClick(experience.id)}
                                 visible={true}
                                >
                                    <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                                    <p>
                                        {experience.summary}
                                    </p>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
            <div className="ml-[150px] w-[85%]">
                <div className="text-[20px]">
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
                <div className="text-white mt-4">
                    {TAB_DATA.find((t) => t.id === tab)?.content.map((item, index) => (
                        tab === "skills" ? (
                            index % 2 === 0 ? (
                                <div key={item} className="flex flex-row mb-[1rem]">
                                    <div className="relative mr-4" style={{ width: "600px"}}>
                                        <h1 className="p-3 uppercase w-full bg-gray-800 rounded-sm text-white text-[20px] font-bold overflow-hidden">
                                            {item}
                                        </h1>
                                        <span className="absolute bottom-0 left-0 bg-green-500" style={{ width: level[index], height:"4px"}}></span>
                                    </div>
                                    {TAB_DATA.find((t) => t.id === tab)?.content[index + 1] && (
                                        <div className="relative mr-4" style={{ width: "600px"}}>
                                            <h1 className="p-3 uppercase w-full bg-gray-800 rounded-sm text-white text-[20px] font-bold overflow-hidden">
                                                {TAB_DATA.find((t) => t.id === tab)?.content[index + 1]}
                                            </h1>
                                            <span className="absolute bottom-0 left-0 bg-green-500" style={{ width: level[index + 1], height:"4px"}}></span>
                                        </div>
                                    )}
                                </div>
                            ) : null
                        ) : (
                            <div key={item} className="flex flex-row mb-[1rem] text-[20px] font-bold">
                                <div className="relative mr-4">
                                    <p className="flex">{item}</p>
                                </div>
                            </div>                          
                        )
                    ))}
                </div>
            </div>
        </div>
    )
};

export default About;