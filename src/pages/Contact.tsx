import React from "react";
import Nav from '../components/Nav';
import '../index.css';

const Contact: React.FC = () => {
    const brandColor = "#8DC63F";

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Nav />

            <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                    
                    {/* --- LEFT SIDE: TEXT & INFO --- */}
                    <section>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                            Let's build <br />
                            something <span style={{ color: brandColor }}>great.</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-md leading-relaxed mb-12">
                            Have a project in mind? Or just want to say hi? 
                            I'm always open to discussing new creative opportunities and innovative ideas.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Email me</h4>
                                <a href="mailto:dasilvadevon51@gmail.com" className="text-2xl font-bold hover:opacity-70 transition-opacity underline decoration-1 underline-offset-8">
                                    dasilvadevon51@gmail.com
                                </a>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Location</h4>
                                <p className="text-2xl font-bold italic">Based in Takoma Park, Maryland, Remote Worldwide</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Follow me</h4>
                                <div className="flex gap-6">
                                    {['Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                                        <a key={social} href="#" className="font-bold border-b-2 border-slate-100 hover:border-[#8DC63F] transition-all pb-1">
                                            {social}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- RIGHT SIDE: CONTACT FORM --- */}
                    <section className="bg-slate-50 p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold mb-2 ml-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        className="bg-white border-none rounded-xl p-4 shadow-inner focus:ring-2 focus:ring-[#8DC63F] outline-none transition-all"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold mb-2 ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="john@example.com"
                                        className="bg-white border-none rounded-xl p-4 shadow-inner focus:ring-2 focus:ring-[#8DC63F] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-bold mb-2 ml-1">Subject</label>
                                <select className="bg-white border-none rounded-xl p-4 shadow-inner focus:ring-2 focus:ring-[#8DC63F] outline-none transition-all appearance-none">
                                    <option>UI/UX Design Project</option>
                                    <option>Brand Identity</option>
                                    <option>General Inquiry</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-bold mb-2 ml-1">Message</label>
                                <textarea 
                                    rows={5}
                                    placeholder="Tell me more about your project..."
                                    className="bg-white border-none rounded-xl p-4 shadow-inner focus:ring-2 focus:ring-[#8DC63F] outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className="w-full py-4 rounded-xl text-white font-black text-lg shadow-lg hover:brightness-110 hover:translate-y-[-2px] active:translate-y-[0px] transition-all"
                                style={{ backgroundColor: brandColor }}
                            >
                                Send Message
                            </button>
                        </form>
                    </section>

                </div>
            </main>

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

export default Contact;