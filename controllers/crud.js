const db = require('../database/db');

// Listar tareas
exports.listarTareas = (req, res) => {
    db.query('SELECT * FROM registro_tareas', (err, results) => {
        if (err) throw err;
        res.render('index', { tareas: results });
    });
};

// Mostrar formulario para crear tarea
exports.mostrarFormularioCrear = (req, res) => {
    res.render('create');
};

// Crear tarea
exports.crearTarea = (req, res) => {
    const { titulo, descripcion, fecha_vencimiento, estado, prioridad } = req.body;
    const fecha_creacion = new Date().toISOString().split('T')[0];
    db.query(
        'INSERT INTO registro_tareas (titulo, descripcion, fecha_creacion, fecha_vencimiento, estado, prioridad) VALUES (?, ?, ?, ?, ?, ?)',
        [titulo, descripcion, fecha_creacion, fecha_vencimiento, estado, prioridad],
        (err) => {
            if (err) throw err;
            res.redirect('/');
        }
    );
};

// Mostrar formulario para editar tarea
exports.mostrarFormularioEditar = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM registro_tareas WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.render('edit', { tarea: results[0] });
    });
};

// Editar tarea
exports.editarTarea = (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, fecha_vencimiento, estado, prioridad } = req.body;
    db.query(
        'UPDATE registro_tareas SET titulo = ?, descripcion = ?, fecha_vencimiento = ?, estado = ?, prioridad = ? WHERE id = ?',
        [titulo, descripcion, fecha_vencimiento, estado, prioridad, id],
        (err) => {
            if (err) throw err;
            res.redirect('/');
        }
    );
};

// Eliminar tarea
exports.eliminarTarea = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM registro_tareas WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};