import acem from '../assets/acem.jpg'
import alcatra from '../assets/alcatra.webp'
import capa from '../assets/capa.jpg'
import contra from '../assets/contra.webp'
import costela from '../assets/costela.jpg'
import coxaomole from '../assets/coxao-mole.jpg'
import coxaoduro from '../assets/coxao-fora.jpg'
import cupim from '../assets/cupim.webp'
import entranha from '../assets/entranha.webp'
import entrecote from '../assets/entrecot.webp'
import fraldinha from '../assets/fraldinha.webp'
import lagarto from '../assets/lagarto.png'
import maminha from '../assets/maminha.webp'
import mignon from '../assets/mignon.png'
import mocoto from '../assets/mocoto.jpg'
import musculo from '../assets/musculo.jpg'
import paleta from '../assets/paleta.webp'
import patinho from '../assets/patinho.png'
import peito from '../assets/peito.jpg'
import pescoco from '../assets/pescoco.jpg'
import picanha from '../assets/picanha.webp'
import vazio from '../assets/vazio.webp'

/**
 * Mapeamento de cortes de carne bovina para uso com o componente MeatMapSVG.
 * A chave (key) deve corresponder ao 'id' do elemento <path> no SVG.
 */
export const CutsMap = {
    // 1. Músculo Dianteiro
    1: {
        name: 'Músculo Dianteiro',
        description: 'Ideal para caldos, ensopados e picadinhos. Demora um pouco mais para cozinhar, mas fica macio e saboroso.',
        number: 1,
        Image: musculo,
        video: 'https://www.youtube.com/embed/i93iAhn-0LQ?si=7xsbZhe8jlNs228z',

    },
    // 2. Peito
    2: {
        name: 'Peito',
        description: 'Usado para cozidos, caldos, recheios e carne de panela e assado. Requer cozimento longo, mas é muito saboroso.',
        number: 2,
        Image: peito,
        video: 'https://www.youtube.com/embed/DybQXDNnz7w?si=WqGjkenWiml8zilD',
    },
    // 3. Pescoço
    3: {
        name: 'Pescoço',
        description: 'Carne com maior teor de gordura. Excelente para ensopados, caldos e guisados. Ideal para moer.',
        number: 3,
        Image: pescoco,
        video: 'https://www.youtube.com/embed/JHcFK57SqxQ?si=wSQb4_4HcnMGMh3P',
    },
    // 4. Acém
    4: {
        name: 'Acém',
        description: 'Uma carne magra e saborosa. É um dos cortes mais versáteis, usado em ensopados, bifes, refogados e carne moída.',
        number: 4,
        Image: acem,
        video:'https://www.youtube.com/embed/TdWtgD5x3-s?si=oKC9_1FJg3rJ28FJ',
    },
    // 5. Cupim
    5: {
        name: 'Cupim',
        description: 'A parte localizada na corcova do boi (zebu). É uma carne muito saborosa, coberta por gordura, ideal para cozimento longo e churrasco.',
        number: 5,
        Image: cupim,
        video:'https://www.youtube.com/embed/_BW2khbp3y0?si=xBdl_kwTe9OEisHS',
    },
    // 6. Paleta
    6: {
        name: 'Paleta',
        description: 'Inclui diversos subcortes (como o miolo da paleta, ou flat iron). Usado em assados, ensopados e bife de panela.',
        number: 6,
        Image: paleta,
        video:'https://www.youtube.com/embed/tF2fdoZbbpk?si=44_rsUa6NYXWWnnC',
    },
    // 7. Capa do Contrafilé
    7: {
        name: 'Capa do Contrafilé',
        description: 'Corte com bom marmoreio. Pode ser usado em churrascos, mas o ideal é prepará-lo em fogo lento ou como carne de panela.',
        number: 7,
        Image: capa,
        video: 'https://www.youtube.com/embed/r_ba1N5_Eb8?si=Iqm5lJs57IAP3Prh'
    },
    // 8. Entrecôte / Filé da Costela
    8: {
        name: 'Entrecôte',
        description: 'Conhecido internacionalmente como Ribeye. Extremamente macio e saboroso, ótimo para bifes e grelhados.',
        number: 8,
        Image: entrecote,
        video:'https://www.youtube.com/embed/8GeUqQiBriY?si=JMKuyD8fS5090Sex'
    },
    // 9. Contrafilé
    9: {
        name: 'Contrafilé',
        description: 'Carne muito popular para grelhados e churrasco. É macio e tem uma capa de gordura lateral que garante o sabor.',
        number: 9,
        Image: contra,
        video: 'https://www.youtube.com/embed/CaF_rN98Uw0?si=4OrNPHZJf1cZjFAn'
    },
     // 10. Filé Mignon
    10: {
        name: 'Filé Mignon',
        description: 'O corte mais macio da carne bovina. Ideal para bifes altos, medalhões e preparos rápidos, pois tem pouca gordura.',
        number: 10,
        Image: mignon,
        video: "https://www.youtube.com/embed/URB21EcB734?si=mluraKyiN7wNPZad"
    },
    // 11. Fraldinha
    11: {
        name: 'Fraldinha',
        description: 'Corte fino e alongado, com fibras longas. Ótimo para churrasco, assados, espetinhos e recheios.',
        number: 11,
        Image: fraldinha,
        video: 'https://www.youtube.com/embed/fnG7CaeSkNA?si=ckBwDOL3mIcDpdgK',
    },
    // 12. Bife do Vazio
    12: {
        name: 'Bife do Vazio',
        description: 'Similar à Fraldinha, mas mais plano. Excelente para grelhar, absorve bem temperos. Também conhecido como Flank Steak.',
        number: 12,
        Image: vazio,
        video: 'https://www.youtube.com/embed/0gZAYBuhciM?si=c7OZCet_hrHO1Shc'
    },
    // 13. Costela
    13: {
        name: 'Costela',
        description: 'Muito usada em churrascos (costela no fogo de chão) ou cozida lentamente. Sabor intenso devido à gordura e osso.',
        number: 13,
        Image: costela,
        
    },
    // 14. Picanha
    14: {
        name: 'Picanha',
        description: 'O corte mais famoso do churrasco brasileiro. Sua capa de gordura garante a suculência e o sabor inconfundível.',
        number: 14,
        Image: picanha,
    },
    // 15. Alcatra
    15: {
        name: 'Alcatra',
        description: 'Um dos cortes mais nobres. É macio e pouco gorduroso. Ideal para bifes, assados e grelhados.',
        number: 15,
        Image: alcatra,
    },
    // 16. Coxão Mole
    16: {
        name: 'Coxão Mole',
        description: 'Carne macia, excelente para bifes à milanesa, assados, refogados e escalopes.',
        number: 16,
        Image: coxaomole,
    },
    // 17. Maminha
    17: {
        name: 'Maminha',
        description: 'Extremamente macia e suculenta. Ideal para assados, grelhados e recheios, mas deve ser cortada contra a fibra.',
        number: 17,
        Image: maminha,
    },
    // 18. Patinho
    18: {
        name: 'Patinho',
        description: 'Carne magra, usada em bifes, assados, moída e para preparo de pratos rápidos. Também é usado em carpaccios.',
        number: 18,
        Image: patinho,
    },
    // 19. Coxão Duro
    19: {
        name: 'Coxão Duro',
        description: 'Menos macio que o Coxão Mole. Usado em guisados, carne de panela e moída. Pode ser cozido ou assado lentamente.',
        number: 19,
        Image: coxaoduro,
    },
    // 20. Lagarto
    20: {
        name: 'Lagarto',
        description: 'Carne magra e com fibras longas. Ideal para carne de panela, rosbifes, cozidos e saladas de carne.',
        number: 20,
        Image: lagarto,
    },
    // 21. Músculo Traseiro
    21: {
        name: 'Músculo Traseiro',
        description: 'Muito usado em caldos e ensopados, como o famoso Ossobuco. Requer cozimento longo para amaciar.',
        number: 21,
        Image: musculo,
    },
    // 22. Entranha (Diafragma) - Nota: ID original era entranha, mantido para evitar conflito.
    22: {
        name: 'Entranha',
        description: 'Corte fino e saboroso, muito apreciado em churrascos. Cozimento rápido para preservar a maciez.',
        number: 22,
        Image: entranha,
    },
    // 23. Partes da Perna / Jarrete
    23: { // ID genérico, representa a ponta final da perna traseira (Jarrete)
        name: 'Mocotó',
        description: 'Corte da perna, geralmente usado para sopas, caldos e guisados. É a base do Ossobuco.',
        number: 23,
        Image: mocoto,
    },
    // path492, path2096, path2108, path2114: IDs genéricos de contorno ou sem nome específico, ignorados ou agrupados.
};

export default CutsMap;