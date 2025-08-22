import SuperHero from "../models/superHero.mjs";
import IRepository from "./IRepository.mjs";


class SuperHeroRepository extends IRepository {
    async obtenerporId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find({ creador: { $in: ["Martin", "Gonzalo Morelli"] } });
    }

    async buscarPorAtributo(atributo, value) {
        return await SuperHero.find({ [atributo]: value });
    }

    async obtenerMayoresDe30() {
        return await SuperHero.find({
            edad: { $gt: 30 },
            planetaOrigen: 'Tierra',
            creador: { $in: ["Martin", "Gonzalo Morelli"] },
            $expr: { $gte: [{ $size: "$poderes" }, 2] }
        });
    }

    async agregar( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos ) {
        const nuevoSuperHeroe = new SuperHero({
            nombreSuperHeroe,
            nombreReal,
            edad,
            planetaOrigen,
            debilidad,
            poderes,
            aliados,
            enemigos,
            
        });
        return await nuevoSuperHeroe.save();
    }
    async editar(id, updates) {
        const updateFields = Object.fromEntries(
            Object.entries(updates).filter(([_, value]) => value !== undefined)
        );
        return await SuperHero.findByIdAndUpdate(id, updateFields, { new: true });
    }
    async eliminarPorId(id) {
        return await SuperHero.findByIdAndDelete(id);
    }
    async eliminarPorNombreSuperHeroe(nombreSuperHeroe) {
        return  await SuperHero.findOneAndDelete({ nombreSuperHeroe, creador: "Gonzalo Morelli" }); // Elimina el primer documento que coincida y sea creado por Gonzalo Morelli
        // return await SuperHero.deleteMany({ nombreSuperHeroe, creador: "Gonzalo Morelli" }); // Elimina todos los documentos que coincidan
    }
}
export default new SuperHeroRepository();