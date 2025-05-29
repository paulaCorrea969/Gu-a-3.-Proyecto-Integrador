const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');
const fs = require('fs');
const schema = fs.readFileSync('./models/schema.sql', 'utf-8');

db.serialize(() => {
  db.exec(schema, (err) => {
    if (err) console.error('Error inicializando la base de datos:', err);
    else console.log('Base de datos inicializada.');
  });
});

module.exports = db;
