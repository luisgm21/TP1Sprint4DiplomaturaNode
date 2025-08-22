import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperHeroePorId(id) {
    return await SuperHeroRepository.obtenerporId(id);
}

export async function obtenerTodosLosSuperHeroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperHeroesPorAtributo(atributo, value) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, value);
}

export async function obtenerSuperHeroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
}

export async function agregarSuperHeroe( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos ) {
    return await SuperHeroRepository.agregar( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos );
}
export async function editarSuperHeroe(id, nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos) {
    return await SuperHeroRepository.editar(id, {nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos});
}
export async function eliminarSuperHeroePorId(id) {
    return await SuperHeroRepository.eliminarPorId(id);
}
export async function eliminarSuperHeroePorNombreSuperHeroe(nombreSuperHeroe) {
    return await SuperHeroRepository.eliminarPorNombreSuperHeroe(nombreSuperHeroe);
}