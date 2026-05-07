const { Router } = require('express');
const router = Router();
const { getAllCines, getCineById, createCine, updateCine, deleteCine } = require('../Controllers/CineController');

router.get('/', getAllCines);
router.get('/:id_cine', getCineById);
router.post('/', createCine);
router.put('/:id_cine', updateCine);
router.delete('/:id_cine', deleteCine);

module.exports = router;