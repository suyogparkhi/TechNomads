import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import video2 from '../assets/video2.mp4';
import logo from '../assets/plant.png';
import { motion } from 'framer-motion';
import img1 from '../assets/farmer.png';

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&family=Green+Peas&display=swap');
  .font-sans { font-family: 'Quicksand', sans-serif; }
  .font-display { font-family: 'Green Peas', cursive; }
  .text-primaryGreen { color: #4CAF50; }
  .text-techBlue { color: #42A5F5; }
  .li-styling {
    padding: 10px 20px;
    font-size: 1.1rem;
    text-align: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  .li-styling:hover {
    background-color: #8bc34a;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

// Constants for hover styles
const hoverBgColor = "hover:bg-[#8bc34a]"; // Background color on hover
const activeTextColor = "hover:text-[#FFFFFF]"; // Text color on hover

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#' },
  { name: 'Features', href: '#' }
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative bg-white snap-start h-screen">
      <div className="relative bg-white h-screen">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover z-[0]" 
          src={video2}
          type="video/mp4"
        />
        
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5"> 
                <img src={logo} alt="PlantPulse Logo" className='h-20 w-20' />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold leading-6 text-gray-900 px-4 py-2 rounded-md transition ${hoverBgColor} ${activeTextColor}`} // Added hover styles for navigation links
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a 
                href="/login" 
                className={`text-sm font-semibold leading-6 text-gray-900 px-4 py-2 rounded-md transition ${activeTextColor}`} // Added hover styles for login button
              >
                Login <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
  <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32"> {/* Increased top padding */}
    <h1 className="text-4xl font-bold tracking-tight text-gray-850 sm:text-5xl">
      Protect Your <span className='text-[#8bc34a]'>Farm's</span> Future <br/>With <span className='text-[#8bc34a]'>AI</span> Disease Detection
    </h1>
    <p className="mt-6 text-lg leading-8 text-[#FFFFFF]">
      Ensure healthier crops and bigger yields with real-time disease alerts powered by AI. Stop plant diseases before they spread and keep your farm thriving—today and for years to come.
    </p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a
        href="/register"
        className="rounded-md bg-[#8bc34a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7cb342] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8bc34a]"
      >
        Get started
      </a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-white">
        Learn more <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br><br></br>
  

          {/* Professional styling for the lower section */}
            {/* Professional styling for the lower section */}
  <div className='mt-20'> {/* Add margin-top to create spacing */}
    <div className='flex gap-20 justify-center'>
      <div className="text-center">
        <h2 className='text-5xl font-bold whitespace-nowrap text-gray-850'><span className='text-[#8bc34a]'>AI</span> at the Root of Healthier Farms</h2>
        <h1 className='text-5xl font-bold whitespace-nowrap mt-4 text-gray-850'>Welcome to <span className='text-[#8bc34a]'>PlantPulse</span></h1>
      </div>
      <img
        src={img1}
        alt="Farmer Satisfied with PlantPulse"
        className='rounded-xl ml-10'
        height={600}
        width={600}
      />
    </div>
    <footer className="w-full bg-gray-100 text-center py-4 mt-10">
      <p className="text-gray-500">© 2024 TechNomads. All rights reserved.</p>
    </footer>
  </div>
</div>
      </div>
    </section>
  );
}
