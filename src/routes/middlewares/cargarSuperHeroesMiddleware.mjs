import SuperHero from '../../models/superHero.mjs';

export const cargarSuperHeroesMiddleware = async (req, res, next) => {
    try {
        // Obtener la lista de superhéroes desde la base de datos
        const superheroes = await SuperHero.find();
        req.superheroes = superheroes; // Adjuntar la lista al objeto `req`
        next(); // Continuar al siguiente middleware o controlador
    } catch (error) {
        res.status(500).render('dashboard', {
            superheroes: [], // Si ocurre un error, enviar una lista vacía
            errorMessages: [{ msg: 'Error al cargar la lista de superhéroes.' }]
        });
    }
};