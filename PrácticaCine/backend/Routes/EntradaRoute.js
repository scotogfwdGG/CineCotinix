const { Router } = require('express');
const router = Router();
const { getAllEntradas, getEntradaById, createEntrada, updateEntrada, deleteEntrada } = require('../Controllers/EntradaController');

router.get('/', getAllEntradas);
router.get('/:id_entrada', getEntradaById);
router.post('/', createEntrada);
router.put('/:id_entrada', updateEntrada);
router.delete('/:id_entrada', deleteEntrada);

module.exports = router;