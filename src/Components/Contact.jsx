import React from 'react';
import { CONTACT, SOCIAL_MEDIA_LINKS } from '../Constants/Constants';

const Contact = () => {
    return (
        <section id='contact'>
            <div className='mx-auto max-w-6xl'>
                <p className='my-10 text-center text-3xl lg:text-8xl'>
                    Interested In Working Together?
                </p>
                <p className='p-4 text-center text-4xl'>{CONTACT?.text}</p>
                <p className='my-4 text-center text-2xl font-medium text-lime-300
                lg:pb-6 lg:text-5xl'>{CONTACT?.email}</p>
                {/* <p className='my-4 text-center text-2xl font-medium text-lime-300
                lg:pb-6 lg:text-5xl'>{CONTACT?.phone}</p> */}
            </div>
            <div className='mt-20 flex-center gap-8'>
                {SOCIAL_MEDIA_LINKS?.map((item, idx)=>{
                    return (
                        <a key={idx} href={item?.href} target='_blank' rel='noopener noreferrer'>
                            {item?.icon}
                        </a>
                    )
                })}
            </div>
            <p className='my-8 text-center text-gray-400'>&copy; 2025 Portfolio Built by Sarvesh Belwalkar.</p>
        </section>
    );
}

export default Contact;
