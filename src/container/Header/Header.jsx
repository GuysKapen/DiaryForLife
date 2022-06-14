import { motion } from 'framer-motion';
import React from 'react';
import "./Header.scss";
import { images } from "../../constants"
import { Section } from "../../layout"

const Header = () => {
    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    };
    return (
        <div className='app__header flex'>
            <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className=''>
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>👋</span>
                        <div className='ml-4'>
                            <p className='p-text'>Hello, I am</p>
                            <h1 className='head-text'>Guys</h1>
                        </div>
                    </div>
                    <div className='tag-cmp'>
                        <p className='p-text'>
                            <span>Web Developer</span>
                        </p>
                        <p className='p-text'>
                            <span>Dev Ops</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__header-img'>
                <div className='w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-8 z-10'>
                    <h1 className='text-6xl text-center font-black'>The Sleepiest App</h1>
                    <p className='mt-8 w-1/2 text-2xl text-center mx-auto'>Can't sleep? Try bedtime stories, sleep sounds & meditations to help you fall asleep fast.</p>
                    <div class="flex w-48 h-14 bg-black text-white rounded-lg items-center justify-center mt-8 mx-auto">
                        <div class="mr-3">
                            <svg viewBox="30 336.7 120.9 129.2" width="30">
                                <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                                <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
                                <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                                <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
                            </svg>
                        </div>
                        <div>
                            <div class="text-xs">GET IT ON</div>
                            <div class="text-xl font-semibold font-sans -mt-1">Google Play</div>
                        </div>
                    </div>
                </div>
                {/* <img src={images.profile} alt="image_profile" /> */}
                <motion.img whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='overlay_circle top-0'
                    src={images.circle}
                    alt="profile_circle" />

            </motion.div>
            {/* 
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >

                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt="circle_image" />
                    </div>
                ))}

            </motion.div> */}
        </div>
    );
}

export default Section(Header, "home");
