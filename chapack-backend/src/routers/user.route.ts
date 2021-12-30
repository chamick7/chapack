import express from "express";
import {
  createInviteToken,
  createUserWithInviteToken,
  verifyInviteToken,
} from "../controllers/user.controller";
import { deAuthToken } from "../middlewares/de-auth-token.middleware";
import validate from "../middlewares/validate-resource.middleware";
import { createUserWithTokenSchema } from "../schema/user.schema";
const userRouter = express.Router();

userRouter.post("/invite-token", deAuthToken, createInviteToken);
userRouter.get("/invite-token/:token", verifyInviteToken);
userRouter.post("/create-with-token", validate(createUserWithTokenSchema), createUserWithInviteToken);

export default userRouter;
