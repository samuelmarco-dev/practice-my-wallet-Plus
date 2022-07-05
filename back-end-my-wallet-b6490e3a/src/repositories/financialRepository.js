import sqlstring from "sqlstring";
import connection from "../config/database.js";

async function createTypeFinancialEvent(userId, value, type){
    const sql = sqlstring.format(`
        INSERT INTO "financialEvents" ("userId", "value", "type") VALUES (?, ?, ?)
    `, [userId, value, type]);
    return connection.query(sql);
}

async function getFinancialEventsByUserId(userId){
    const sql = sqlstring.format(`
        SELECT * FROM "financialEvents" WHERE "userId" = ? ORDER BY "id" DESC
    `, [userId]);
    return connection.query(sql);
}

const financialRepository = {
    createTypeFinancialEvent,
    getFinancialEventsByUserId
}

export default financialRepository;
