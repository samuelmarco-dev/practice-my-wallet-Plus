import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import authRepository from "../repositories/authRepository.js";

async function createUserInDatabase(name, email, password){
    const existingUsers = await authRepository.findUserByEmail(email);
    if(existingUsers.rowCount > 1 || !existingUsers){
        throw{
            type: "UserAlreadyExists",
            message: "User already exists"
        }
    }

    const hashedPassword = bcrypt.hashSync(password, 12);
    await authRepository.createInfoUser(name, email, hashedPassword);
}

async function allowUserLogin(email, password){
    const { rows } = await authRepository.findUserByEmail(email);
    const [user] = rows;
    if(!user || !bcrypt.compare(password, user.password)){
        throw{
            type: "InvalidCredentials",
            message: "Invalid credentials or user does not exist"
        }
    }

    const token = jwt.sign({
        id: user.id
    }, process.env.JWT_SECRET);
    return token;
}

const authService = {
    createUserInDatabase,
    allowUserLogin
}

export default authService;
