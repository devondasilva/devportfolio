
import l1 from '../assets/img/log.svg';
import l2 from '../assets/img/logheri.png';
import l3 from '../assets/img/logcal.jpg';
import l4 from '../assets/img/logomades.png';

interface Logo {
  id: number;
  img: string;
  title: string;
  client: string;
  category: string;
}



const LOGOS: Logo[] = [
  { id: 1, img: l1, title: "Visual Identity", client: "DAS COMMUNICATION", category: "Agency" },
  { id: 2, img: l2, title: "Fashion Branding", client: "Heritage", category: "Mode Fashion Brand" },
  { id: 3, img: l3, title: "General services", client: "Benin", category: "Transit" },
  { id: 4, img: l4, title: "Minimalist Mark", client: "MADES", category: "Sport management" },
];

export  { LOGOS };