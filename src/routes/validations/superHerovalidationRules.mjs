import { body } from "express-validator";

export const registerSuperHeroValidationRules = () => [
    body('nombreSuperHeroe')
        .notEmpty()
        .withMessage('El nombre del superhéroe es obligatorio')
        .isLength({ min: 3, max: 60 })
        .withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres')
        .trim(),
    body('nombreReal')
        .notEmpty()
        .withMessage('El nombre real es obligatorio')
        .isLength({ min: 3, max: 60 })
        .withMessage('El nombre real debe tener entre 3 y 60 caracteres')
        .trim(),
    body('edad')
        .notEmpty()
        .withMessage('La edad es obligatoria')
        .isNumeric()
        .withMessage('La edad debe ser un número')
        .isInt({ min: 0 })
        .withMessage('La edad debe ser un número entero positivo')
        .trim(),
    body('poderes')
        .notEmpty()
        .withMessage('Los poderes son obligatorios')
        .customSanitizer((value) => value.split(',').map((item) => item.trim())) // Convertir a array
        .isArray({ min: 1 })
        .withMessage('Los poderes deben ser un array con al menos un elemento')
        .custom((poderes) => poderes.every((poder) => typeof poder === 'string' && poder.length >= 3 && poder.length <= 60))
        .withMessage('Cada poder debe ser una cadena de texto con entre 3 y 60 caracteres'),
    body('aliados')
        .notEmpty()
        .customSanitizer((value) => value.split(',').map((item) => item.trim())) // Convertir a array
        .isArray()
        .withMessage('Los aliados deben ser un array')
        .custom((aliados) => aliados.every((aliado) => typeof aliado === 'string' && aliado.length >= 3 && aliado.length <= 60))
        .withMessage('Cada aliado debe ser una cadena de texto con entre 3 y 60 caracteres'),
    body('enemigos')
        .notEmpty()
        .customSanitizer((value) => value.split(',').map((item) => item.trim())) // Convertir a array
        .isArray()
        .withMessage('Los enemigos deben ser un array')
        .custom((enemigos) => enemigos.every((enemigo) => typeof enemigo === 'string' && enemigo.length >= 3 && enemigo.length <= 60))
        .withMessage('Cada enemigo debe ser una cadena de texto con entre 3 y 60 caracteres'),
    body('planetaOrigen')
        .optional()
        .isLength({ min: 3, max: 60 })
        .withMessage('El planeta de origen debe tener entre 3 y 60 caracteres')
        .trim(),
    body('debilidad')
        .notEmpty()
        .withMessage('La debilidad es obligatoria')
        .isLength({ min: 3, max: 60 })
        .withMessage('La debilidad debe tener entre 3 y 60 caracteres')
        .trim(),
];

export const editSuperHeroValidationRules = () => [
    body('nombreSuperHeroe')
        .optional()
        .notEmpty()
        .withMessage('Si está en la petición, el campo nombre del superhéroe no puede estar vacío')
        .isLength({ min: 3 , max: 60 })
        .withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres')
        .trim(),
    body('nombreReal')
        .optional()
        .notEmpty()
        .withMessage('Si está en la petición, el campo nombre real no puede estar vacío')
        .isLength({ min: 3 , max: 60 })
        .withMessage('El nombre real debe tener entre 3 y 60 caracteres')
        .trim(),
    body('edad')
        .optional()
        .notEmpty()
        .withMessage('Si está en la petición, el campo edad no puede estar vacío')
        .isNumeric()
        .withMessage('La edad debe ser un número')
        .isInt({ min: 0 })
        .withMessage('La edad debe ser un número entero positivo')
        .trim(),
    body('poderes')
        .optional()
        .notEmpty()
        .withMessage('Si está en la petición, el campo poderes no puede estar vacío')
        .customSanitizer((value) => value.split(',').map((item) => item.trim())) // Convertir a array
        .isArray({ min: 1 })
        .withMessage('Los poderes deben ser un array con al menos un elemento')
        .custom((poderes) => poderes.every(poder => typeof poder === 'string' && poder.trim().length >= 3 && poder.trim().length <= 60))
        .withMessage('Cada poder debe ser una cadena de texto con entre 3 y 60 caracteres, sin espacios en blanco'),
    body('planetaOrigen')
        .optional()
        .notEmpty()
        .withMessage('Si está en la petición, el campo planeta de origen no puede estar vacío')
        .isLength({ min: 3 , max: 60 })
        .withMessage('El planeta de origen debe tener entre 3 y 60 caracteres')
        .trim(),
    body('debilidad')
        .optional()
        .notEmpty()
        .withMessage('Si está en la petición, el campo debilidad no puede estar vacío')
        .isLength({ min: 3 , max: 60 })
        .withMessage('La debilidad debe tener entre 3 y 60 caracteres')
        .trim(),
    body('aliados')
        .optional()
        .notEmpty()
        .withMessage('Si está en la petición, el campo aliados no puede estar vacío')
        .customSanitizer((value) => value.split(',').map((item) => item.trim())) // Convertir a array
        .isArray()
        .withMessage('Los aliados deben ser un array')
        .custom((aliados) => aliados.every(aliado => typeof aliado === 'string' && aliado.trim().length >= 3 && aliado.trim().length <= 60))
        .withMessage('Cada aliado debe ser una cadena de texto con entre 3 y 60 caracteres, sin espacios en blanco'),
    body('enemigos')
        .optional()
        .notEmpty()
        .withMessage('Si está en la petición, el campo enemigos no puede estar vacío')
        .customSanitizer((value) => value.split(',').map((item) => item.trim())) // Convertir a array
        .isArray()
        .withMessage('Los enemigos deben ser un array')
        .custom((enemigos) => enemigos.every(enemigo => typeof enemigo === 'string' && enemigo.trim().length >= 3 && enemigo.trim().length <= 60))
        .withMessage('Cada enemigo debe ser una cadena de texto con entre 3 y 60 caracteres, sin espacios en blanco'),
]

export const validateDeleteSuperHeroByName = () => [
    body('nombreSuperHeroe')
        .notEmpty()
        .withMessage('El nombre del superhéroe es obligatorio')
        .isLength({ min: 3 , max: 60 })
        .withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres')
        .trim(),
]