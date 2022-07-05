//Requisições
const Disciplina = require('../models/disciplina_models')
const DisciplinaDAO = require('../DAO/disciplina_DAO')
const bd = require('../Infra/sqlite-db')

const disciplina = (app, bd) =>{
const disciplinaDAO = new DisciplinaDAO(bd)
  
  //Mostrar todos os dados no Banco 
  app.get('/disciplina', (req, res) => {
    const data = async()=>{
      try{
        const disciplina = await disciplinaDAO.mostrarDisciplina();
        res.status(200).json(disciplina)
      } catch(error){
        res.status(404).json(error)

      }
    }
    data();
  })

  //buscar dados por Id no Banco 
  app.get('/disciplina/:id', (req, res) => {
    const data = async()=>{
      try{
        const disciplina = await disciplinaDAO.mostrarDisciplinaID(req.params.id);
        res.status(200).json(disciplina)
      } catch(error){
        res.status(404).json(error)

      }
    }
    data();
  })

// Adicionar novos dados no Banco
  app.post('/disciplina', (req, res) => {
    const body = req.body;
    const NovaDisciplina = new Disciplina(body.id,body.nome, body.ementa, body.carga_horaria)
    const data = async()=>{
      try{
        const disciplina = await disciplinaDAO.inserirDisciplina(NovaDisciplina);
        res.status(201).json(disciplina)
      } catch(error){
        res.status(404).json(error)

      }
    }
    data();
  })

// Editar dados no Banco, buscando pelo Id 
  app.put('/disciplina/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const parametros = [body.nome, body.ementa, body.carga_horaria, id]
    const data = async () => {
     try {
      const disciplina = await disciplinaDAO.alterarDisciplina(parametros)
        res.send(disciplina)
      } catch (err) {
        res.send(err)
      }
    }
    data();
})

// Deletar dados no Banco
 app.delete('/disciplina/:id', (req, res) => {
  const data = async()=>{
    try{
      const disciplina = await disciplinaDAO.deletarDisciplina(req.params.id);
      res.status(201).json(disciplina)
    } catch(error){
      res.status(404).json(error)

    }
  }
  data();
})


  }
module.exports = disciplina;