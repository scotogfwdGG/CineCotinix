const { Router } = require('express');
const router = Router();
const { getAllSalas, getSalaById, createSala, updateSala, deleteSala } = require('../Controllers/SalaController');

router.get('/', getAllSalas);
router.get('/:id_sala', getSalaById);
router.post('/', createSala);
router.put('/:id_sala', updateSala);
router.delete('/:id_sala', deleteSala);

module.exports = router;