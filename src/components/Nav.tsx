import React from "react"

const Nav = () => {
    return (
        <div className="w-[100%] Nav top-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                    PORT
                    <span className="text-yellow-300">FOLIO</span>
                </h1>
                <ul className="md:flex hidden items-center space-x-10">
                    <li>
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#Aboutsection">About</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#Projectsection">Projects</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#Contactsection">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;