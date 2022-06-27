class AlunoDAO {
    constructor(bd) {
        this.bd = bd;
    }

    ExibirAluno() {

        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM alunos`, (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })


        })
    }

    inserirAluno(NovoAluno) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO alunos (NOME,IDADE,TELEFONE,EMAIL,SENHA,TURMA)VALUES (?,?,?,?,?,?)`,
                [NovoAluno.nome, NovoAluno.idade, NovoAluno.telefone, NovoAluno.email, NovoAluno.senha, NovoAluno.turma], (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('inserido com sucesso')
                    }
                })
        })
    }

    AlterarAluno(parametros) {
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE alunos SET NOME =?, IDADE =?,TELEFONE=?,EMAIL=?,SENHA= ?,TURMA=? where id= ?`, parametros, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve('Alterado com sucesso')
                }
            })
        })
    }
    DeletarAluno(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM alunos WHERE ID = ${id}`, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve('Deletado com Sucesso')
                }
            })
        })
    }
}

module.exports = AlunoDAO;