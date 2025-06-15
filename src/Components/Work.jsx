import React from 'react';
import { EXPERIENCES } from '../Constants/Constants';

const Work = () => {
    return (
        <section id='experience'>
            <h2 className='my-10 text-center text-3xl lg:text-8xl'>Work Experience</h2>
            <div className='mx-auto max-w-6xl'>
                {EXPERIENCES?.map((item, idx)=>{
                    return (
                        <div key={idx} className='mx-4 mb-20'>
                            <h2 className='font-medium lg:text-2xl'>{item?.company}</h2>
                            <div className='flex justify-between'>
                                <p className='py-4 tracking-wide lg:text-xl'>{item?.role}</p>
                                <p className='py-4 lg:text-xl'>{item?.year}</p>
                            </div>
                            <p className='font-sans text-gray-400'>{item?.description}</p>
                        </div>
                    ) 
                })}
            </div>
        </section>
    );
}

export default Work;
