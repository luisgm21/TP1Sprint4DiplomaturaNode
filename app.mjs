import express from 'express';
import { connectDB } from './src/config/dbConfig.mjs';
import superHeroRoutes from './src/routes/superHeroRoutes.mjs';
import methodOverride from 'method-override';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import links from './src/config/navbarLinks.mjs';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(methodOverride(function (req, res) {
    req.body._method = req.url.includes('agregar') ? 'POST' : req.url.includes('editar') ? 'PUT' : '';
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // Guardar el método original
        const method = req.body._method;
        // Eliminar _method del body
        delete req.body._method;
        return method;
    }
}));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

app.use(expressEjsLayouts);
app.set('layout', 'layout');

connectDB();

app.use(express.static(path.resolve('./src/public')));

app.get('/', (req, res) => {
  res.render('index',{
    title: 'Pagina Principal',
    navbarLinks: links
  });
});


app.use('/api', superHeroRoutes);

app.use((req, res) => {
    res.status(404).send({message: 'Ruta no encontrada'});
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});