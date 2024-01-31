import React from 'react';

const Project = () => {
    return (
        <div className="bg-[#30689f] pt-[4rem] md:pt-[8rem] pb-[12rem]">
            <h1 className="text-center text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] uppercase mb-[3rem] 
                font-bold text-white">
                Project
            </h1>
            <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                <div>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%]
                                    h-[200px] md:h-[300px]">
                        <h1 className="text-[40px] font-bold text-white">
                            Image1
                        </h1>
                    </div>   
                </div>
                <div>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%]
                                    h-[200px] md:h-[300px]">
                        <h1 className="text-[40px] font-bold text-white">
                            Image2
                        </h1>
                    </div>   
                </div>
                <div>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%]
                                    h-[200px] md:h-[300px]">
                        <h1 className="text-[40px] font-bold text-white">
                            Image3
                        </h1>
                    </div>   
                </div>
                <div>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%]
                                    h-[200px] md:h-[300px]">
                        <h1 className="text-[40px] font-bold text-white">
                            Image4
                        </h1>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Project;