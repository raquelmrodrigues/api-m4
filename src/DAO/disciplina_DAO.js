// objeto de acesso a dados
class DisciplinaDAO {
    
    constructor(bd){
     this.bd = bd
    }
// Mostrar todos os dados do banco
    mostrarDisciplina(){
        return new Promise((resolve, reject) => {
        this.bd.all('SELECT * FROM disciplina', (error, results) => {
        if (error) {
        reject('ERRO AO SELECIONAR BANCO')
        } else {
        resolve({ "banco selecionado": results })
        }
        })
        })
    }
//Buscar dados no banco pelo ID
    mostrarDisciplinaID(id){ 
        return new Promise((resolve, reject) => {
        this.bd.all(`SELECT * FROM disciplina WHERE ID=${id}`, (error, results) => {
         if (error) {
         reject(error)
          } else {
         resolve({'Id, encontrado': results})
         }
         })
         })

    }
//Inserir novos dados ao banco
    inserirDisciplina(novaDisciplina){
        return new Promise((resolve, reject) => {
        this.bd.run(`INSERT INTO disciplina (id, nome, ementa, carga_horaria) 
        VALUES (?,?,?,?)`,
        [novaDisciplina.id,novaDisciplina.nome, novaDisciplina.ementa, novaDisciplina.carga_horaria],
         (error) => {
         if (error) {
         reject(error)
         } else {
         resolve("Post inserido com Sucesso!")
        }
        })
        })
    }
//Alterar dados no banco selecionando modificações pelo Id
    alterarDisciplina(parametro) {
     return new Promise((resolve, reject) => {
     this.bd.run(`UPDATE disciplina SET NOME = ?, EMENTA = ?, CARGA_HORARIA = ? WHERE id = ?`, parametro, (error) => {
     if (error) {
      console.log(error)
      reject(error);
     } else {
     resolve("Update Realizado")
     }
     })
     })
     }
// Deletar dados no banco
    deletarDisciplina(id){
        return new Promise((resolve, reject) => {
        this.bd.run(`DELETE FROM disciplina WHERE id = ${id}`, (error) => {
         if (error) {
         reject(error);
         } else {
        resolve("Disciplina deletada com sucesso")
          }
          })
          })
    }

}

module.exports = DisciplinaDAO;