const express = require('express');
const db = require('../db');
const router = express.Router();

router.post('/estudiante', (req, res) => {
  const { nombre, correo } = req.body;
  db.run('INSERT INTO estudiante(nombre, correo) VALUES (?, ?)', [nombre, correo], function (err) {
    if (err) return res.status(500).send(err);
    res.send({ id: this.lastID });
  });
});

router.post('/tutor', (req, res) => {
  const { nombre } = req.body;
  db.run('INSERT INTO tutor(nombre) VALUES (?)', [nombre], function (err) {
    if (err) return res.status(500).send(err);
    res.send({ id: this.lastID });
  });
});

router.post('/semillero', (req, res) => {
  const { nombre } = req.body;
  db.run('INSERT INTO semillero(nombre) VALUES (?)', [nombre], function (err) {
    if (err) return res.status(500).send(err);
    res.send({ id: this.lastID });
  });
});

router.post('/plan', (req, res) => {
  const { descripcion, semestre, estudiante_id } = req.body;
  db.run(
    'INSERT INTO plan_actividades(descripcion, semestre, estudiante_id) VALUES (?, ?, ?)',
    [descripcion, semestre, estudiante_id],
    function (err) {
      if (err) return res.status(500).send(err);
      res.send({ id: this.lastID });
    }
  );
});

router.post('/asociar', (req, res) => {
  const { estudiante_id, tutor_id } = req.body;
  db.run('INSERT INTO estudiante_tutor(estudiante_id, tutor_id) VALUES (?, ?)', [estudiante_id, tutor_id], function (err) {
    if (err) return res.status(500).send(err);
    res.send({ success: true });
  });
});

module.exports = router;
