import { useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import '../index.css';
import Nav from '../components/Nav';

// Tes imports d'images
import S1 from '../assets/img/S1.jpg';
import S2 from '../assets/img/S2.jpg';
import S3 from '../assets/img/S3.jpg';
import S4 from '../assets/img/S4.jpg';
import S5 from '../assets/img/S5.jpg';
import S6 from '../assets/img/S6.jpg';
import S7 from '../assets/img/S7.jpg';
import S8 from '../assets/img/S8.jpg';
import S9 from '../assets/img/S9.jpg';
import S10 from '../assets/img/S10.jpg';
import S11 from '../assets/img/S11.png';
import S12 from '../assets/img/S12.png';

export default function Myproject() {
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState<{img: string, title: string} | null>(null);
  const brandColor = "#8DC63F";

  const handleOpen = (item: {img: string, title: string}) => {
    setActiveImg(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='min-h-screen bg-slate-50 font-sans'>
      <Nav />
      
      {/* --- HEADER SECTION --- */}
      <header className="bg-white border-b border-slate-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-2xl">
                    <h2 className="font-black text-5xl md:text-8xl text-[#333333] tracking-tighter leading-none mb-6">
                        Latest <span style={{ color: brandColor }}>Work.</span>
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        A collection of visual experiences, brand identities, and digital interfaces 
                        crafted for impact and performance.
                    </p>
                </div>
                <div className="flex gap-4 mb-2">
                    <div className="text-right">
                        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Total Projects</p>
                        <p className="text-3xl font-black">{itemData.length}</p>
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* --- MASONRY GALLERY SECTION --- */}
      <main className='max-w-7xl mx-auto px-4 py-16'>
        <Box sx={{ width: '100%', minHeight: 800 }}>
          <Masonry 
            columns={{ xs: 1, sm: 2, md: 3 }} 
            spacing={3}
          >
            {itemData.map((item, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => handleOpen(item)}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span 
                            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-2 inline-block"
                            style={{ backgroundColor: brandColor }}
                        >
                            Project
                        </span>
                        <h4 className="text-white text-xl font-bold italic">{item.title}</h4>
                    </div>
                </div>
              </div>
            ))}
          </Masonry>
        </Box>
      </main>

      {/* --- MODAL (LIGHTBOX) --- */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            style: { backgroundColor: 'rgba(0, 0, 0, 0.92)' } 
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            outline: 'none',
            maxWidth: '95vw',
            maxHeight: '95vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <IconButton 
              onClick={handleClose}
              sx={{ 
                position: 'absolute', 
                top: -50, 
                right: { xs: 0, md: -50 }, 
                color: 'white',
                '&:hover': { color: brandColor }
              }}
            >
              <CloseIcon sx={{ fontSize: 40 }} />
            </IconButton>

            {activeImg && (
              <div className="relative">
                <img 
                    src={activeImg.img} 
                    alt={activeImg.title}
                    style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxHeight: '80vh', 
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 0 100px rgba(0,0,0,0.5)'
                    }}
                />
                <div className="mt-6 text-center">
                    <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
                        {activeImg.title}
                    </h3>
                    <div className="w-12 h-1 mx-auto mt-2 rounded-full" style={{ backgroundColor: brandColor }}></div>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>

      {/* --- FOOTER CTA --- */}
      <footer className="py-20 text-center bg-white border-t border-slate-100">
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] mb-4">Want to see more?</p>
          <button 
            className="px-10 py-4 rounded-full text-white font-black text-lg transition-all hover:scale-105 shadow-xl shadow-lime-200"
            style={{ backgroundColor: brandColor }}
          >
            LET'S WORK TOGETHER
          </button>
      </footer>
    </div>
  );
}

const itemData = [
  { img: S1, title: 'Visual Identity' },
  { img: S2, title: 'Brand Poster' },
  { img: S3, title: 'Concept Art' },
  { img: S4, title: 'Digital Design' },
  { img: S5, title: 'Event Media' },
  { img: S6, title: 'UX Research' },
  { img: S7, title: 'Graphic System' },
  { img: S8, title: 'Social Media' },
  { img: S9, title: 'Photography' },
  { img: S10, title: 'Modern UI' },
  { img: S11, title: 'Mobile App' },
  { img: S12, title: 'Web Experience' },
  { img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e', title: 'Road Trip Branding' },
  { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Street Fashion' },
  { img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af', title: 'Food Styling' },
  { img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7', title: 'Nature Photography' },
  { img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6', title: 'Urban Motion' },
];