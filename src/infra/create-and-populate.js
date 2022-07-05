/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

function criar(){
db.run( `
    CREATE TABLE IF NOT EXISTS "DISCIPLINA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMENTA" varchar(64),
    "CARGA_HORARIA" varchar(64)
  )`, (error)=>{console.log('erro ao criar tabela', error)
})
};

function inserir(){
  db.run( `
INSERT INTO DISCIPLINA (ID, NOME, EMENTA, CARGA_HORARIA)
VALUES 
    (1, 'matematica', 'calculo', '4hrs'),
    (2, 'Portugues', 'linguagens','4hrs')`,(error)=>{
      console.log('erro ao inserir dados', error)
    })
};

db.serialize(()=>{
  criar();
  inserir();
})



