// src/App.tsx
import Gallery from './components/Gallery';
import logo from '../src/assets/img/logo_en.svg';
import poster from '../src/assets/img/poster.png';
import { myProjects } from './data/projects';
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans   ">
      {/* Navigation / Header */}
      <nav className="p-8 flex justify-between items-center border-b border-gray-100">
        <img src={logo} alt="Logo Design.PRO" className="w-30 h-auto" />
        <ul className="flex justify-center items-center gap-8 text-sm font-medium text-gray-600">
          <li className="hover:text-black cursor-pointer">Projects</li>
          <li className="hover:text-black cursor-pointer">About me</li>
          <li className="px-4 py-2 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 transition">
            Contact me
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="pb-20 px-8 max-w-6xl mx-auto ">
        <div className='flex items-center justify-between '>
           <div>
            <h2 className="font-bold md:text-7xl text-[#333333] leading-tight">
              Hi, I'm Devon — <span className="text-gray-400">Graphic Designer</span> <br /> 
              <span className="text-gray-400">& UI/UX.</span>
            </h2>
            <p className="mt-6 text-xl text-gray-500 max-w-2xl">
              Expert in brand identity and premium UI/UX design. Transforming your vision into unforgettable digital journeys.
            </p>
          </div>
          <img src={poster} alt="poster" className='w-100 h-auto' />
        </div>
       
      </header>

      {/* Gallery Section */}
      <main className="max-w-7xl mx-auto pb-20 bg-gray-500 rounded-3xl">
        <div className="px-8 mb-10">
          <h3 className="text-2xl uppercase pt-10 font-bold">Selected projects</h3>
        </div>
        <Gallery projects={myProjects} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-10 text-center border-t border-gray-100">
        <p className="text-gray-400 text-sm">© 2026 — Design Portfolio. Develop by D@scommunication .</p>
      </footer>
    </div>
  );
}

export default App;