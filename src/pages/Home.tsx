import React from 'react';
import Gallery from '../components/Gallery';
import poster from '../assets/img/poster.png';
import { myProjects } from '../data/projects';
import '../index.css';
import Nav from '../components/Nav';
import { Icon } from '@mui/material'; // Si tu l'utilises toujours pour les flèches

const Home: React.FC = () => {
  const brandColor = "#8DC63F";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#8DC63F] selection:text-white">
      <Nav />

      {/* --- HERO SECTION --- */}
      <header className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
          <div className="text-center md:text-left flex-1">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 bg-slate-100" style={{ color: brandColor }}>
              AVAILABLE FOR NEW PROJECTS
            </span>
            <h1 className="font-black text-5xl md:text-8xl text-[#333333] leading-[0.9] tracking-tighter">
              Hi, I'm Devon — <br />
              <span className="text-slate-300">Graphic Designer</span> <br /> 
              <span className="text-slate-300">& UI/UX.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
              Crafting premium visual identities and high-end digital interfaces. 
              I turn your vision into <span className="font-bold text-slate-800">unforgettable digital journeys.</span>
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <button 
                className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                style={{ backgroundColor: brandColor }}
               >
                 View My Work
               </button>
               <button className="px-8 py-4 rounded-full border-2 border-slate-200 font-bold text-lg hover:bg-slate-50 transition-colors">
                 Let's Talk
               </button>
            </div>
          </div>

          <div className="relative group flex-1 flex justify-center md:justify-end">
            <div 
              className="absolute inset-0 blur-3xl opacity-20 scale-75 rounded-full"
              style={{ backgroundColor: brandColor }}
            ></div>
            <img 
              src={poster} 
              alt="Hero Design" 
              className='relative w-full max-w-[320px] md:max-w-md h-auto drop-shadow-2xl animate-float' 
            />
          </div>
        </div>
      </header>

      {/* --- SERVICES / EXPERTISE SECTION --- */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Brand Identity", desc: "Creating unique visual languages that resonate with your audience." },
              { title: "UI/UX Design", desc: "User-centric interfaces that are beautiful to look at and easy to use." },
              { title: "Motion Design", desc: "Bringing your brand to life with smooth and engaging animations." }
            ].map((service, i) => (
              <div key={i} className="group cursor-default">
                <div className="w-12 h-1 mb-4 rounded-full" style={{ backgroundColor: brandColor }}></div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS GALLERY SECTION --- */}
      <main className="max-w-[95%] mx-auto my-12 md:my-20 bg-[#1a1a1a] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="px-6 md:px-16 pt-12 md:pt-20 pb-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Selected Work
              </h3>
              <p className="text-gray-500 mt-2">A curated list of my best designs.</p>
            </div>
            <div className="hidden md:block w-20 h-[1px] bg-gray-700 mb-4"></div>
          </div>
          
          <div className="flex justify-center">
            <Gallery projects={myProjects} />
          </div>
        </div>
      </main>

      {/* --- RECENT POSTS / READ SECTION --- */}
      {/* Tu peux décommenter si ton composant Read est prêt */}
      {/* <section className="py-20 max-w-7xl mx-auto px-6 italic">
          <Read />
      </section> */}

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to start a project?</h2>
        <a 
          href="mailto:hello@devon.com" 
          className="text-3xl md:text-5xl font-bold underline decoration-4 underline-offset-[12px] hover:brightness-110 transition-all"
          style={{ textDecorationColor: brandColor }}
        >
          hello@devon.com
        </a>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black italic">DEVON<span style={{ color: brandColor }}>.</span></div>
          <p className="text-gray-400 text-sm">
            © 2026 — Design Portfolio. Developed by <span className="font-bold text-slate-800">D@scommunication</span>.
          </p>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
             <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
             <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
             <a href="#" className="hover:opacity-70 transition-opacity">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;