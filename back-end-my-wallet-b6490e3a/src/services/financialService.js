import dotenv from "dotenv";
dotenv.config();

import financialRepository from "../repositories/financialRepository.js";

async function createTypeFinancialEvent(value, type, user){
    const financialTypes = ["INCOME", "OUTCOME"];

    if (!financialTypes.includes(type)) {
        throw{
            type: "InvalidType FinancialEvent",
            message: "Invalid type financial event"
        }
    }
    if(value < 0){
        throw{
            type: "InvalidValue FinancialEvent",
            message: "Invalid value financial event"
        }
    }

    await financialRepository.createTypeFinancialEvent(user.id, value, type);
}

async function getFinancialEventsUser(user){
    const eventsUser = await financialRepository.getFinancialEventsByUserId(user.id);
    return eventsUser.rows;
}

const financialService = {
    createTypeFinancialEvent,
    getFinancialEventsUser
}

export default financialService;
