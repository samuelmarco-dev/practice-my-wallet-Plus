import sqlstring from "sqlstring";
import connection from "../config/database.js";

async function findUserByEmail(email){
    const sql = sqlstring.format(`
        SELECT * FROM "users" WHERE "email" = ?
    `, [email]);
    return connection.query(sql);
}

async function createInfoUser(name, email, password){
    const sql = sqlstring.format(`
        INSERT INTO "users" ("name", "email", "password") VALUES (?, ?, ?)
    `, [name, email, password]);
    return connection.query(sql);
}

const authRepository = {
    findUserByEmail,
    createInfoUser
}

export default authRepository;
