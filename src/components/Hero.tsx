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
    <div className="h-[88vh] bg-[#438db2]">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
            </div>
            <div className="w-[700px] relative">
                <h1 className="text-[30px] md:text-[40px] text-white font-bold text-center">
                    <img src="/HeroImage.png" />
                </h1>
            </div>
        </div>
    </div>
    );
}

export default Hero;