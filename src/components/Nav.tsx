import React from "react"
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
    return (
        <div className="w-[100%] Nav top-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                    PORT
                    <span className="text-yellow-300">FOLIO</span>
                </h1>
                <div className="nav-link">
                    <a href="#">Home</a>
                </div>
                <div className="nav-link">
                    <a href="#Aboutsection">About</a>
                </div>
                <div className="nav-link">
                    <a href="#Projectsection">Projects</a>
                </div>
                <div className="nav-link">
                    <a href="#Contactsection">Contact</a>
                </div>
                <div onClick={openNav} className="md:hidden w-[2rem] h-[2rem] cursor-pointer text-yellow-300">
                    <MenuIcon />
                </div>
            </div>
        </div>
    );
};

export default Nav;