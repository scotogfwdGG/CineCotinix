const Entrada = require('../models/Entrada');

exports.getAllEntradas = async (req, res) => {
    try {
        const entradas = await Entrada.findAll();
        res.json(entradas);
    } catch (error) {
        console.error('Error al obtener entradas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.getEntradaById = async (req, res) => {
    const { id_entrada } = req.params;
    try {
        const entrada = await Entrada.findByPk(id_entrada);
        if (!entrada) {
            return res.status(404).json({ message: 'Entrada no encontrada' });
        }
        res.json(entrada);
    } catch (error) {
        console.error('Error al obtener entrada:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.createEntrada = async (req, res) => {
    const { id_funcion, id_asiento, id_usuario, precio, estado, codigo_qr } = req.body;
    try {
        const entrada = await Entrada.create({ id_funcion, id_asiento, id_usuario, precio, estado, codigo_qr });
        res.json(entrada);
    } catch (error) {
        console.error('Error al crear entrada:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.updateEntrada = async (req, res) => {
    const { id_entrada } = req.params;
    const { id_funcion, id_asiento, id_usuario, precio, estado, codigo_qr } = req.body;
    try {
        const entrada = await Entrada.findByPk(id_entrada);
        if (!entrada) {
            return res.status(404).json({ message: 'Entrada no encontrada' });
        }
        await entrada.update({ id_funcion, id_asiento, id_usuario, precio, estado, codigo_qr });
        res.json(entrada);
    } catch (error) {
        console.error('Error al actualizar entrada:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.deleteEntrada = async (req, res) => {
    const { id_entrada } = req.params;
    try {
        const entrada = await Entrada.findByPk(id_entrada);
        if (!entrada) {
            return res.status(404).json({ message: 'Entrada no encontrada' });
        }
        await entrada.destroy();
        res.json({ message: 'Entrada eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar entrada:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};