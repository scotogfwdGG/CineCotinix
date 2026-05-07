const Funcion = require('../models/Funcion');

exports.getAllFunciones = async (req, res) => {
    try {
        const funciones = await Funcion.findAll();
        res.json(funciones);
    } catch (error) {
        console.error('Error al obtener funciones:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.getFuncionById = async (req, res) => {
    const { id_funcion } = req.params;
    try {
        const funcion = await Funcion.findByPk(id_funcion);
        if (!funcion) {
            return res.status(404).json({ message: 'Funcion no encontrada' });
        }
        res.json(funcion);
    } catch (error) {
        console.error('Error al obtener funcion:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.createFuncion = async (req, res) => {
    const { id_pelicula, id_sala, hora_inicio, hora_fin, precio } = req.body;
    try {
        const funcion = await Funcion.create({ id_pelicula, id_sala, hora_inicio, hora_fin, precio });
        res.json(funcion);
    } catch (error) {
        console.error('Error al crear funcion:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.updateFuncion = async (req, res) => {
    const { id_funcion } = req.params;
    const { id_pelicula, id_sala, hora_inicio, hora_fin, precio } = req.body;
    try {
        const funcion = await Funcion.findByPk(id_funcion);
        if (!funcion) {
            return res.status(404).json({ message: 'Funcion no encontrada' });
        }
        await funcion.update({ id_pelicula, id_sala, hora_inicio, hora_fin, precio });
        res.json(funcion);
    } catch (error) {
        console.error('Error al actualizar funcion:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.deleteFuncion = async (req, res) => {
    const { id_funcion } = req.params;
    try {
        const funcion = await Funcion.findByPk(id_funcion);
        if (!funcion) {
            return res.status(404).json({ message: 'Funcion no encontrada' });
        }
        await funcion.destroy();
        res.json({ message: 'Funcion eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar funcion:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};