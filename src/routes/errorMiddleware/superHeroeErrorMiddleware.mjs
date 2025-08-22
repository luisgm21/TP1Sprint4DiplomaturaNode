import { validationResult } from 'express-validator';

export const handleValidationSuperHeroeErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Detectar si la solicitud proviene de Postman
        const userAgent = req.get('User-Agent') || '';
        const isPostman = userAgent.includes('PostmanRuntime');

        if (isPostman) {
            // Si la solicitud proviene de Postman, devolver un JSON con los errores
            return res.status(400).json({ 
                status:'error',
                message: 'Error de validación',
                errors: errors.array().map(error => ({
                    field: error.path,
                    message: error.msg
                }))
             });
        }

        // Si la solicitud proviene de un navegador, renderizar la vista
        return res.status(400).render('dashboard', {
            superheroes: req.superheroes || [], // Asegúrate de pasar la lista de superhéroes si está disponible
            errorMessages: errors.array() // Enviar los errores como un array
        });
    }
    next(); // Si no hay errores, continúa al siguiente middleware o controlador
};