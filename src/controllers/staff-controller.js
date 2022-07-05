import { Staff } from "../models/staff-model.js";
import { createTable, insertInto, selection, updateInfo, deleteInfo } from "../DAO/staff-dao.js";

export const staff = (app, db) => {

    app.get('/findStaff/:id', (req, res) => {
        selection('STAFF').then((result) => {
            const staff = result.filter(el => el.ID == req.params.id)[0]
            res.status(200).json(staff)
        })
    })

    app.get('/fullDB', (req, res) => {
        selection('STAFF').then((result) => {
            res.send(result)
        })
    })

    app.post('/newStaff', (req, res) => {
        const body = req.body;
        const newStaff = new Staff(body.cpf, body.firstName, body.lastName, body.email, body.telephone, body.occupation)
        db.funcionario.push(newStaff)

        createTable('STAFF')
        insertInto('STAFF', body)

        res.status(200).json(newStaff)
    })

    app.put('/updateUser/:id', (req, res) => {
        selection('STAFF').then((result) => {
            const body = req.body;
            let id;
            let newStaff;

            result.forEach((el, i) => {

                if (el.ID == req.params.id) {

                    id = el.ID;

                    newStaff = new Staff(
                        body.cpf || el.CPF,
                        body.firstName || el.FIRST_NAME,
                        body.lastName || el.LAST_NAME,
                        body.email || el.EMAIL,
                        body.telephone || el.TELEPHONE,
                        body.occupation || el.OCCUPATION
                    )
                }
            });

            updateInfo('STAFF', newStaff, id)
            res.status(200).json(newStaff)
        })
    })

    app.delete('/deleteStaff/:id', (req, res) => {
        deleteInfo('STAFF', req.params.id)
        res.status(200).send(`STAFF Nº ${req.params.id} DELETADO COM SUCESSO`)
    })
}