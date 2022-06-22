import { motion } from 'framer-motion';
import React from 'react';
import { images } from "../../constants"
import { Section } from "../../layout"

const Content = ({ title, description, image, flip = false, circles = null, btnClasses = null }) => {
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
        <div className={`app__header flex ${flip ? "flex-row-reverse" : ""}`}>
            <motion.div whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__header-img w-5/12'>
                <div className='w-full px-8 z-10'>
                    <h1 className={`text-6xl font-black ${flip ? "text-right" : ""}`}>{title}</h1>
                    <p className={`mt-8 text-base p-text ${flip ? "text-right" : ""}`}>{description}</p>
                    <div className={`flex w-48 h-14 text-sm font-black cursor-pointer bg-indigo-600 hover:bg-indigo-800 text-white rounded-lg items-center justify-center mt-16 ${flip ? "ml-auto" : ""} ${btnClasses}`}>
                        Try For Free
                    </div>
                </div>
                <motion.img whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='overlay_circle top-0 absolute -translate-x-1/2 -translate-y-1/2 left-1/2'
                    src={images.circle}
                    alt="profile_circle" />

            </motion.div>

            <motion.div className='w-6/12 flex-shrink-0 relative'>

                <div className='h-96 z-50 relative'>
                    <motion.img whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className='h-full mx-auto z-50'
                        src={image}
                        alt="profile_circle" />
                </div>

                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='app__header-circles absolute top-0 w-full'
                >

                    {circles || <>
                        <div className='circle-cmp app__flex h-16 w-16' key={`circle-${title}`}>
                            <img src={images.flutter} alt="circle_image" />
                        </div>
                        <div className='circle-cmp app__flex bottom-0 right-0 absolute h-24 w-24' key={`circle-${title}-2`}>
                            <img src={images.sass} alt="circle_image" />
                        </div>
                    </>}


                </motion.div>

            </motion.div>
        </div>
    );
}

export default Section(Content);
