const { Router } = require('express');
const router = Router();
const { getAllCarteleras, getCarteleraById, createCartelera, updateCartelera, deleteCartelera } = require('../Controllers/CarteleraController');

router.get('/', getAllCarteleras);
router.get('/:id_cartelera', getCarteleraById);
router.post('/', createCartelera);
router.put('/:id_cartelera', updateCartelera);
router.delete('/:id_cartelera', deleteCartelera);

module.exports = router;