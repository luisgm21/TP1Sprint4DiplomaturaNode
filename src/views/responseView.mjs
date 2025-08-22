export function renderizarSuperHeroe(superHeroe) {
    return {
        Nombre: superHeroe.nombreSuperHeroe,
        "Nombre Real": superHeroe.nombreReal,
        Edad: superHeroe.edad,
        "Planeta de Origen": superHeroe.planetaOrigen,
        Debilidad: superHeroe.debilidad,
        Poderes: superHeroe.poderes,
        Aliados: superHeroe.aliados,
        Enemigos: superHeroe.enemigos
    };
}

export function renderizarSuperHeroes(superHeroes) {
    return superHeroes.map(superHeroe => renderizarSuperHeroe(superHeroe));
}

export function renderizarSuperHeroeEditado(antes, despues) {
    return {
        Antes: renderizarSuperHeroe(antes),
        Despues: renderizarSuperHeroe(despues)
    };
}