CREATE DATABASE registro_tareas_db;
USE registro_tareas_db;

CREATE TABLE registro_tareas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_creacion DATE NOT NULL,
    fecha_vencimiento DATE,
    estado VARCHAR(50) NOT NULL,
    prioridad VARCHAR(50)
);

INSERT INTO registro_tareas (titulo, descripcion, fecha_creacion, fecha_vencimiento, estado, prioridad)
VALUES 
('Tarea 1', 'Completar el informe mensual', '2025-04-21', '2025-04-25', 'Pendiente', 'Alta'),
('Tarea 2', 'Revisar correos pendientes', '2025-04-20', '2025-04-22', 'Completada', 'Media'),
('Tarea 3', 'Planificar reunión de equipo', '2025-04-19', '2025-04-23', 'Pendiente', 'Alta');