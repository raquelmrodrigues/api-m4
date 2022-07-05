export class TurmaDao{
    constructor(bd){
        this.bd = bd;
    }
//GET
    ExibirTurma(){

        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM turma`, (err, results) =>{
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })
    }
// POST
    InserirTurma(NovaTurma){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO turma (ID_FUNCIONARIO, ID_ALUNO, MES_INICIO, ANO_INICIO) VALUES(?,?,?,?)`
            [NovaTurma.id_funcionario, NovaTurma.id_aluno, NovaTurma.mes_inicio, NovaTurma.ano_inicio], (error)=>{
                if (error) {
                    reject(error);
                } else {
                    resolve('Adicionado com sucesso')
                }
            })
        })
    }
// PUT
    AlterarTurma(params){
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE turma SET ID_FUNCIONARIO = ?, ID_ALUNO = ?, MES_INICIO = ?, ANO_INICIO = ? WHERE ID = ?`, params, (error)=>{
                if (error) {
                    reject(error);
                } else {
                    resolve('Alterado com sucesso')
                }
            })
        })
    }
// DELETE
    DeletarTurma(id){
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM turma WHERE ID = ${id}`, (error)=>{
                if (error) {
                    reject(error);
                } else {
                    resolve('Deletado com Sucesso')
                }
            })
        })
    }

}
