import { Request, Response } from "express";
import users from "../models/users";

export async function login(req: Request, res: Response) {
    const isLogged = await users.findOne({ email: req.body.email, password: req.body.password }).exec();
    console.log(isLogged);
}