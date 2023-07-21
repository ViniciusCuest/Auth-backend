import { Router } from "express";
import { login, register } from "../controllers/auth-controller";

const router = Router();

router
    .post("/login", login)
    .post("/register", register);

export default router;