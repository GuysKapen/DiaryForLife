import React, { useState } from 'react';

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { images } from '../../constants';
import { Section } from '../../layout';
import "./Feature.scss";
import MotionWrap from '../../layout/MotionWrap';

const Skill = () => {

    const skills = [
        {
            name: "Sleep better, wake happier",
            description: "Explore sleep sounds, stories and meditations, to help you sleep better and wake up happier.",
            bgColor: "#edf2f8",
            icon: images.react
        },
        {
            name: "Track your progress",
            description: "Just 5 days of Sleepiest can help you sleep an average of 32 minutes longer each night.",
            bgColor: "#edf2f8",
            icon: images.figma
        },
        {
            name: "Join over 2 million",
            description: "Join over 2 million people around the world improving their health & happiness with Sleepiest.",
            bgColor: "#edf2f8",
            icon: images.flutter
        },
    ];
    return (
        <>
            <h2 className='head-text'>Features</h2>

            <div className=''>
                <motion.div className='flex'>
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}>
                            <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className='p-text mt-4 text-center text-3xl font-bold text-gray-800'>{skill.name}</p>
                            <p className='p-text mt-4 text-center px-8'>{skill.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div class="mx-auto flex w-48 h-14 text-sm font-black cursor-pointer bg-indigo-600 hover:bg-indigo-800 text-white rounded-lg items-center justify-center mt-16">
                       Try For Free
                    </div>
             
            </div>
        </>
    );
}

export default Section(MotionWrap(Skill, "app__skills"), "skills", "app__whitebg");
