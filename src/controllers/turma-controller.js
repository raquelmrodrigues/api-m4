import { bd } from "../infra/bd.js";
import { Turma } from "../models/turma-model";

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
        const indice = bd.turma.findIndex(turma.id === id)

        if (indice >-1) {
            const arqDelete = bd.turma.splice(indice, 1)
    
            res.json({"rota usuario deletado": UsuarioDeletado}) 
        }else{
            res.json("turma inexistente")
        }
    })

}