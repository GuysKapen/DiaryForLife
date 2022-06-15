import { motion } from 'framer-motion';
import React from 'react';
import { images } from "../../constants"
import { Section } from "../../layout"

const Content = () => {
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
            <motion.div whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__header-img w-5/12'>
                <div className='w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-8 z-10'>
                    <h1 className='text-6xl font-black'>Sleep with bedtime stories</h1>
                    <p className='mt-8 text-base p-text mx-auto'>Our selection of bedtime stories range from classics such as; ‘Cinderella’ and ‘Sherlock Holmes’ to Sleepiest Originals such as ‘The Adventures of Koko', 'The Wise Elephant' and 'The Jupiter Twins'.</p>
                    <div class="flex w-48 h-14 text-sm font-black cursor-pointer bg-indigo-600 hover:bg-indigo-800 text-white rounded-lg items-center justify-center mt-16">
                       Try For Free
                    </div>
                </div>
                <motion.img whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='overlay_circle top-0'
                    src={images.circle}
                    alt="profile_circle" />

            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles w-7/12 flex-shrink-0'
            >

                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt="circle_image" />
                    </div>
                ))}

            </motion.div>
        </div>
    );
}

export default Section(Content, "content");
