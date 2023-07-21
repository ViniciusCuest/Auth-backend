import { Request, Response } from "express";
import users from "../models/users";
import { UUID, randomUUID } from "crypto";

async function login(req: Request, res: Response) {

    const { email, password } = req.body;

    const user = await users.findOne({ email, password }).exec();
    if (!user)
        res.status(400).send({
            message: "Email or password incorrect, try again!"
        });

    res.status(200).send({
        data: { user }
    });
}

async function register(req: Request, res: Response) {
    const isUserCreated = await users.create({
        id: randomUUID(),
        full_name: req.body.fullname,
        phone: req.body.phone,
        email: req.body.email,
        country: req.body.country,
        password: req.body.password
    });

    if (!isUserCreated)
        res.status(400).send({
            message: `User hasn't been created`
        });

    res.status(201).send({
        isUserCreated
    });
}

export {
    login,
    register
}