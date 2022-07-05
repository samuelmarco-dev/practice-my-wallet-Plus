import chalk from "chalk";

export async function handleError(err, req, res, next){
    console.log(chalk.red(err));

    if(err.type === "UserAlreadyExists") return res.status(409).send(err.message);
    if(err.type === "InvalidCredentials" || err.type === "Unauthorized Access"){
        return res.status(401).send(err.message);
    }
    if(err.type === "InvalidType FinancialEvent" || err.type === "InvalidValue FinancialEvent"){
        return res.status(422).send(err.message);
    }

    return res.status(500).send("Internal server error");
}
