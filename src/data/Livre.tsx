import l1 from '../assets/img/livre/Livre-19.jpg';
import l2 from '../assets/img/livre/Livre-01.jpg';
import l3 from '../assets/img/livre/Livre-02.jpg';
import l4 from '../assets/img/livre/Livre-03.jpg';
import l5 from '../assets/img/livre/Livre-04.jpg';
import l6 from '../assets/img/livre/Livre-05.jpg';
import l7 from '../assets/img/livre/Livre-06.jpg';
import l8 from '../assets/img/livre/Livre-07.jpg';
import l9 from '../assets/img/livre/Livre-08.jpg';
import l10 from '../assets/img/livre/Livre-09.jpg';
import l11 from '../assets/img/livre/Livre-10.jpg';
import l12 from '../assets/img/livre/Livre-11.jpg';
import l13 from '../assets/img/livre/Livre-12.jpg';
import l14 from '../assets/img/livre/Livre-13.jpg';
import l15 from '../assets/img/livre/Livre-14.jpg';
import l16 from '../assets/img/livre/Livre-15.jpg';



interface LivrePage {
  id: number;
  image: string;
  title: string;
}


export const livrePages: LivrePage[] = [
  { id: 1, image: l1, title: "Couverture" },
  { id: 2, image: l2, title: "Sommaire" },
  { id: 3, image: l3, title: "Édito" },
  { id: 4, image: l4, title: "Article 1" },
  { id: 5, image: l5, title: "Article 2" },
  { id: 6, image: l6, title: "Dos" },
  { id: 7, image: l7, title: "Page 7" },
  { id: 8, image: l8, title: "Page 8" },
  { id: 9, image: l9, title: "Page 9" },
  { id: 10, image: l10, title: "Page 10" },
  { id: 11, image: l11, title: "Page 11" },
  { id: 12, image: l12, title: "Page 12" },
  { id: 13, image: l13, title: "Page 13" },
  { id: 14, image: l14, title: "Page 14" },
  { id: 15, image: l15, title: "Page 15" },
  { id: 16, image:l16 , title:"Page 16"}
];
