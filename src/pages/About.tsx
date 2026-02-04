import React from "react";
import Nav from '../components/Nav';
import '../index.css';
import S13 from '../assets/img/S13.jpeg';
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
                                Currently based in [Your City], ready to turn complex problems into elegant solutions.
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
                            <span className="text-sm font-bold text-slate-400">2022 — 2024</span>
                            <h3 className="text-xl font-bold mt-1">Master's in Software Architecture</h3>
                            <p className="font-medium italic" style={{ color: brandColor }}>University of Technology</p>
                            <p className="mt-3 text-slate-600 leading-relaxed">
                                Specialized in Cloud Computing, Microservices, and Advanced Web Technologies. 
                                Graduated with honors for my thesis on scalable React architectures.
                            </p>
                        </div>

                        <div className="relative pl-8 group">
                            <div className="absolute w-4 h-4 bg-slate-200 rounded-full -left-[9px] top-1.5 ring-4 ring-white group-hover:bg-opacity-80 transition-colors"
                                 style={{ backgroundColor: `${brandColor}80` }} // Opacity 50%
                            ></div>
                            <span className="text-sm font-bold text-slate-400">2019 — 2022</span>
                            <h3 className="text-xl font-bold mt-1">Bachelor of Computer Science</h3>
                            <p className="font-medium italic" style={{ color: brandColor }}>Polytechnic Institute</p>
                            <p className="mt-3 text-slate-600 leading-relaxed">
                                Focused on algorithms, data structures, and object-oriented programming. 
                                Participated in several hackathons and student-led coding projects.
                            </p>
                        </div>
                        <div className="relative pl-8 group">
                            <div className="absolute w-4 h-4 bg-slate-200 rounded-full -left-[9px] top-1.5 ring-4 ring-white group-hover:bg-opacity-80 transition-colors"
                                 style={{ backgroundColor: `${brandColor}80` }} // Opacity 50%
                            ></div>
                            <span className="text-sm font-bold text-slate-400">2019 — 2022</span>
                            <h3 className="text-xl font-bold mt-1">Bachelor of Computer Science</h3>
                            <p className="font-medium italic" style={{ color: brandColor }}>Polytechnic Institute</p>
                            <p className="mt-3 text-slate-600 leading-relaxed">
                                Focused on algorithms, data structures, and object-oriented programming. 
                                Participated in several hackathons and student-led coding projects.
                            </p>
                        </div>
                        <div className="relative pl-8 group">
                            <div className="absolute w-4 h-4 bg-slate-200 rounded-full -left-[9px] top-1.5 ring-4 ring-white group-hover:bg-opacity-80 transition-colors"
                                 style={{ backgroundColor: `${brandColor}80` }} // Opacity 50%
                            ></div>
                            <span className="text-sm font-bold text-slate-400">2019 — 2022</span>
                            <h3 className="text-xl font-bold mt-1">Bachelor of Computer Science</h3>
                            <p className="font-medium italic" style={{ color: brandColor }}>Polytechnic Institute</p>
                            <p className="mt-3 text-slate-600 leading-relaxed">
                                Focused on algorithms, data structures, and object-oriented programming. 
                                Participated in several hackathons and student-led coding projects.
                            </p>
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
                             <span className="text-4xl font-bold">MADES</span>
                        </div>
                        <div className="h-40 rounded-2xl flex items-center justify-center text-white" style={{ backgroundColor: brandColor }}>
                             <span className="text-4xl font-bold">SPORTS</span>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- CONTACT FOOTER --- */}
            <footer className="py-24 bg-slate-50 border-t border-slate-100 text-center">
                <h2 className="text-2xl font-bold mb-8">Want to collaborate?</h2>
                <a 
                    href="mailto:contact@yourdomain.com" 
                    className="inline-block px-10 py-4 text-white font-bold rounded-full transition-all shadow-lg hover:brightness-110"
                    style={{ backgroundColor: brandColor }}
                >
                    Get In Touch
                </a>
            </footer>
        </div>
    );
};

export default About;