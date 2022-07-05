import { bd } from "../infra/bd.js";
import { Turma } from "../models/turma-model.js";

export const turma = (app,bd)=>{
    app.get('/turma', (req, res)=>{
        res.send(bd.turma)
    })

    app.post('/turma', (req, res)=>{
        
        const body = req.body;
        const novaTurma = new Turma(
            body.id,
            body.id_funcionario,
            body.id_aluno,
            body.mes_inicio,
            body.ano_inicio
        );

        bd.turma.push(novaTurma);
        res.json({"Turma nova": novaTurma})
    })

    app.delete('/turma/:id', (req,res)=>{
        const id = req.params.id;
        const indice = bd.turma.findIndex(x => x.id == id)

        if (indice >-1) {
            const arqDelete = bd.turma.splice(indice, 1)
    
            res.json({"rota usuario deletado": arqDelete}) 
        }else{
            res.send("turma inexistente")
        }
    })

    app.put('/turma/:id', (req,res)=>{
        const id = req.params.id;
        const body = req.body;
        const indice = bd.turma.findIndex(x => x.id == id)

        if (indice >-1) {
            const DadoAnterior = bd.turma[indice];
            const DadoNovo = new Turma(
                body.id_funcionario || DadoAnterior.id_funcionario,
                body.id_aluno || DadoAnterior.id_aluno,
                body.mes_inicio || DadoAnterior.mes_inicio,
                body.ano_inicio || DadoAnterior.ano_inicio
            )

            const arqDelete = bd.turma.splice(indice, 1, DadoNovo)
    
            res.json({"rota usuario atualizado": DadoNovo}) 
        }else{
            res.send("turma inexistente")
        }
    })

}