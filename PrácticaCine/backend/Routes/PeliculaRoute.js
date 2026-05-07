const { Router } = require('express');
const router = Router();
const { getAllPeliculas, getPeliculaById, createPelicula, updatePelicula, deletePelicula } = require('../Controllers/PeliculaController');

router.get('/', getAllPeliculas);
router.get('/:id_pelicula', getPeliculaById);
router.post('/', createPelicula);
router.put('/:id_pelicula', updatePelicula);
router.delete('/:id_pelicula', deletePelicula);

module.exports = router;