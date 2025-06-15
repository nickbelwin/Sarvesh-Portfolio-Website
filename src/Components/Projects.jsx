import React from 'react';
import { PROJECTS } from '../Constants/Constants';
import { motion } from 'motion/react';
import LazyImage from './LazyImage';

const Projects = () => {
    return (
        <section className='p-8' id="projects">
            <h2 className='my-10 text-center text-3xl lg:text-8xl'>My Work</h2>
            <div className='columns-1 gap-4 md:columns-2 lg:columns-3'>
                {PROJECTS?.map((item)=>{
                    return <a key={item?.id} href={item?.link} target='_blank' rel='noopener noreferrer'
                    className='block'>
                        <div className='relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg'>
                            <LazyImage src={item?.imgSrc} alt={item.title}
                            className='h-auto w-full object-cover' />
                            <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }} 
                            className='absolute bottom-0 top-0 left-0 right-0 p-8 text-white backdrop-blur-md'>
                                <h3 className='text-3xl'>{item?.title}</h3>
                                <p className='max-w-xs text-lg'>{item?.description}</p>
                            </motion.div>
                        </div>
                    </a>
                })}
            </div>
        </section>
    );
}

export default Projects;
