import mongoose from "mongoose";

const superHeroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type:Number, min:0 },
    planetaOrigen: { type: String, default:'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: {type: String, default: 'Gonzalo Morelli'},
    createdAt: { type: Date, default: Date.now }
});

const SuperHero = mongoose.model('SuperHero', superHeroSchema , 'Grupo-19');
export default SuperHero;