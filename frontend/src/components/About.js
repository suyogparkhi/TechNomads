import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'framer-motion';
import img from '../assets/hero-portfolio.jpg'
import img1 from '../assets/farmer.png'


export default function About() {
  // Correctly using useInView
  const refLeftDiv = React.useRef(null);
  const refRightDiv = React.useRef(null);

  const inViewLeftDiv = useInView(refLeftDiv, { triggerOnce: true, threshold: 0.5 });
  const inViewRightDiv = useInView(refRightDiv, { triggerOnce: true, threshold: 0.5 });

  return (
    // <div className='flex flex-col min-h-screen'>
    // <div className='mt-10 flex gap-20'>
    <div className='mt-10'>
    <div className='flex gap-20 justify-center'>
      
      <motion.div
        ref={refLeftDiv}
        className='left-div mt-40 ml-10 max-w-full'
        initial={{ opacity: 0, x: -100 }}
        animate={inViewLeftDiv ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-5xl font-bold whitespace-nowrap text-gray-850'><span className='text-[#8bc34a]'>AI</span> at the Root</h2><br/>
        <h2 className='text-5xl font-bold whitespace-nowrap text-gray-850'>of Healthier Farms</h2>,<br/><br/>
        <h1 className='text-5xl font-bold whitespace-nowrap font-bold text-gray-850	'>Welcome to <span className='text-[#8bc34a]'>PlantPulse</span></h1>
      </motion.div>

      
      <motion.div
        ref={refRightDiv}
        className='relative right-div ml-50'
        initial={{ opacity: 0, x: 100 }}
        animate={inViewRightDiv ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <img
          src={img1}
          alt="Farmer Satisfied with PlantPulse"
          className='rounded-xl ml-10'
          height={600}
          width={600}
        />
      </motion.div>
    </div>
    <footer className="w-1500px bg-gray-100 text-center py-4 mt-10">
        <p className="text-gray-500">© 2024 TechNomads. All rights reserved.</p>
      </footer>
    </div>  
     
  )
}
