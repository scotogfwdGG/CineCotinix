const { Router } = require('express');
const router = Router();
const { getAllTiposSala, getTipoSalaById, createTipoSala, updateTipoSala, deleteTipoSala } = require('../Controllers/TipoSalaController');

router.get('/', getAllTiposSala);
router.get('/:id_tiposala', getTipoSalaById);
router.post('/', createTipoSala);
router.put('/:id_tiposala', updateTipoSala);
router.delete('/:id_tiposala', deleteTipoSala);

module.exports = router;