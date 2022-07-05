// modelo de armazenamento de dados do banco

let id = 0;

class Disciplina{
 
 constructor(id, nome, ementa, carga_horaria){
  this.id = id++
  this.nome = nome
  this.ementa = ementa
  this.carga_horaria = carga_horaria
}
};

module.exports = Disciplina;