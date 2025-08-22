import express from 'express';
import { obtenerSuperHeroePorIdController,
    buscarSuperHeroesPorAtributoController,
    obtenerSuperHeroesMayoresDe30Controller,
    obtenerTodosLosSuperHeroesController,
    agregarSuperHeroeController,
    editarSuperHeroeController,
    eliminarSuperHeroePorIdController,
    eliminarSuperHeroePorNombreSuperHeroeController
} from '../controllers/superheroesController.mjs';
import { handleValidationSuperHeroeErrors } from './errorMiddleware/superHeroeErrorMiddleware.mjs';
import { registerSuperHeroValidationRules,editSuperHeroValidationRules,validateDeleteSuperHeroByName} from './validations/superHerovalidationRules.mjs';
import { cargarSuperHeroesMiddleware } from './middlewares/cargarSuperHeroesMiddleware.mjs';

const  router = express.Router();

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/mayores-30', obtenerSuperHeroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:value', buscarSuperHeroesPorAtributoController);
router.post('/heroes/agregar',cargarSuperHeroesMiddleware, registerSuperHeroValidationRules(), handleValidationSuperHeroeErrors ,agregarSuperHeroeController);
router.put('/heroes/:id/editar',cargarSuperHeroesMiddleware, editSuperHeroValidationRules(), handleValidationSuperHeroeErrors, editarSuperHeroeController);
router.delete('/heroes/:id', eliminarSuperHeroePorIdController);
router.delete('/heroes/nombresuperheroe',validateDeleteSuperHeroByName(), handleValidationSuperHeroeErrors ,eliminarSuperHeroePorNombreSuperHeroeController);
export default router;
