import { Product } from "../../src/interfaces";
import { take } from 'lodash';

export function generateProductData(id: string, title: string, l: number = 0, a: number = 0, b: number = 0): Product {
  return {
    id: `${id}`,
    title,
    gender_id: 'MAN',
    composition: '100% Coton',
    sleeve: '',
    photo: `image1.lacoste.com/${id}`,
    url: 'http://',
    lab: {
      l, a, b
    }
  };
}

export function generateCSVDownloadResponse(numProducts: number) {
  const csv: string = `id;title;gender_id;composition;sleeve;photo;url
L1212-00-001;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_001_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=001
L1212-00-031;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_031_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=031
L1212-00-132;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_132_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=132
L1212-00-166;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_166_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=166
L1212-00-240;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_240_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=240
L1212-00-476;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_476_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=476
L1212-00-KC8;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_KC8_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=KC8
L1212-00-T01;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_T01_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=T01
L1212-00-T03;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_T03_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=T03
L1212-EC-000;Polo personnalisé L.12.12 Lacoste;MAN;100% Coton;;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_000_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/bestsellers/polo-personnalise-l.12.12-lacoste/L1212-EC.html?dwvar_L1212-EC_color=000
L1230-00-001;Polo regular fit Tennis Lacoste SPORT en maille ultra-légère ;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1230_001_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/sport/homme/polos/polo-regular-fit-tennis-lacoste-sport-en-maille-ultra-legere-/L1230-00.html?dwvar_L1230-00_color=001
L1230-00-031;Polo regular fit Tennis Lacoste SPORT en maille ultra-légère ;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1230_031_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/sport/homme/polos/polo-regular-fit-tennis-lacoste-sport-en-maille-ultra-legere-/L1230-00.html?dwvar_L1230-00_color=031
L1230-00-166;Polo regular fit Tennis Lacoste SPORT en maille ultra-légère ;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1230_166_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/sport/homme/polos/polo-regular-fit-tennis-lacoste-sport-en-maille-ultra-legere-/L1230-00.html?dwvar_L1230-00_color=166
L1264-00-CCA;Polo Lacoste L.12.12 chiné;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1264_CCA_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-chine/L1264-00.html?dwvar_L1264-00_color=CCA
L1312-00-001;Polo Lacoste L.12.12 à manches longues;MAN;100% Coton;Manches longues;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1312_001_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-a-manches-longues/L1312-00.html?dwvar_L1312-00_color=001
L1312-00-031;Polo Lacoste L.12.12 à manches longues;MAN;100% Coton;Manches longues;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1312_031_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-a-manches-longues/L1312-00.html?dwvar_L1312-00_color=031
L1312-00-166;Polo Lacoste L.12.12 à manches longues;MAN;100% Coton;Manches longues;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1312_166_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-a-manches-longues/L1312-00.html?dwvar_L1312-00_color=166
L1312-00-240;Polo Lacoste L.12.12 à manches longues;MAN;100% Coton;Manches longues;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1312_240_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-a-manches-longues/L1312-00.html?dwvar_L1312-00_color=240
L1312-00-476;Polo Lacoste L.12.12 à manches longues;MAN;100% Coton;Manches longues;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1312_476_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-a-manches-longues/L1312-00.html?dwvar_L1312-00_color=476
PH3468-00-001;Polo Lacoste regular fit uni avec poche;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH3468_001_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-regular-fit-uni-avec-poche/PH3468-00.html?dwvar_PH3468-00_color=001
PH3468-00-031;Polo Lacoste regular fit uni avec poche;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH3468_031_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-regular-fit-uni-avec-poche/PH3468-00.html?dwvar_PH3468-00_color=031
PH3468-00-166;Polo Lacoste regular fit uni avec poche;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH3468_166_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-regular-fit-uni-avec-poche/PH3468-00.html?dwvar_PH3468-00_color=166
PH3468-00-476;Polo Lacoste regular fit uni avec poche;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH3468_476_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-regular-fit-uni-avec-poche/PH3468-00.html?dwvar_PH3468-00_color=476
PH4012-00-001;Polo Lacoste slim fit en petit piqué uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4012_001_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-uni/PH4012-00.html?dwvar_PH4012-00_color=001
PH4012-00-031;Polo Lacoste slim fit en petit piqué uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4012_031_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-uni/PH4012-00.html?dwvar_PH4012-00_color=031
PH4012-00-166;Polo Lacoste slim fit en petit piqué uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4012_166_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-uni/PH4012-00.html?dwvar_PH4012-00_color=166
PH4012-00-240;Polo Lacoste slim fit en petit piqué uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4012_240_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-uni/PH4012-00.html?dwvar_PH4012-00_color=240
PH4012-00-476;Polo Lacoste slim fit en petit piqué uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4012_476_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-uni/PH4012-00.html?dwvar_PH4012-00_color=476
PH4012-00-CCA;Polo Lacoste slim fit en petit piqué uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4012_CCA_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-uni/PH4012-00.html?dwvar_PH4012-00_color=CCA
PH4012-00-T01;Polo Lacoste slim fit en petit piqué uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4012_T01_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-uni/PH4012-00.html?dwvar_PH4012-00_color=T01
PH4014-00-001;Polo Lacoste slim fit en petit piqué stretch uni;MAN;6% Elasthanne;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4014_001_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-stretch-uni/PH4014-00.html?dwvar_PH4014-00_color=001
PH4014-00-031;Polo Lacoste slim fit en petit piqué stretch uni;MAN;6% Elasthanne;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4014_031_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-stretch-uni/PH4014-00.html?dwvar_PH4014-00_color=031
PH4014-00-166;Polo Lacoste slim fit en petit piqué stretch uni;MAN;6% Elasthanne;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4014_166_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-stretch-uni/PH4014-00.html?dwvar_PH4014-00_color=166
PH4014-00-240;Polo Lacoste slim fit en petit piqué stretch uni;MAN;6% Elasthanne;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4014_240_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-stretch-uni/PH4014-00.html?dwvar_PH4014-00_color=240
PH4014-00-476;Polo Lacoste slim fit en petit piqué stretch uni;MAN;6% Elasthanne;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4014_476_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-stretch-uni/PH4014-00.html?dwvar_PH4014-00_color=476
PH4014-00-CCA;Polo Lacoste slim fit en petit piqué stretch uni;MAN;6% Elasthanne;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4014_CCA_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-slim-fit-en-petit-pique-stretch-uni/PH4014-00.html?dwvar_PH4014-00_color=CCA
PH5692-00-3WH;Polo color block Lacoste LIVE Edition AGI & SAM;MAN;100% Coton;;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH5692_3WH_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/collection-agi-and-sam/polo-color-block-lacoste-live-edition-agi-sam/PH5692-00.html?dwvar_PH5692-00_color=3WH
PH6812-00-QRN;Polo Lacoste Grande Taille regular fit à rayures ;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH6812_QRN_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/grandes-tailles/polo-lacoste-grande-taille-regular-fit-a-rayures-/PH6812-00.html?dwvar_PH6812-00_color=QRN
L1212-00-CNQ;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_CNQ_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=CNQ
L1212-00-JDY;Polo Lacoste L.12.12 uni;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/L1212_JDY_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-l.12.12-uni/L1212-00.html?dwvar_L1212-00_color=JDY
PJ2801-00-LD3;Polo Enfant Lacoste en mini piqué chiné;GIR;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PJ2801_LD3_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/enfant/fille/polos/polo-enfant-lacoste-en-mini-pique-chine/PJ2801-00.html?dwvar_PJ2801-00_color=LD3
PJ2801-00-T91;Polo Enfant Lacoste en mini piqué chiné;GIR;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PJ2801_T91_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/enfant/fille/polos/polo-enfant-lacoste-en-mini-pique-chine/PJ2801-00.html?dwvar_PJ2801-00_color=T91
PJ2909-00-001;Polo Lacoste Garçon en petit piqué uni;BOY;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PJ2909_001_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/enfant/garcon/polos/polo-lacoste-garcon-en-petit-pique-uni/PJ2909-00.html?dwvar_PJ2909-00_color=001
PJ2909-00-031;Polo Lacoste Garçon en petit piqué uni;BOY;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PJ2909_031_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/enfant/garcon/polos/polo-lacoste-garcon-en-petit-pique-uni/PJ2909-00.html?dwvar_PJ2909-00_color=031
PJ2909-00-CNQ;Polo Lacoste Garçon en petit piqué uni;BOY;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PJ2909_CNQ_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/enfant/garcon/polos/polo-lacoste-garcon-en-petit-pique-uni/PJ2909-00.html?dwvar_PJ2909-00_color=CNQ
PJ2909-00-166;Polo Lacoste Garçon en petit piqué uni;BOY;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PJ2909_166_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/enfant/garcon/polos/polo-lacoste-garcon-en-petit-pique-uni/PJ2909-00.html?dwvar_PJ2909-00_color=166
PJ2909-00-240;Polo Lacoste Garçon en petit piqué uni;BOY;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PJ2909_240_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/enfant/garcon/polos/polo-lacoste-garcon-en-petit-pique-uni/PJ2909-00.html?dwvar_PJ2909-00_color=240
PJ2909-00-T01;Polo Lacoste Garçon en petit piqué uni;BOY;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PJ2909_T01_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/enfant/garcon/polos/polo-lacoste-garcon-en-petit-pique-uni/PJ2909-00.html?dwvar_PJ2909-00_color=T01
PJ2909-00-T03;Polo Lacoste Garçon en petit piqué uni;BOY;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PJ2909_T03_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/enfant/garcon/polos/polo-lacoste-garcon-en-petit-pique-uni/PJ2909-00.html?dwvar_PJ2909-00_color=T03
DH8003-00-U70;Polo Lacoste Collection pour Novak Djokovic - Édition Terre Battue Exclusive;MAN;100% Polyester;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/DH8003_U70_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-collection-pour-novak-djokovic---edition-terre-battue-exclusive/DH8003-00.html?dwvar_DH8003-00_color=U70
DH3884-00-001;Polo Lacoste Collection pour Novak Djokovic -  Exclusive Green Edition;MAN;100% Polyester;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/DH3884_001_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-lacoste-collection-pour-novak-djokovic----exclusive-green-edition/DH3884-00.html?dwvar_DH3884-00_color=001
PH0118-00-R26;Polo L.12.12 Lacoste à manches longues avec détails vichy;MAN;100% Coton;Manches longues;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH0118_R26_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-l.12.12-lacoste-a-manches-longues-avec-details-vichy/PH0118-00.html?dwvar_PH0118-00_color=R26
PH0118-00-5EN;Polo L.12.12 Lacoste à manches longues avec détails vichy;MAN;100% Coton;Manches longues;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH0118_5EN_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-l.12.12-lacoste-a-manches-longues-avec-details-vichy/PH0118-00.html?dwvar_PH0118-00_color=5EN
PH4013-00-SVG;Polo slim fit Lacoste à manches longues en petit piqué uni;MAN;100% Coton;Manches longues;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4013_SVG_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-a-manches-longues-en-petit-pique-uni/PH4013-00.html?dwvar_PH4013-00_color=SVG
PH4013-00-T35;Polo slim fit Lacoste à manches longues en petit piqué uni;MAN;100% Coton;Manches longues;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4013_T35_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-a-manches-longues-en-petit-pique-uni/PH4013-00.html?dwvar_PH4013-00_color=T35
PH4013-00-JEW;Polo slim fit Lacoste à manches longues en petit piqué uni;MAN;100% Coton;Manches longues;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH4013_JEW_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-a-manches-longues-en-petit-pique-uni/PH4013-00.html?dwvar_PH4013-00_color=JEW
PH7109-00-NMZ;Polo regular fit Lacoste en petit piqué de coton rayé;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7109_NMZ_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-regular-fit-lacoste-en-petit-pique-de-coton-raye/PH7109-00.html?dwvar_PH7109-00_color=NMZ
PH7110-00-R4V;Polo regular fit Lacoste en petit piqué à rayures décalées et colorées;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7110_R4V_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-regular-fit-lacoste-en-petit-pique-a-rayures-decalees-et-colorees/PH7110-00.html?dwvar_PH7110-00_color=R4V
PH7109-00-YC1;Polo regular fit Lacoste en petit piqué de coton rayé;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7109_YC1_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-regular-fit-lacoste-en-petit-pique-de-coton-raye/PH7109-00.html?dwvar_PH7109-00_color=YC1
PH7119-00-031;Polo slim fit Lacoste en petit piqué de coton 2 fils avec piping;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7119_031_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-petit-pique-de-coton-2-fils-avec-piping/PH7119-00.html?dwvar_PH7119-00_color=031
PH7120-00-6RP;Polo slim fit Lacoste en piqué lourd de coton avec piping;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7120_6RP_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-pique-lourd-de-coton-avec-piping/PH7120-00.html?dwvar_PH7120-00_color=6RP
PH7119-00-SVY;Polo slim fit Lacoste en petit piqué de coton 2 fils avec piping;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7119_SVY_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-petit-pique-de-coton-2-fils-avec-piping/PH7119-00.html?dwvar_PH7119-00_color=SVY
PH7115-00-HHW;Polo slim fit Lacoste en piqué caviar bicolore;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7115_HHW_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-pique-caviar-bicolore/PH7115-00.html?dwvar_PH7115-00_color=HHW
PH7130-00-JJE;Polo slim fit Lacoste en mini piqué stretch avec imprimé graphique ;MAN;6% Elasthanne;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7130_JJE_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-mini-pique-stretch-avec-imprime-graphique-/PH7130-00.html?dwvar_PH7130-00_color=JJE
PH7130-00-AU8;Polo slim fit Lacoste en mini piqué stretch avec imprimé graphique ;MAN;6% Elasthanne;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7130_AU8_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-mini-pique-stretch-avec-imprime-graphique-/PH7130-00.html?dwvar_PH7130-00_color=AU8
PH7120-00-DU9;Polo slim fit Lacoste en piqué lourd de coton avec piping;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7120_DU9_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-pique-lourd-de-coton-avec-piping/PH7120-00.html?dwvar_PH7120-00_color=DU9
PH7120-00-QNC;Polo slim fit Lacoste en piqué lourd de coton avec piping;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7120_QNC_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-pique-lourd-de-coton-avec-piping/PH7120-00.html?dwvar_PH7120-00_color=QNC
PH7130-00-DZH;Polo slim fit Lacoste en mini piqué stretch avec imprimé graphique ;MAN;6% Elasthanne;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7130_DZH_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-mini-pique-stretch-avec-imprime-graphique-/PH7130-00.html?dwvar_PH7130-00_color=DZH
PH7131-00-F9F;Polo slim fit Lacoste en piqué noppé avec détails rayés color block;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7131_F9F_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-pique-noppe-avec-details-rayes-color-block/PH7131-00.html?dwvar_PH7131-00_color=F9F
PH7130-00-Q63;Polo slim fit Lacoste en mini piqué stretch avec imprimé graphique ;MAN;6% Elasthanne;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7130_Q63_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-mini-pique-stretch-avec-imprime-graphique-/PH7130-00.html?dwvar_PH7130-00_color=Q63
PH7131-00-001;Polo slim fit Lacoste en piqué noppé avec détails rayés color block;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7131_001_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-pique-noppe-avec-details-rayes-color-block/PH7131-00.html?dwvar_PH7131-00_color=001
PH7119-00-S6N;Polo slim fit Lacoste en petit piqué de coton 2 fils avec piping;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/PH7119_S6N_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-slim-fit-lacoste-en-petit-pique-de-coton-2-fils-avec-piping/PH7119-00.html?dwvar_PH7119-00_color=S6N
YH7969-00-031;Polo Tennis Lacoste SPORT en mailles légères manches imprimées;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH7969_031_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-mailles-legeres-manches-imprimees/YH7969-00.html?dwvar_YH7969-00_color=031
YH7993-00-RL7;Polo Tennis Lacoste SPORT en coton ultra léger color block;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH7993_RL7_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-coton-ultra-leger-color-block/YH7993-00.html?dwvar_YH7993-00_color=RL7
YH8032-00-KFP;Polo Tennis Lacoste SPORT en mailles ultra légères color block;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH8032_KFP_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-mailles-ultra-legeres-color-block/YH8032-00.html?dwvar_YH8032-00_color=KFP
YH7993-00-U7Q;Polo Tennis Lacoste SPORT en coton ultra léger color block;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH7993_U7Q_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-coton-ultra-leger-color-block/YH7993-00.html?dwvar_YH7993-00_color=U7Q
YH7995-00-U2Q;Polo Tennis Lacoste SPORT en mailles légères et mesh contrasté;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH7995_U2Q_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-mailles-legeres-et-mesh-contraste/YH7995-00.html?dwvar_YH7995-00_color=U2Q
YH8129-00-RL7;Polo Tennis Lacoste SPORT en maille ultra légère rayée;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH8129_RL7_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-maille-ultra-legere-rayee/YH8129-00.html?dwvar_YH8129-00_color=RL7
YH7993-00-U3D;Polo Tennis Lacoste SPORT en coton ultra léger color block;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH7993_U3D_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-coton-ultra-leger-color-block/YH7993-00.html?dwvar_YH7993-00_color=U3D
YH7993-00-U5V;Polo Tennis Lacoste SPORT en coton ultra léger color block;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH7993_U5V_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-coton-ultra-leger-color-block/YH7993-00.html?dwvar_YH7993-00_color=U5V
YH8129-00-U7Q;Polo Tennis Lacoste SPORT en maille ultra légère rayée;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH8129_U7Q_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-maille-ultra-legere-rayee/YH8129-00.html?dwvar_YH8129-00_color=U7Q
YH8129-00-RJQ;Polo Tennis Lacoste SPORT en maille ultra légère rayée;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH8129_RJQ_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-maille-ultra-legere-rayee/YH8129-00.html?dwvar_YH8129-00_color=RJQ
YH8032-00-RLR;Polo Tennis Lacoste SPORT en mailles ultra légères color block;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH8032_RLR_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-tennis-lacoste-sport-en-mailles-ultra-legeres-color-block/YH8032-00.html?dwvar_YH8032-00_color=RLR
YH8131-00-166;Polo Golf Lacoste SPORT en mailles ultra légères imprimées;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH8131_166_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-golf-lacoste-sport-en-mailles-ultra-legeres-imprimees/YH8131-00.html?dwvar_YH8131-00_color=166
YH8131-00-5MK;Polo Golf Lacoste SPORT en mailles ultra légères imprimées;MAN;100% Coton;Manches courtes;//image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/default/YH8131_5MK_24.jpg?sw=458&sh=443;https://www.lacoste.com/fr/lacoste/homme/vetements/polos/polo-golf-lacoste-sport-en-mailles-ultra-legeres-imprimees/YH8131-00.html?dwvar_YH8131-00_color=5MK`;
  const rows: Array<string> = csv.split('\n');
  return new Buffer(take(rows, numProducts + 1).join('\r\n'), 'utf8');
}


