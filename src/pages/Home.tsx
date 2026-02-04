import React from 'react';
import Gallery from '../components/Gallery';
import poster from '../assets/img/poster.png';
import { myProjects } from '../data/projects';
import '../index.css';
import Nav from '../components/Nav';

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
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
  {/* Subtil fond décoratif */}
  <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* En-tête de section */}
    <div className="mb-16 md:mb-24">
      <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-4" style={{ color: brandColor }}>
        Expertise
      </h3>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">
        Design Solutions <br /> Built for Impact.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
      {[
        { 
          title: "Brand Identity", 
          desc: "Crafting distinct visual narratives that define your essence and command attention in crowded markets.",
          tags: ["Logos", "Guidelines", "Stationery"]
        },
        { 
          title: "UI/UX Design", 
          desc: "Developing seamless digital interfaces that balance aesthetic elegance with intuitive user functionality.",
          tags: ["Mobile", "Web", "Prototypes"]
        },
        { 
          title: "Motion Design", 
          desc: "Injecting life into static brands through high-end motion graphics and interactive story-telling.",
          tags: ["Animation", "3D", "Reels"]
        }
      ].map((service, i) => (
        <div 
          key={i} 
          className="group relative p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full"
        >
          {/* Index stylisé */}
          <span className="text-5xl font-black opacity-[0.05] absolute top-8 right-8 group-hover:opacity-10 transition-opacity">
            0{i + 1}
          </span>

          {/* Accent bar animé */}
          <div 
            className="w-12 h-1.5 mb-8 rounded-full transition-all duration-500 group-hover:w-24" 
            style={{ backgroundColor: brandColor }}
          ></div>

          <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
            {service.title}
          </h4>

          <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
            {service.desc}
          </p>

          {/* Tags de service */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {service.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white border border-slate-100 rounded-full text-slate-400">
                {tag}
              </span>
            ))}
          </div>

          {/* Icône de flèche subtile au survol */}
          <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ stroke: brandColor }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
             </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- PROJECTS GALLERY SECTION --- */}


    const brandColor = "#8DC63F";

    <main className="max-w-[95%] mx-auto my-12 md:my-24 bg-[#D8D8D8] rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/20 shadow-2xl relative">
        
        {/* --- EFFETS DE TEXTURE & PROFONDEUR --- */}
        {/* Grand texte DC en arrière-plan avec un mode de fusion pour se fondre dans le gris */}
        <div className="absolute top-0 right-0 p-10 mix-blend-overlay opacity-20 pointer-events-none">
            <span className="text-[18rem] font-black leading-none select-none tracking-tighter">DC</span>
        </div>

        {/* Cercle de lumière blanche pour donner du relief au gris */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/30 blur-[120px] rounded-full"></div>

        <div className="px-6 md:px-16 pt-16 md:pt-28 pb-16 relative z-10">
            
            {/* --- HEADER SECTION --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-8">
                <div className="relative">
                    {/* Badge vertical : on utilise un blanc pur pour trancher avec le gris */}
                    <div 
                        className="absolute -left-6 md:-left-10 top-2 h-full w-[4px] rounded-full shadow-[0_0_15px_rgba(141,198,63,0.5)]"
                        style={{ backgroundColor: brandColor }}
                    ></div>
                    
                    <h3 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.8]">
                        Selected <br />
                        <span className="text-white drop-shadow-sm">Works.</span>
                    </h3>
                    
                    <div className="flex items-center gap-4 mt-10">
                        <p className="text-slate-600 text-lg font-bold max-w-sm leading-tight uppercase tracking-tighter">
                            Visual research <br /> & Digital craft
                        </p>
                        <div className="h-[2px] w-12 bg-slate-900"></div>
                    </div>
                </div>
        </div>

                {/* --- COMPTEUR STYLE "STUDIO" --- */}
                <div className="flex flex-col items-start md:items-end">
  {/* Le conteneur principal avec effet Glassmorphism renforcé */}
    <div className="group relative">
        
        {/* Petit reflet lumineux qui suit le survol (optionnel via CSS) */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500 blur-sm"></div>

        <div className="relative bg-white/30 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex items-center gap-8 transition-all duration-500 group-hover:translate-y-[-5px] group-hover:bg-white/50">
        
        {/* Colonne d'infos textuelles */}
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: brandColor }}></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Portfolio Edition</span>
            </div>
            <span className="text-slate-900 font-black text-xl tracking-tighter">
                2026<span className="text-slate-400">/</span>DC
            </span>
        </div>

        {/* Séparateur stylisé avec un dégradé */}
        <div className="w-[1.5px] h-12 bg-gradient-to-b from-transparent via-slate-400/40 to-transparent"></div>

        {/* Le Compteur avec un effet de profondeur */}
        <div className="relative">
            {/* Un chiffre fantôme en arrière-plan pour le style */}
            <span className="absolute -inset-1 opacity-10 blur-md font-black text-6xl select-none" style={{ color: brandColor }}>
                {myProjects.length < 10 ? `0${myProjects.length}` : myProjects.length}
            </span>
            
            <span 
                className="relative text-6xl font-black tabular-nums leading-none tracking-tighter transition-transform duration-500 group-hover:scale-110 block" 
                style={{ color: brandColor }}
            >
                {myProjects.length < 10 ? `0${myProjects.length}` : myProjects.length}
            </span>
        </div>
        </div>

        {/* Petit label flottant sous le bloc pour ajouter du contenu "pro" */}
        <div className="mt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 mr-4">
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Last update: Feb 2026</span>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 italic">Washington DC Studio</span>
        </div>
    </div>
    </div>

                {/* --- GALERIE --- */}
                <div className="relative group">
                    {/* On remplace le halo vert par un halo blanc pour faire briller les images sur le gris */}
                    <div className="absolute inset-0 bg-white/20 blur-[150px] rounded-full pointer-events-none transform scale-75 group-hover:scale-100 transition-transform duration-1000"></div>

                    <div className="relative z-10 flex justify-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                        <Gallery projects={myProjects} />
                    </div>
                </div>

                {/* --- FOOTER : NAVIGATION ARCHIVE --- */}
                <div className="mt-24 md:mt-32 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col">
                        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-center md:text-left">Based in</span>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: brandColor }}></div>
                            <span className="text-slate-900 font-black tracking-tight text-xl uppercase">Washington DC</span>
                        </div>
                    </div>

                    <a 
                        href="/Myprojects" 
                        className="group relative flex items-center gap-8 bg-slate-900 hover:bg-black px-10 py-5 rounded-full transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-black/20"
                    >
                        <span className="text-white text-sm font-black uppercase tracking-[0.2em]">View full archive</span>
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full transition-transform duration-500 group-hover:rotate-[360deg]">
                            <svg 
                                width="18" height="18" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="black" 
                                strokeWidth="3" 
                                className="group-hover:translate-x-0.5 transition-transform"
                            >
                                <path d="M5 12h14m-7-7 7 7-7 7" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </main>

        {/* --- RECENT POSTS / READ SECTION --- */}
        {/* Tu peux décommenter si ton composant Read est prêt */}
        {/* <section className="py-20 max-w-7xl mx-auto px-6 italic">
            <Read />
        </section> */}

        {/* --- CALL TO ACTION --- */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#121212] rounded-[2rem] md:rounded-[4rem] mx-4 md:mx-8 my-20">
    
    {/* Decorative Blurred Background (Green Glow) */}
    <div 
        className="absolute top-0 right-0 w-[300px] h-[300px] blur-[120px] opacity-20 rounded-full"
        style={{ backgroundColor: brandColor }}
    ></div>
    <div 
        className="absolute bottom-0 left-0 w-[250px] h-[250px] blur-[100px] opacity-10 rounded-full"
        style={{ backgroundColor: brandColor }}
    ></div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Small Tagline */}
        <span 
        className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-[0.3em] uppercase mb-8 border transition-all hover:scale-105 cursor-default"
        style={{ color: brandColor, borderColor: `${brandColor}40` }}
        >
        Next Step
        </span>

        {/* Big Heading */}
        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
        Let's work <br />
        <span className="italic" style={{ color: brandColor }}>together.</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
        Whether you have a fully-formed idea or just a spark of inspiration, 
        I’m here to help you turn it into a <span className="text-white font-bold">visual masterpiece.</span>
        </p>

        {/* Email Link Styled as a Massive Interaction Area */}
        <div className="group relative inline-block">
        <a 
            href="mailto:dasilvadevon51@gmail.com" 
            className="relative text-2xl md:text-5xl font-bold text-white transition-all duration-300 group-hover:opacity-80 break-all md:break-normal"
        >
            dasilvadevon51@gmail.com
            
            {/* Animated Underline */}
            <span 
            className="block h-[3px] md:h-[5px] w-full mt-4 rounded-full transition-all duration-500 origin-left scale-x-100 group-hover:scale-x-110"
            style={{ backgroundColor: brandColor }}
            ></span>
      </a>
      
      {/* "Send me an email" Hint that appears on hover */}
      <p className="mt-6 text-sm font-bold tracking-widest text-gray-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to send me an email
      </p>
    </div>

    {/* Social Links Row */}
    <div className="mt-24 border-t border-white/5 pt-12">
  <p className="text-gray-500 text-xs font-black uppercase tracking-[0.4em] mb-10 text-center">
    Let's Connect
  </p>
  
  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
    {[
      { 
        name: 'Instagram', 
        url: 'https://www.instagram.com/devondasilva5?igsh=MWNsd2FucjE2ZnJzbg%3D%3D&utm_source=qr', 
        handle: '@devondasilva5' 
      },
      { 
        name: 'LinkedIn', 
        url: 'https://www.linkedin.com/in/honore-da-silva-b02561194', 
        handle: 'Devon Da Silva' 
      },
      { 
        name: 'facebook', 
        url: 'https://www.facebook.com/devon.dasilva.37', 
        handle: 'devon_dasilva' 
      }
    ].map((social) => (
      <a 
        key={social.name} 
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center md:items-start transition-all"
      >
        {/* Top row: Name + Small Arrow */}
        <div className="flex items-center gap-1">
          <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover:text-white transition-colors">
            {social.name}
          </span>
          <svg 
            viewBox="0 0 24 24" 
            className="w-3 h-3 fill-none stroke-current transition-transform duration-300 -rotate-45 group-hover:rotate-0"
            style={{ color: brandColor }}
          >
            <path d="M5 12h14m-7-7 7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Bottom row: Handle (The stylish part) */}
        <span className="text-white text-sm md:text-base font-medium opacity-40 group-hover:opacity-100 transition-opacity">
          {social.handle}
        </span>
        
        {/* Animated Underline for each link */}
        <span 
          className="h-[1px] w-0 group-hover:w-full transition-all duration-300 mt-1"
          style={{ backgroundColor: brandColor }}
        ></span>
      </a>
    ))}
  </div>

  {/* Timezone / Availability status - Add more content as requested */}
  <div className="mt-20 flex justify-center">
    <div className="bg-white/[0.03] border border-white/10 px-8 py-4 rounded-2xl flex flex-col md:flex-row items-center gap-4 transition-all hover:border-white/20">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: brandColor }}></span>
            <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: brandColor }}></span>
          </span>
          <span className="text-gray-400 text-sm font-bold uppercase tracking-tighter">
            Current Status: <span className="text-white">Available for hire</span>
          </span>
        </div>

        <div className="hidden md:block w-[1px] h-4 bg-white/10"></div>

        <span className="text-gray-400 text-sm font-medium tracking-wide">
          Based in <span className="text-white font-bold tracking-normal">Washington, DC</span> — 
          <span className="ml-2 text-white tabular-nums">
            {new Date().toLocaleTimeString('en-US', {
              timeZone: 'America/New_York',
              hour: '2-digit', 
              minute: '2-digit',
              hour12: true 
            })} EST
          </span>
        </span>
    </div>
  </div> 
</div>
  </div>
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