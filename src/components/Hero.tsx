"use client";
import React from "react";
import Texteffect from "./Texteffect";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const handleDownloadCV = () => {
    const cvPath = "/CV.pdf";
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const Hero = () => {
    return (
    <div className="h-[88vh] bg-[#438db2] overflow-x-hidden">
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <div>
                <h1 className="text-[40px] md:text-[50px] text-white font-bold">
                    {`HI I'M JAMES`}
                </h1>
                <Texteffect />
                <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                    <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 text-[18px] font-bold uppercase 
                                        bg-[#55e6a5] text-black flex items-center space-x-2"
                            onClick={handleDownloadCV}>
                        <p>Download CV</p><DownloadForOfflineIcon />
                    </button>
                </div>
                    <p className="mt-[2rem] text-[20px] text-[#ffffff92]">
                        Hello, I'm an enthusiastic undergraduate in computer science, well-versed in mathematics, machine learning, web development and software development. 
                        Proficient in multiple programming languages and different development tools,  I have constructed diverse projects, ranging from simple softwares to complex applications.
                        With a collaborative spirit, I thrive in team settings, leveraging collective expertise to drive efficient solutions. 
                        Committed to growth, I eagerly embrace new challenges and emerging technologies to innovate solutions for real-world issues.
                    </p>
            </div>
            <div className="w-[700px] relative">
                <h1 className="text-[30px] md:text-[40px] text-white font-bold text-center">
                    <img className="relative object-contain" src="/HeroImage.png" />
                </h1>
            </div>
        </div>
    </div>
    );
}

export default Hero;