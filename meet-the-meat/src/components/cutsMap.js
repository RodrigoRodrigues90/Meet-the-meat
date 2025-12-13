/**
 * Mapeamento de cortes de carne bovina para uso com o componente MeatMapSVG.
 * A chave (key) deve corresponder ao 'id' do elemento <path> no SVG.
 */
export const CutsMap = {
    // 1. Músculo Dianteiro
    musculo_dianteiro: {
        name: 'Músculo Dianteiro',
        description: 'Ideal para caldos, ensopados e picadinhos. Demora um pouco mais para cozinhar, mas fica macio e saboroso.',
        number: 1,
    },
    // 2. Peito
    peito: {
        name: 'Peito',
        description: 'Usado para cozidos, caldos, recheios e carne de panela e assado. Requer cozimento longo, mas é muito saboroso.',
        number: 2,
    },
    // 3. Pescoço
    pescoco: {
        name: 'Pescoço',
        description: 'Carne com maior teor de gordura. Excelente para ensopados, caldos e guisados. Ideal para moer.',
        number: 3,
    },
    // 4. Acém
    acem: {
        name: 'Acém',
        description: 'Uma carne magra e saborosa. É um dos cortes mais versáteis, usado em ensopados, bifes, refogados e carne moída.',
        number: 4,
    },
    // 5. Cupim
    cupim: {
        name: 'Cupim',
        description: 'A parte localizada na corcova do boi (zebu). É uma carne muito saborosa, coberta por gordura, ideal para cozimento longo e churrasco.',
        number: 5,
    },
    // 6. Paleta
    paleta: {
        name: 'Paleta',
        description: 'Inclui diversos subcortes (como o miolo da paleta, ou flat iron). Usado em assados, ensopados e bife de panela.',
        number: 6,
    },
    // 7. Capa do Contrafilé
    capa_do_contra_file: {
        name: 'Capa do Contrafilé',
        description: 'Corte com bom marmoreio. Pode ser usado em churrascos, mas o ideal é prepará-lo em fogo lento ou como carne de panela.',
        number: 7,
    },
    // 8. Entrecôte / Filé da Costela
    entrecot: {
        name: 'Entrecôte',
        description: 'Conhecido internacionalmente como Ribeye. Extremamente macio e saboroso, ótimo para bifes e grelhados.',
        number: 8,
    },
    // 9. Contrafilé
    contra_file: {
        name: 'Contrafilé',
        description: 'Carne muito popular para grelhados e churrasco. É macio e tem uma capa de gordura lateral que garante o sabor.',
        number: 9,
    },
     // 10. Filé Mignon
    file_mignon: {
        name: 'Filé Mignon',
        description: 'O corte mais macio da carne bovina. Ideal para bifes altos, medalhões e preparos rápidos, pois tem pouca gordura.',
        number: 10,
    },
    // 11. Fraldinha
    fraldinha: {
        name: 'Fraldinha',
        description: 'Corte fino e alongado, com fibras longas. Ótimo para churrasco, assados, espetinhos e recheios.',
        number: 11,
    },
    // 12. Bife do Vazio
    bife_do_vazio: {
        name: 'Bife do Vazio',
        description: 'Similar à Fraldinha, mas mais plano. Excelente para grelhar, absorve bem temperos. Também conhecido como Flank Steak.',
        number: 12,
    },
    // 13. Costela
    costela: {
        name: 'Costela',
        description: 'Muito usada em churrascos (costela no fogo de chão) ou cozida lentamente. Sabor intenso devido à gordura e osso.',
        number: 13,
    },
    // 14. Picanha
    picanha: {
        name: 'Picanha',
        description: 'O corte mais famoso do churrasco brasileiro. Sua capa de gordura garante a suculência e o sabor inconfundível.',
        number: 14,
    },
    // 15. Alcatra
    alcatra: {
        name: 'Alcatra',
        description: 'Um dos cortes mais nobres. É macio e pouco gorduroso. Ideal para bifes, assados e grelhados.',
        number: 15,
    },
    // 16. Coxão Mole
    coxao_mole: {
        name: 'Coxão Mole',
        description: 'Carne macia, excelente para bifes à milanesa, assados, refogados e escalopes.',
        number: 16,
    },
    // 17. Maminha
    maminha: {
        name: 'Maminha',
        description: 'Extremamente macia e suculenta. Ideal para assados, grelhados e recheios, mas deve ser cortada contra a fibra.',
        number: 17,
    },
    // 18. Patinho
    patinho: {
        name: 'Patinho',
        description: 'Carne magra, usada em bifes, assados, moída e para preparo de pratos rápidos. Também é usado em carpaccios.',
        number: 18,
    },
    // 19. Coxão Duro
    coxao_duro: {
        name: 'Coxão Duro',
        description: 'Menos macio que o Coxão Mole. Usado em guisados, carne de panela e moída. Pode ser cozido ou assado lentamente.',
        number: 19,
    },
    // 20. Lagarto
    lagarto: {
        name: 'Lagarto',
        description: 'Carne magra e com fibras longas. Ideal para carne de panela, rosbifes, cozidos e saladas de carne.',
        number: 20,
    },
    // 21. Músculo Traseiro
    musculo_traseiro: {
        name: 'Músculo Traseiro',
        description: 'Muito usado em caldos e ensopados, como o famoso Ossobuco. Requer cozimento longo para amaciar.',
        number: 21,
    },
    // 22. Entranha (Diafragma) - Nota: ID original era entranha, mantido para evitar conflito.
    entranha: {
        name: 'Entranha',
        description: 'Corte fino e saboroso, muito apreciado em churrascos. Cozimento rápido para preservar a maciez.',
        number: 22,
    },
    // 23. Partes da Perna / Jarrete
    mocoto: { // ID genérico, representa a ponta final da perna traseira (Jarrete)
        name: 'Mocotó',
        description: 'Corte da perna, geralmente usado para sopas, caldos e guisados. É a base do Ossobuco.',
        number: 23,
    },
    // path492, path2096, path2108, path2114: IDs genéricos de contorno ou sem nome específico, ignorados ou agrupados.
};

export default CutsMap;