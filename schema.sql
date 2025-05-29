CREATE TABLE IF NOT EXISTS estudiante (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  correo TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS tutor (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS semillero (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS plan_actividades (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  descripcion TEXT,
  semestre TEXT,
  estudiante_id INTEGER,
  FOREIGN KEY(estudiante_id) REFERENCES estudiante(id)
);

CREATE TABLE IF NOT EXISTS estudiante_tutor (
  estudiante_id INTEGER,
  tutor_id INTEGER,
  PRIMARY KEY (estudiante_id, tutor_id),
  FOREIGN KEY(estudiante_id) REFERENCES estudiante(id),
  FOREIGN KEY(tutor_id) REFERENCES tutor(id)
);
