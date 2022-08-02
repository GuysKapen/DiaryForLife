import React, { useState } from 'react';
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import PlayButton from '../PlayButton';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (<>
        <nav className='app__navbar'>
            <div className='app__logo'>
                <h1 className='text-5xl text-gray-800 font-brush-script'>Omoir</h1>
            </div>
            <div className='flex w-1/2'>
                <ul className='app__navbar-links'>
                    <li className='app__flex p-text' key={`nav-link-home`}>
                        <div />
                        <a href={`/home`}>Home</a>
                    </li>
                    <li className='app__flex p-text' key={`nav-link-policy`}>
                        <div />
                        <a href={`/policy`}>Privacy Policy</a>
                    </li>
                    <li className='app__flex p-text' key={`nav-link-term`}>
                        <div />
                        <a href={`/term`}>Term</a>
                    </li>
                </ul>
                <div className='hidden'>
                    <PlayButton />
                </div>
            </div>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 className='cursor-pointer' onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}>
                        <HiX className='cursor-pointer' onClick={() => setToggle(false)} />
                        <ul className='app__navbar-links'>
                            {["home", "about", "work", "skills", "contact"].map((item) => (
                                <li key={`link-${item}`}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
        <div id='scroll-nav' className='app__navbar justify-between opacity-0 fixed top-0 -translate-y-64 transition-all duration-300 z-50'>
            <div className='app__logo'>
                <h1 className='text-5xl text-gray-800 font-brush-script z-50'>Omoir</h1>
            </div>
            <PlayButton />
        </div>
    </>
    );
}

export default Navbar;
