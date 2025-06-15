import React from 'react';
import { LuImport } from 'react-icons/lu';
// import mainBanner from "../assets/mainBanner.jpg"
import sarveshMainBanner from "../assets/banner1.jpg"
import LazyImage from './LazyImage';
import { motion } from 'motion/react';

const Hero = () => {
    const jellyVariant = {
        animate: {
            scale: [1, 1.3, 0.9, 1.1, 1],
            y: [0, -10, 5, -5, 0],
            transition: {
            duration: 1.2,
            // repeat: ,
            repeatType: 'loop',
            ease: 'easeInOut',
            },
        },
    };
    return (
        <section>
            <div className='flex-center flex-col'>
                <motion.h1
                variants={jellyVariant}
                animate="animate"
                className=' mt-16 overflow-hidden text-[11vw] font-semibold uppercase leading-none'>
                    Sarvesh <br /> Belwalkar
                </motion.h1>
                <div className='mt-8'>
                    <a
                    href="/media/Sarvesh_Resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400"
                    >
                    <span>Download Resume</span>
                    <LuImport className="ml-2" />
                    </a>
                </div>
                <div className='w-full'>
                    <LazyImage src={sarveshMainBanner} alt="Hero Banner Img" className=' mt-8 h-96 w-full object-cover' />
                </div>
            </div>
        </section>
    );
}

export default Hero;
