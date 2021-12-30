import express from "express";
const authRouter = express.Router();
import { createUserSession, getUserSession, refreshUserSession } from "../controllers/auth.controller";
import validate from "../middlewares/validate-resource.middleware";
import { createSessionSchema, refreshSessionSchema } from "../schema/session.schema";
import { deAuthToken } from "../middlewares/de-auth-token.middleware";

//login
authRouter.post("/session", validate(createSessionSchema), createUserSession);
authRouter.get("/session", deAuthToken, getUserSession);
authRouter.post("/session/refresh", validate(refreshSessionSchema), refreshUserSession);

export default authRouter;
