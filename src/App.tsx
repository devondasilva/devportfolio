// src/App.tsx
import Gallery from './components/Gallery';
import logo from '../src/assets/img/logo_en.svg';
import poster from '../src/assets/img/poster.png';
import { myProjects } from './data/projects';
import './index.css';
import { useState } from 'react';



function App() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation / Header */}
      <nav className="p-4 md:p-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <img src={logo} alt="Logo Design.PRO" className="w-24 md:w-30 h-auto" />

          {/* Hamburger Button (Visible uniquement sur mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50"
          >
            <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Menu Links */}
          <ul className={`
            flex flex-col md:flex-row items-center gap-6 md:gap-8
            absolute md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto
            bg-white md:bg-transparent transition-transform duration-300 ease-in-out
            p-10 md:p-0 z-40
            ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            <li className="text-xl text-gray-600 md:text-sm hover:text-black cursor-pointer" onClick={() => setIsOpen(false)}>Projects</li>
            <li className="text-xl text-gray-600 md:text-sm hover:text-black cursor-pointer" onClick={() => setIsOpen(false)}>About me</li>
            <li className="px-6 py-3 md:px-4 md:py-2 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 transition">
              Contact me
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-10 md:pb-20 px-6 md:px-8 max-w-6xl mx-auto">
        {/* Flex-col for mobile, flex-row for desktop */}
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
           <div className="text-center md:text-left">
            <h2 className="font-bold text-4xl md:text-7xl text-[#333333] leading-tight">
              Hi, I'm Devon — <span className="text-gray-400">Graphic Designer</span> <br className="hidden md:block" /> 
              <span className="text-gray-400">& UI/UX.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto md:mx-0">
              Expert in brand identity and premium UI/UX design. Transforming your vision into unforgettable digital journeys.
            </p>
          </div>
          {/* Image size adjusted for mobile */}
          <img src={poster} alt="poster" className='w-full max-w-[300px] md:max-w-md h-auto' />
        </div>
      </header>

      {/* Gallery Section */}
      {/* Reduced rounding and padding for mobile */}
      <main className="max-w-7xl mx-auto pb-10 md:pb-20 bg-gray-500 rounded-xl md:rounded-3xl md:mx-8">
        <div className="px-6 md:px-8 mb-6 md:mb-10">
          <h3 className="text-xl md:text-2xl uppercase pt-8 md:pt-10 font-bold text-white">Selected projects</h3>
        </div>
        <Gallery projects={myProjects} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-10 px-4 text-center border-t border-gray-100">
        <p className="text-gray-400 text-xs md:text-sm">
          © 2026 — Design Portfolio. Developed by D@scommunication.
        </p>
      </footer>
    </div>
  );
}

export default App;