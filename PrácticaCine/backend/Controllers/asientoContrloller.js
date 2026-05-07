const Asiento = require('../models/Asiento');

exports.getAllAsientos = async (req, res) => {
    try {
        const asientos = await Asiento.findAll();
        res.json(asientos);
    } catch (error) {
        console.error('Error al obtener asientos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.getAsientosBySala = async (req, res) => {
    const { id_sala } = req.params;
    try {
        const asientos = await Asiento.findAll({ where: { id_sala } });
        res.json(asientos);
    } catch (error) {
        console.error('Error al obtener asientos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.createAsiento = async (req, res) => {
    const { id_sala, fila, numero, tipo } = req.body;
    try {
        const asiento = await Asiento.create({ id_sala, fila, numero, tipo });
        res.json(asiento);
    } catch (error) {
        console.error('Error al crear asiento:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.updateAsiento = async (req, res) => {
    const { id_asiento } = req.params;
    const { id_sala, fila, numero, tipo } = req.body;
    try {
        const asiento = await Asiento.findByPk(id_asiento);
        if (!asiento) {
            return res.status(404).json({ message: 'Asiento no encontrado' });
        }
        await asiento.update({ id_sala, fila, numero, tipo });
        res.json(asiento);
    } catch (error) {
        console.error('Error al actualizar asiento:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.deleteAsiento = async (req, res) => {
    const { id_asiento } = req.params;
    try {
        const asiento = await Asiento.findByPk(id_asiento);
        if (!asiento) {
            return res.status(404).json({ message: 'Asiento no encontrado' });
        }
        await asiento.destroy();
        res.json({ message: 'Asiento eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar asiento:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.getAsientosDisponibles = async (req, res) => {
    const { id_funcion } = req.params;
    try {
        const asientos = await Asiento.findAll({
            where: { id_funcion },
            attributes: ['id_asiento', 'id_sala', 'fila', 'numero', 'tipo', 'estado'],
            include: [
                { model: Sala, attributes: ['nombre', 'capacidad'] }
            ]
        });
        res.json(asientos);
    } catch (error) {
        console.error('Error al obtener asientos disponibles:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
