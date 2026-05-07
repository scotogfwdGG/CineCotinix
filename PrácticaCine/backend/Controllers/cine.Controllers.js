const Cartelera = require('../models/Cartelera');
const Pelicula = require('../models/Pelicula');

exports.getAllCarteleras = async (req, res) => {
    try {
        const cartelera = await Cartelera.findAll();
        res.json(cartelera);
    } catch (error) {
        console.error('Error al obtener cartelera:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.getCarteleraById = async (req, res) => {
    const { id_cartelera } = req.params;
    try {
        const cartelera = await Cartelera.findByPk(id_cartelera);
        if (!cartelera) {
            return res.status(404).json({ message: 'Cartelera no encontrada' });
        }
        res.json(cartelera);
    } catch (error) {
        console.error('Error al obtener cartelera:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.createCartelera = async (req, res) => {
    const { id_pelicula, fecha_inicio, fecha_fin, estado } = req.body;
    try {
        const cartelera = await Cartelera.create({ id_pelicula, fecha_inicio, fecha_fin, estado });
        res.json(cartelera);
    } catch (error) {
        console.error('Error al crear cartelera:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.updateCartelera = async (req, res) => {
    const { id_cartelera } = req.params;
    const { id_pelicula, fecha_inicio, fecha_fin, estado } = req.body;
    try {
        const cartelera = await Cartelera.findByPk(id_cartelera);
        if (!cartelera) {
            return res.status(404).json({ message: 'Cartelera no encontrada' });
        }
        await cartelera.update({ id_pelicula, fecha_inicio, fecha_fin, estado });
        res.json(cartelera);
    } catch (error) {
        console.error('Error al actualizar cartelera:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.deleteCartelera = async (req, res) => {
    const { id_cartelera } = req.params;
    try {
        const cartelera = await Cartelera.findByPk(id_cartelera);
        if (!cartelera) {
            return res.status(404).json({ message: 'Cartelera no encontrada' });
        }
        await cartelera.destroy();
        res.json({ message: 'Cartelera eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar cartelera:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.getCartelerasActivas = async (req, res) => {
    try {
        const cartelera = await Cartelera.findAll({
            where: { estado: 'activo' },
            include: [
                { model: Pelicula, attributes: ['titulo', 'genero', 'duracion'] }
            ]
        });
        res.json(cartelera);
    } catch (error) {
        console.error('Error al obtener cartelera:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};      