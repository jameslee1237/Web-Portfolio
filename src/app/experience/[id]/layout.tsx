"use client";
import BackToHomeButton from "@/components/BacktoHome";
import "../../globals.css";

export default function ExperienceDetailLayout ({
    children,
} : {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <div className="w-[100%] Nav top-0 h-[12vh] bg-[#141c27] shadow-md">
                <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                    <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                        PORT
                        <span className="text-yellow-300">FOLIO</span>
                    </h1>
                </div>
            </div>
            <div className="h-[88vh] bg-black flex flex-col items-center">
                {children}
            </div>
            <BackToHomeButton />
        </html>
    )
}