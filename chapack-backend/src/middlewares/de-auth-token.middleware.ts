import { Request, Response, NextFunction } from "express";
import { UserType } from "../types/user.types";
import { verifyJwt } from "../utils/jwt.util";

export const deAuthToken = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.replace(/^Bearer\s/, "");

  if (!accessToken) {
    return res.status(401).send();
  }

  const { decoded, expired } = verifyJwt(accessToken);
  if (expired) {
    return res.status(401).json({
      message: "token expired",
    });
  }

  if (decoded) {
    const user: UserType = decoded as UserType;
    req.user = user;
  }

  return next();
};
