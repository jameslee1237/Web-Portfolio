import React from "react";
import CallIcon from '@mui/icons-material/Call';
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className="pt-[4rem] pb-[3rem] bg-black">
            <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-8 border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
                <div className="flex flex-col text-white">
                    <div className="font-logo text-[18px]">
                        <span className="text-[30px] md:text[40px] text-yellow-400">James</span>
                        <span className="text-[30px] md:text[40px]">Lee</span>
                    </div>
                </div>
                <div className="text-white">
                    <div className="flex items-center">
                        <CallIcon />
                        <h3 className="font-bold text-lg mb-2 ml-2 text-yellow-400">Mobile</h3>
                    </div>
                    <p className="text-sm">+1 234 456 7890</p>
                </div>
                <div className="text-white">
                    <div className="flex items-center">
                        <MapIcon />
                        <h3 className="font-bold text-lg mb-1 ml-2 text-yellow-400">Address</h3>
                    </div>
                    <p className="text-sm">Seoul, South Korea</p>
                </div>
                <div className="text-white">
                    <div className="flex items-center">
                        <EmailIcon />
                        <h3 className="font-bold text-lg mb-2 ml-2 text-yellow-400">Email</h3>
                    </div>
                    <p className="text-sm">jlee00304@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;