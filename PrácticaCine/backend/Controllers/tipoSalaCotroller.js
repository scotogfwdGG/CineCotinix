const TipoSala = require('../models/TipoSala');

exports.getAllTipoSalas = async (req, res) => {
    try {
        const tipoSalas = await TipoSala.findAll();
        res.json(tipoSalas);
    } catch (error) {
        console.error('Error al obtener tipo de salas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.getTipoSalaById = async (req, res) => {
    const { id_tipo_sala } = req.params;
    try {
        const tipoSala = await TipoSala.findByPk(id_tipo_sala);
        if (!tipoSala) {
            return res.status(404).json({ message: 'Tipo de sala no encontrado' });
        }
        res.json(tipoSala);
    } catch (error) {
        console.error('Error al obtener tipo de sala:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.createTipoSala = async (req, res) => {
    const { nombre, capacidad, precio } = req.body;
    try {
        const tipoSala = await TipoSala.create({ nombre, capacidad, precio });
        res.json(tipoSala);
    } catch (error) {
        console.error('Error al crear tipo de sala:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.updateTipoSala = async (req, res) => {
    const { id_tipo_sala } = req.params;
    const { nombre, capacidad, precio } = req.body;
    try {
        const tipoSala = await TipoSala.findByPk(id_tipo_sala);
        if (!tipoSala) {
            return res.status(404).json({ message: 'Tipo de sala no encontrado' });
        }
        await tipoSala.update({ nombre, capacidad, precio });
        res.json(tipoSala);
    } catch (error) {
        console.error('Error al actualizar tipo de sala:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.deleteTipoSala = async (req, res) => {
    const { id_tipo_sala } = req.params;
    try {
        const tipoSala = await TipoSala.findByPk(id_tipo_sala);
        if (!tipoSala) {
            return res.status(404).json({ message: 'Tipo de sala no encontrado' });
        }
        await tipoSala.destroy();
        res.json({ message: 'Tipo de sala eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar tipo de sala:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};