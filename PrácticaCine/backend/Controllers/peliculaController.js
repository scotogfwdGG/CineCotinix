const Pelicula = require('../models/Pelicula');

exports.getAllPeliculas = async (req, res) => {
    try {
        const peliculas = await Pelicula.findAll();
        res.json(peliculas);
    } catch (error) {
        console.error('Error al obtener peliculas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.getPeliculaById = async (req, res) => {
    const { id_pelicula } = req.params;
    try {
        const pelicula = await Pelicula.findByPk(id_pelicula);
        if (!pelicula) {
            return res.status(404).json({ message: 'Pelicula no encontrada' });
        }
        res.json(pelicula);
    } catch (error) {
        console.error('Error al obtener pelicula:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.createPelicula = async (req, res) => {
    const { titulo, genero, duracion, clasificacion, pais, idioma, sinopsis, estado } = req.body;
    try {
        const pelicula = await Pelicula.create({ titulo, genero, duracion, clasificacion, pais, idioma, sinopsis, estado });
        res.json(pelicula);
    } catch (error) {
        console.error('Error al crear pelicula:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.updatePelicula = async (req, res) => {
    const { id_pelicula } = req.params;
    const { titulo, genero, duracion, clasificacion, pais, idioma, sinopsis, estado } = req.body;
    try {
        const pelicula = await Pelicula.findByPk(id_pelicula);
        if (!pelicula) {
            return res.status(404).json({ message: 'Pelicula no encontrada' });
        }
        await pelicula.update({ titulo, genero, duracion, clasificacion, pais, idioma, sinopsis, estado });
        res.json(pelicula);
    } catch (error) {
        console.error('Error al actualizar pelicula:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.deletePelicula = async (req, res) => {
    const { id_pelicula } = req.params;
    try {
        const pelicula = await Pelicula.findByPk(id_pelicula);
        if (!pelicula) {
            return res.status(404).json({ message: 'Pelicula no encontrada' });
        }
        await pelicula.destroy();
        res.json({ message: 'Pelicula eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar pelicula:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};  