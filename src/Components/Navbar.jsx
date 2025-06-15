import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { LINKS } from '../Constants/Constants';
import { AnimatePresence, motion } from 'motion/react';

const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false);

    const toggleButton = ()=>{
        //  e.preventDefault();
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        document.body.style.overflow = !isOpen ? "hidden" : "auto";
    },[isOpen]);

    const containerVariants = {
        hidden: { opacity: 0, y: "-100%"},
        visible: { opacity: 1, y: 0,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    const linkVariants = {
        hidden: { opacity: 0, y: "-50"},
        visible: { opacity: 1, y: 0}
    }

    return (
        <>
            <nav className='fixed right-0 top-0 z-30 p-4'>
                <button onClick={toggleButton} className='rounded-md p-2'>
                    {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                </button>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={containerVariants}
                    className=' fixed inset-0 z-20 flex-center bg-black text-white'>
                        <ul className='space-y-6 text-3xl'>
                            {LINKS?.map((item)=>{
                                return (
                                    <motion.li variants={linkVariants} key={item.id}>
                                        <a href={`#${item.id}`} onClick={toggleButton}
                                        className='text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-8xl'>
                                            {item?.name}
                                        </a>
                                    </motion.li>
                                )
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
