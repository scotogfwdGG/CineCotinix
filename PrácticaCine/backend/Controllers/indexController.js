const index = require('../models/index');

exports.getAllIndex = async (req, res) => {
    try {
        const index = await index.findAll();
        res.json(index);
    } catch (error) {
        console.error('Error al obtener index:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.getIndexById = async (req, res) => {
    const { id_index } = req.params;
    try {
        const index = await index.findByPk(id_index);
        if (!index) {
            return res.status(404).json({ message: 'Index no encontrado' });
        }
        res.json(index);
    } catch (error) {
        console.error('Error al obtener index:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.createIndex = async (req, res) => {
    const { id_funcion, id_asiento, id_usuario, precio, estado, codigo_qr } = req.body;
    try {
        const index = await index.create({ id_funcion, id_asiento, id_usuario, precio, estado, codigo_qr });
        res.json(index);
    } catch (error) {
        console.error('Error al crear index:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.updateIndex = async (req, res) => {
    const { id_index } = req.params;
    const { id_funcion, id_asiento, id_usuario, precio, estado, codigo_qr } = req.body;
    try {
        const index = await index.findByPk(id_index);
        if (!index) {
            return res.status(404).json({ message: 'Index no encontrado' });
        }
        await index.update({ id_funcion, id_asiento, id_usuario, precio, estado, codigo_qr });
        res.json(index);
    } catch (error) {
        console.error('Error al actualizar index:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.deleteIndex = async (req, res) => {
    const { id_index } = req.params;
    try {
        const index = await index.findByPk(id_index);
        if (!index) {
            return res.status(404).json({ message: 'Index no encontrado' });
        }
        await index.destroy();
        res.json({ message: 'Index eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar index:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
