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
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Digital Systems Architect & UI/UX Strategist</h3>
                                <p className="font-bold italic text-sm" style={{ color: brandColor }}>MADES Sports Organization (International Governance)</p>
                            </div>

                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Engineered and managed a comprehensive <span className="text-slate-900 font-bold">digital infrastructure</span> using modern full-stack architectures to streamline cross-border operations and data management.
                            </p>
                            
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-tight">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                    Conceptualized and deployed high-performance digital interfaces focused on accessibility and institutional branding.
                                </li>
                                <li className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-tight">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                    Orchestrated the organization's digital ecosystem, balancing technical scalability with visual consistency.
                                </li>
                            </ul>
                        </div>

                        {/* EXPÉRIENCE 2 : FOCUS DESIGN & BRANDING */}
                        <div className="relative pl-8 group">
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
                                    <p className="font-bold italic text-sm" style={{ color: brandColor }}>Principal Consultant & Digital Strategist</p>
                                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-black uppercase tracking-tighter">Strategic Leadership</span>
                                </div>
                            </div>

                            <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                                Founded and directed a consultancy specializing in <span className="text-slate-900 font-bold underline decoration-slate-200 underline-offset-4">comprehensive digital modernization</span>. 
                                I lead cross-functional projects to align business architectures with modern digital ecosystems, ensuring high-impact growth and secure online operations.
                            </p>

                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }}></div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                                        <span className="text-slate-900">Institutional Branding:</span> Engineered 360° visual identities and professional editorial assets to standardize communication for high-profile clients.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }}></div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                                        <span className="text-slate-900">Transformation Management:</span> Orchestrated digital transitions through technical SEO optimization, data-driven social curation, and platform scalability.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }}></div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                                        <span className="text-slate-900">System Design:</span> Bridged the gap between complex organizational workflows and intuitive digital interfaces using Figma and Agile methodologies.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="relative pl-8 group">
                            <div 
                                className="absolute w-4 h-4 rounded-full -left-[9px] top-1.5 ring-4 ring-white transition-all group-hover:scale-125 bg-slate-200 group-hover:bg-[#8DC63F] opacity-80 group-hover:opacity-100"
                            ></div>
                            
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Jan 2021 — June 2022</span>
                            
                            <div className="flex flex-col mb-4">
                                <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                                    CORIS BANK INTERNATIONAL
                                </h3>
                                <div className="flex items-center gap-2 mt-2">
                                    <p className="font-bold italic text-sm text-slate-500">Digital Systems & Security Engineering Intern</p>
                                    <span className="text-[10px] border border-slate-200 px-2 py-0.5 rounded font-black uppercase tracking-tighter">Banking Technology</span>
                                </div>
                            </div>

                            <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                                Spearheaded the digital modernization of internal banking workflows by integrating <span className="text-slate-900 font-bold">Secure Mobile Architectures</span> and high-performance <span className="text-slate-900 font-bold">Enterprise Solutions</span>. I focused on enhancing operational efficiency through the development of mission-critical notification systems.
                            </p>

                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8DC63F] transition-colors"></div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                                        <span className="text-slate-900">Systems Optimization:</span> Designed and architected the UI/UX for internal fintech applications, prioritizing security-first principles and user-centered efficiency.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8DC63F] transition-colors"></div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                                        <span className="text-slate-900">Secure Engineering:</span> Developed robust cross-platform mobile solutions using <span className="italic">Flutter</span>, adhering to stringent financial sector encryption and data protection standards.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8DC63F] transition-colors"></div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tight leading-normal">
                                        <span className="text-slate-900">Infrastructure Lifecycle:</span> Managed the end-to-end SDLC, bridging the gap between hardware maintenance and software engineering to ensure 24/7 technical continuity.
                                    </p>
                                </li>
                            </ul>

                            {/* Updated tech tags for the Embassy role */}
                            <div className="mt-6 flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                {['Enterprise Architecture', 'Cybersecurity', 'Figma', 'Fintech', 'Agile'].map((tech) => (
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