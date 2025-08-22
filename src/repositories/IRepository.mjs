class IRepository {
    obtenerporId(id) {
        throw new Error('Metodo \'obtenerporId()\' no implementado');
    }

    obtenerTodos() {
        throw new Error('Metodo \'obtenerTodos()\' no implementado');
    }
    buscarPorAtributo(atributo,value){
        throw new Error('Metodo \'buscarPorAtributo()\' no implementado');
    }
    obtenerMayoresDe30(){
        throw new Error('Metodo \'obtenerMayoresDe30()\' no implementado');
    }

    agregar( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos ) {
        throw new Error('Metodo \'agregar()\' no implementado');
    }
    editar(id, updates) {
        throw new Error('Metodo \'editar()\' no implementado');
    }
    eliminarPorId(id) {
        throw new Error('Metodo \'eliminar()\' no implementado');
    }
    eliminarPorNombreSuperHeroe(nombreSuperHeroe) {
        throw new Error('Metodo \'eliminarPorNombreSuperHeroe()\' no implementado');
    }
}
export default IRepository;