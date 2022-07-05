import express from "express";


const app = express();

// import { aluno } from "./src/controllers/aluno-controller.js";
const aluno = require("./src/controllers/aluno-controller")
import { turma } from "./src/controllers/turma-controller.js";
import { bd } from "./src/infra/bd.js";

app.use(express.json());

aluno(app, bd);
turma(app, bd);

app.listen(3333,()=>{
    console.log("Porta 3333 rodando");
})