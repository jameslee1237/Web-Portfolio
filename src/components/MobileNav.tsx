import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { AddHome } from "@mui/icons-material";

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {

    const navAnimation = nav ? "translate-x-100" : "translate-x-[100%]";

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <div className="nav-link-mobile">
                    <a href="#" onClick={closeNav}>Home</a>
                </div>
                <div className="nav-link-mobile">
                    <a href="#Aboutsection" onClick={closeNav}>About</a>
                </div>
                <div className="nav-link-mobile">
                    <a href="#Projectsection" onClick={closeNav}>Projects</a>
                </div>
                <div className="nav-link-mobile">
                    <a href="#Contactsection" onClick={closeNav}>Contact</a>
                </div>
            </div>
            <div onClick={closeNav} className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
                <CloseIcon />
            </div>
        </div>
    )
}

export default MobileNav;
