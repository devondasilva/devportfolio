import React from "react";
import Nav from '../components/Nav';
import '../index.css';
import S13 from '../assets/img/S13.jpeg';
import mades from '../assets/img/logomades.png';
const About: React.FC = () => {
    // Custom color for easy maintenance
    const brandColor = "#8DC63F";

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Nav />

            {/* --- HERO SECTION --- */}
            <section className="pt-16 pb-12 md:pt-24 md:pb-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        {/* Profile Image with decorative background */}
                        <div className="relative">
                            <div 
                                className="absolute -inset-2 rounded-2xl blur-lg opacity-30"
                                style={{ backgroundColor: brandColor }}
                            ></div>
                            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                <img 
                                    src={S13}
                                    alt="Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
                                Passionate <span style={{ color: brandColor }}>Developer</span> & Creative Mind
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                                I build scalable web applications with a focus on user experience and clean architecture. 
                                Currently based in Maryland, ready to turn complex problems into elegant solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
                
                {/* --- ACADEMIC BACKGROUND --- */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold uppercase tracking-wider" style={{ color: brandColor }}>Education</h2>
                        <p className="text-slate-500 mt-2">My academic journey and certifications.</p>
                    </div>
                    <div className="md:col-span-2 space-y-10 border-l-2 border-slate-100 ml-2">
                        <div className="relative pl-8 group">
                            <div 
                                className="absolute w-4 h-4 rounded-full -left-[9px] top-1.5 ring-4 ring-white"
                                style={{ backgroundColor: brandColor }}
                            ></div>
                            <span className="text-sm font-bold text-slate-400">2021 — 2024</span>
                            <h3 className="text-xl font-bold mt-1">Bachelor degree's in Software Architecture</h3>
                            <p className="font-medium italic" style={{ color: brandColor }}>School of Management, Computer Science and Sciences</p>
                            <p className="mt-3 text-slate-600 leading-relaxed">
                                Specialized in Cloud Computing, Microservices, and Advanced Web Technologies. 
                                Graduated with honors for my thesis on scalable React architectures.
                            </p>
                        </div>

                        <div className="relative pl-8 group">
                            <div className="absolute w-4 h-4 bg-slate-200 rounded-full -left-[9px] top-1.5 ring-4 ring-white group-hover:bg-opacity-80 transition-colors"
                                 style={{ backgroundColor: `${brandColor}80` }} // Opacity 50%
                            ></div>
                            <span className="text-sm font-bold text-slate-400">2020 — 2021</span>
                            <h3 className="text-xl font-bold mt-1">Diploma in Graphic Design</h3>
                            <p className="font-medium italic" style={{ color: brandColor }}>International School of Graphic Design of Benin</p>
                            <p className="mt-3 text-slate-600 leading-relaxed">
                                Expert in crafting architectural logos, business stationery, and comprehensive visual systems that tell a story.
                            </p>
                        </div>
                        <div className="relative pl-8 group">
                            <div className="absolute w-4 h-4 bg-slate-200 rounded-full -left-[9px] top-1.5 ring-4 ring-white group-hover:bg-opacity-80 transition-colors"
                                 style={{ backgroundColor: `${brandColor}80` }} // Opacity 50%
                            ></div>
                            <span className="text-sm font-bold text-slate-400">2013-2016</span>
                            <h3 className="text-xl font-bold mt-1">High school deploma</h3>
                            <p className="font-medium italic" style={{ color: brandColor }}>General Institute</p>
                            <p className="mt-3 text-slate-600 leading-relaxed">
                                Acquired a rigorous analytical foundation specialized in <span className="text-slate-900 font-bold">applied mathematics and physics</span>. 
        This scientific background now drives my logical approach to <span className="text-slate-900 font-bold italic">algorithmic design</span> and complex problem-solving in the digital space.
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-black uppercase tracking-[0.3em]" style={{ color: brandColor }}>Experience</h2>
                        <p className="text-slate-500 mt-4 leading-relaxed font-medium">
                            Bridging the gap between <br />
                            <span className="text-slate-900">visual excellence</span> and <br />
                            <span className="text-slate-900">technical scalability</span>.
                        </p>
                    </div>

                    <div className="md:col-span-2 space-y-12 border-l-2 border-slate-100 ml-2">
                        
                        {/* EXPÉRIENCE 1 : LE MÉLANGE ARCHITECTE/DESIGNER */}
                        <div className="relative pl-8 group">
                            <div 
                                className="absolute w-4 h-4 rounded-full -left-[9px] top-1.5 ring-4 ring-white transition-transform group-hover:scale-125"
                                style={{ backgroundColor: brandColor }}
                            ></div>
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">2021 — Present</span>
                            
                            <div className="flex flex-col mb-2">
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Full Stack Developer & UI/UX Designer</h3>
                                <p className="font-bold italic text-sm" style={{ color: brandColor }}>MADES Sports Organization (Remote Collaboration)</p>
                            </div>

                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Designed and developed the complete website <span className="text-slate-900 font-bold">https://mades-sport-sandy.vercel.app </span>. 
                               using full stack technologies
                            </p>
                            
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-tight">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                    Created and implemented UI/UX design via Figma, ensuring an intuitive and engaging user experience.
                                </li>
                                <li className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-tight">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                    Managed and optimized the organization's online presence, including technical and visual aspects.
                                </li>
                            </ul>
                        </div>

                        {/* EXPÉRIENCE 2 : FOCUS DESIGN & BRANDING */}
                        <div className="relative pl-8 group">
                        {/* Indicateur visuel stylé */}
                        <div 
                            className="absolute w-4 h-4 rounded-full -left-[9px] top-1.5 ring-4 ring-white transition-all group-hover:scale-125"
                            style={{ backgroundColor: brandColor }}
                        ></div>
                    
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">2023 — Present</span>
                            
                            <div className="flex flex-col mb-4">
                                <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                            DAS COMMUNICATION
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                            <p className="font-bold italic text-sm" style={{ color: brandColor }}>Founder & Creative Director</p>
                            <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-black uppercase tracking-tighter">Self-Founded</span>
                        </div>
                    </div>

                    <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                        Founded and managed a multi-disciplinary creative agency specializing in <span className="text-slate-900 font-bold underline decoration-slate-200 underline-offset-4">high-end visual communication</span>. 
                        I led the artistic direction for diverse clients, transforming business objectives into impactful brand ecosystems and digital growth strategies.
                    </p>

                    <ul className="mt-6 space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }}></div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                                <span className="text-slate-900">Brand Engineering:</span> Designed 360° communication assets, including iconic logos, corporate stationery, and professional editorial layouts.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }}></div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                                <span className="text-slate-900">Digital Management:</span> Orchestrated online presence for brands through strategic social media curation and technical web optimization.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }}></div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                                <span className="text-slate-900">Product Design:</span> Led UI/UX workflows in Figma to bridge the gap between aesthetic branding and functional user interfaces.
                            </p>
                        </li>
                    </ul>
                </div>

                    <div className="relative pl-8 group">
                {/* Indicateur visuel (moins brillant que Briatek car c'est une expérience passée) */}
                <div 
                    className="absolute w-4 h-4 rounded-full -left-[9px] top-1.5 ring-4 ring-white transition-all group-hover:scale-125 bg-slate-200 group-hover:bg-[#8DC63F] opacity-80 group-hover:opacity-100"
                ></div>
                
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Jan 2021 — June 2022</span>
                
                <div className="flex flex-col mb-4">
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                        CORIS BANK INTERNATIONAL
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                        <p className="font-bold italic text-sm text-slate-500">IT Maintenance & Software Engineering Intern</p>
                        <span className="text-[10px] border border-slate-200 px-2 py-0.5 rounded font-black uppercase tracking-tighter">Banking Tech</span>
                    </div>
                </div>

                <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                    Supported the digital transformation of a leading banking institution by bridging <span className="text-slate-900 font-bold">UI/UX Design</span> and <span className="text-slate-900 font-bold">Mobile Development</span>. 
                    I focused on creating intuitive notification systems and cross-platform mobile solutions to enhance internal operational efficiency.
                </p>

                <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8DC63F] transition-colors"></div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                            <span className="text-slate-900">Interface Architecture:</span> Conceptualized and designed the UI/UX for the internal notification application, focusing on user-centered principles to improve banking workflow efficiency.
                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8DC63F] transition-colors"></div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                            <span className="text-slate-900">Mobile Engineering:</span> Engineered high-performance mobile applications using <span className="italic">Flutter</span>, ensuring seamless cross-platform compatibility and rigorous security standards.
                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8DC63F] transition-colors"></div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                            <span className="text-slate-900">Full Cycle Collaboration:</span> Participated in the complete SDLC, from initial wireframing in Figma to final implementation and technical maintenance of IT infrastructures.
                        </p>
                    </li>
                </ul>

                {/* Stack technique utilisée chez Coris */}
                <div className="mt-6 flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    {['Flutter', 'Dart', 'Figma', 'UI/UX', 'IT Networking'].map((tech) => (
                        <span key={tech} className="text-[9px] font-black text-slate-400 border border-slate-200 px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

                    </div>
                </section>

                {/* --- SKILLS GRID --- */}
                <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold">Technical Stack</h2>
                        <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: brandColor }}></div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
                        {[
                            { title: "Graphics design", list: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva"] },
                            { title: "Digital Marketing", list: ["Social Media Strategy", "SEO & Analytics", "Content Creation", "Brand Growth"] },
                            { title: "Frontend", list: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
                            { title: "Backend", list: ["Node.js / Express", "PostgreSQL", "RESTful APIs", "Firebase"] },
                            { title: "DevOps", list: ["Git / GitHub", "Docker", "Vercel / Netlify", "Google Cloud"] },
                            { title: "Soft Skills", list: ["Project Management", "Agile / Scrum", "Design Thinking", "Collaboration"] }
                        ].map((category, i) => (
                            <div key={i} className="space-y-3">
                                <h4 className="font-bold text-sm tracking-widest uppercase" style={{ color: brandColor }}>{category.title}</h4>
                                <ul className="text-slate-300 space-y-1">
                                    {category.list.map(skill => <li key={skill}>{skill}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- BEYOND CODING --- */}
                <section className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">Beyond the Code</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            I strongly believe that being a great developer is about more than just typing code. 
                            My involvement with <span className="font-bold" style={{ color: brandColor }}>MADES Sports Organization</span> has 
                            taught me leadership, discipline, and the importance of community impact.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["🏀 Basketball", "📸 Photography", "✈️ Travel", "♟️ Strategy Games"].map(hobby => (
                                <span key={hobby} className="px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold">{hobby}</span>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="h-40 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-300">
                             <img src={mades} alt="MADES Logo" className="w-32 h-auto object-contain" />
                        </div>
                        <div className="h-40 rounded-2xl flex items-center justify-center text-white" style={{ backgroundColor: brandColor }}>
                             <span className="text-4xl font-bold">SPORTS</span>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- CONTACT FOOTER --- */}
             <footer className="bg-white py-12 px-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-400 text-sm">
                    © 2026 — Design Portfolio. Developed by <span className="font-bold text-slate-800">D@scommunication</span>.
                </p>
                <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                    <a href="https://www.instagram.com/devondasilva5?igsh=MWNsd2FucjE2ZnJzbg%3D%3D&utm_source=qr" className="hover:opacity-70 transition-opacity">Instagram</a>
                    <a href="https://www.linkedin.com/in/honore-da-silva-b02561194" className="hover:opacity-70 transition-opacity">LinkedIn</a>
                    <a href="https://www.facebook.com/devon.dasilva.37" className="hover:opacity-70 transition-opacity">Facebook</a>
                </div>
                </div>
            </footer>
        </div>
    );
};

export default About;