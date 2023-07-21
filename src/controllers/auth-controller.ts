import { Request, Response } from "express";
import users from "../models/users";
import { UUID, randomUUID } from "crypto";
import { generateAccessToken } from "../config/tokens";
import { generateRefreshToken } from "../config/tokens";

async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        const user = await users.findOne({ email, password }).exec();

        if (!user) {
            return res.status(400).send({
                message: "Email or password incorrect, try again!"
            });
        }
        return res.status(200).send({
            full_name: user.full_name,
            email: user.email,
            country: user.country,
            phone: user.phone,
            access_token: generateAccessToken({ email: user.email, country: user.country }),
            refresh_token: generateRefreshToken({ ...user })
        });
    } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).send({
            message: "Internal server error."
        });
    }
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
        return res.status(400).send({
            message: `User hasn't been created`
        });

    return res.status(201).send({
        isUserCreated
    });
}

export {
    login,
    register
}