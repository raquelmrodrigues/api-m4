import express from "express";
// import { bd } from "./src/infra/bd.js";
// import { aluno } from "./src/controllers/aluno-controller.js";
// const aluno = require("./src/controllers/aluno-controller.js");
import { staff } from "./src/controllers/staff-controller.js";
// import { turma } from "./src/controllers/turma-controller.js";

const app = express();
app.use(express.json());

const port = 3000;


app.listen(port, () => {
    console.log(`Porta ${port} rodando`);
})
