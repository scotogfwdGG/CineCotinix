const Sala = require('../models/Sala');

exports.getAllSalas = async (req, res) => {
    try {
        const salas = await Sala.findAll();
        res.json(salas);
    } catch (error) {
        console.error('Error al obtener salas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.getSalaById = async (req, res) => {
    const { id_sala } = req.params;
    try {
        const sala = await Sala.findByPk(id_sala);
        if (!sala) {
            return res.status(404).json({ message: 'Sala no encontrada' });
        }
        res.json(sala);
    } catch (error) {
        console.error('Error al obtener sala:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.createSala = async (req, res) => {
    const { nombre, capacidad, tipo } = req.body;
    try {
        const sala = await Sala.create({ nombre, capacidad, tipo });
        res.json(sala);
    } catch (error) {
        console.error('Error al crear sala:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.updateSala = async (req, res) => {
    const { id_sala } = req.params;
    const { nombre, capacidad, tipo } = req.body;
    try {
        const sala = await Sala.findByPk(id_sala);
        if (!sala) {
            return res.status(404).json({ message: 'Sala no encontrada' });
        }
        await sala.update({ nombre, capacidad, tipo });
        res.json(sala);
    } catch (error) {
        console.error('Error al actualizar sala:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.deleteSala = async (req, res) => {
    const { id_sala } = req.params;
    try {
        const sala = await Sala.findByPk(id_sala);
        if (!sala) {
            return res.status(404).json({ message: 'Sala no encontrada' });
        }
        await sala.destroy();
        res.json({ message: 'Sala eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar sala:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};