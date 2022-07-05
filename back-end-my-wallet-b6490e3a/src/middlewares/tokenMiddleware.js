import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function validateToken(req, res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "").trim();
    if(!token) {
        throw{
            type: "Unauthorized Access",
            message: "You are not authorized, because it has no token"
        }
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);
    if(!user) {
        throw{
            type: "Unauthorized Access",
            message: "You are not authorized, because it has no token"
        }
    }

    res.locals.user = user;
    next();
}
