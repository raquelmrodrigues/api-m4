import express from "express";
import { staff } from "./src/controllers/staff-controller.js";
import { bd } from "./src/infra/bd.js";

const app = express();
app.use(express.json());

const port = 3000;

staff(app, bd)

app.listen(port, () => {
    console.log(`Porta ${port} rodando`);
})
