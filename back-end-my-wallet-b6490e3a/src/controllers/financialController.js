import financialService from "../services/financialService.js";

export async function createFinancialEvent(req, res){
    const { value, type } = req.body;
    const { user } = res.locals;

    if (!value || !type) {
      return res.sendStatus(422);
    }

    await financialService.createTypeFinancialEvent(value, type, user);
    res.sendStatus(201);
}

export async function getFinancialEvents(req, res){
    const { user } = res.locals;
    const events = await financialService.getFinancialEventsUser(user);
    res.status(200).send(events);
}

export async function getFinancialEventsSum(req, res){
    const { user } = res.locals;
    const events = await financialService.getFinancialEventsUser(user);

    const sum = events.rows.reduce(
      (total, event) =>
        event.type === "INCOME" ? total + event.value : total - event.value,
      0
    );
    res.status(200).send({sum});
}
