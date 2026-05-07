const { Router } = require('express');
const router = Router();
const { getAllFunciones, getFuncionById, createFuncion, updateFuncion, deleteFuncion } = require('../Controllers/FuncionController');

router.get('/', getAllFunciones);
router.get('/:id_funcion', getFuncionById);
router.post('/', createFuncion);
router.put('/:id_funcion', updateFuncion);
router.delete('/:id_funcion', deleteFuncion);

module.exports = router;