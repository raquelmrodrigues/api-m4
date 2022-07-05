import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./src/infra/staff.db')

const createTableCommand = (table) => `
CREATE TABLE IF NOT EXISTS "${table.toUpperCase()}"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "CPF" VARCHAR(11), 
    "FIRST_NAME" VARCHAR(50), 
    "LAST_NAME" VARCHAR(150), 
    "EMAIL" VARCHAR(50), 
    "TELEPHONE" VARCHAR(14), 
    "OCCUPATION" VARCHAR(100)
    );
`;

const insertInto = (table, body) => {
    db.run(`INSERT INTO ${table} (CPF, FIRST_NAME, LAST_NAME, EMAIL, TELEPHONE, OCCUPATION) VALUES (?,?,?,?,?,?);`,
        `${body.cpf}`, `${body.firstName}`, `${body.lastName}`, `${body.email}`, `${body.telephone}`, `${body.occupation}`,
        (error) => {
            error ? console.log(error) : false;
        })
}

const updateInfo = (table, updatedInfo, id) => {
    db.run(`UPDATE ${table} SET CPF = ?, FIRST_NAME = ?, LAST_NAME = ?, EMAIL = ? , TELEPHONE = ?, OCCUPATION = ? WHERE ID = ?;`,
        updatedInfo.cpf, updatedInfo.firstName, updatedInfo.lastName, `${updatedInfo.email}`, `${updatedInfo.telephone}`, `${updatedInfo.occupation}`, `${id}`,
        (error) => {
            error ? console.log(error) : false;
        })
}

const selection = (table) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM ${table};`, [], (error, rows) => {
            try {
                if (error) throw new Error('An error has occured');
                resolve(rows)
            } catch (e) {
                reject(e)
            }
        })

    })
}

const deleteInfo = (table, id) => {
    db.run(`DELETE FROM ${table} WHERE ID = ?`, id, (error) => {
        error ? console.log(error) : false
    })
}

const createTable = (table) => {
    db.run(createTableCommand(table), (error) => {
        try {
            if (error) throw new Error('Unable to create table: an error has occured or the table has already been created');
        } catch (e) {
            console.log(e)
        }
    })
}

export { createTable, insertInto, selection, updateInfo, deleteInfo };
