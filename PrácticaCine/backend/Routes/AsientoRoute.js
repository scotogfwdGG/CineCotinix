const express = require('express');
const router = express.Router();
const { getAllAsientos, getAsientoById, createAsiento, updateAsiento, deleteAsiento } = require('../Controllers/AsientoController');

router.get('/', getAllAsientos);
router.get('/:id_asiento', getAsientoById);
router.post('/', createAsiento);
router.put('/:id_asiento', updateAsiento);
router.delete('/:id_asiento', deleteAsiento);

module.exports = router;