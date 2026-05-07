const {Router} = require('express');
const router = Router();
const { getAllIndex, getIndexById, createIndex, updateIndex, deleteIndex } = require('../Controllers/IndexController');

router.get('/', getAllIndex);
router.get('/:id_index', getIndexById);
router.post('/', createIndex);
router.put('/:id_index', updateIndex);
router.delete('/:id_index', deleteIndex);

module.exports = router;
