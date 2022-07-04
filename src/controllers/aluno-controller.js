const Aluno = require("../models/aluno-model")
const AlunoDAO = require('../DAO/aluno-DAO')


const aluno = (app, bd) => {
    const DAOAluno = new AlunoDAO(bd) 

    app.post('/aluno', (req, res) => {
        const body = req.body;
        const AlunoDado = new Aluno(body.nome, body.idade, body.telefone, body.email, body.senha, body.turma)
        const data = async () => {
            try {
                const aluno = await DAOAluno.inserirAluno(AlunoDado)
                res.send(aluno)
            } catch (err) {
                res.send(err)
            }
        }
        data()
    })

    app.get('/aluno', (req, res) => {
        const data = async () => {
            try {
                const aluno = await DAOAluno.ExbirAlunos()
                res.send(aluno)
            } catch (err) {
                res.send(err)
            }
        }
        data()
    })

    app.put('/aluno/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id;
        const parametros = [body.nome, body.idade, body.telefone, body.email, body.senha, body.turma, id]
        const data = async () => {
            try {
                const aluno = await DAOAluno.AlterarAluno(parametros)
                res.send(aluno)
            } catch (err) {
                res.send(err)
            }
        }
        data();
    })

    app.delete('/aluno/:id', (req, res) => {
        const id = req.params.id
        const data = async () => {
            try {
                const aluno = await DAOAluno.DeletarAluno(id)
                res.send(aluno)
            } catch (err) {
                res.send(err)
            }
        }

        data()
    })
}

module.exports = aluno;