export function generateGoogleVisionResponse(r: number, g: number, b: number): any {
  return [{
    faceAnnotations: [],
    landmarkAnnotations: [],
    logoAnnotations: [],
    labelAnnotations: [],
    textAnnotations: [],
    safeSearchAnnotation: null,
    imagePropertiesAnnotation:
      {
        dominantColors:
          {
            colors:
              [{
                color: {red: r, green: g, blue: b, alpha: null},
                score: 0.8358398675918579,
                pixelFraction: 0.9921244978904724
              },
                {
                  color: {red: 122, green: 122, blue: 122, alpha: null},
                  score: 0.0037950356490910053,
                  pixelFraction: 0.00006300403038039804
                },
                {
                  color: {red: 208, green: 208, blue: 208, alpha: null},
                  score: 0.15663491189479828,
                  pixelFraction: 0.007686492055654526
                },
                {
                  color: {red: 94, green: 94, blue: 94, alpha: null},
                  score: 0.003730170661583543,
                  pixelFraction: 0.00006300403038039804
                },
                {
                  color: {red: 146, green: 146, blue: 146, alpha: null},
                  score: 5.3177063447096273e-11,
                  pixelFraction: 0.00006300403038039804
                }]
          }
      },
    error: null,
    cropHintsAnnotation:
      {
        cropHints:
          [{
            boundingPoly:
              {
                vertices:
                  [{x: 0, y: 0},
                    {x: 457, y: 0},
                    {x: 457, y: 442},
                    {x: 0, y: 442}],
                normalizedVertices: []
              },
            confidence: 0.7999999523162842,
            importanceFraction: 1
          }]
      },
    fullTextAnnotation: null,
    webDetection: null,
    context: null
  }
  ];
}
