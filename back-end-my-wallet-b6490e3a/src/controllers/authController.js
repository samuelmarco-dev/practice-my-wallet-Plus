import authService from "../services/authService.js";

export async function createSignUp(req, res){
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(422);
    }

    await authService.createUserInDatabase(name, email, password);
    res.sendStatus(200);
}

export async function createSignIn(req, res){
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(422);
    }

    const generateToken = await authService.allowUserLogin(email, password);
    res.status(200).send({
        token: generateToken
    });
}
