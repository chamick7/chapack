import { Request, Response } from "express";
import { UserLoginType, UserType } from "../types/user.types";
import { responseUser, verifyUser } from "../services/user.service";
import { signJwt, verifyJwt } from "../utils/jwt.util";
import { JwtPayload } from "jsonwebtoken";
require("dotenv").config();

interface TokenEssential {
  iat?: number;
  exp?: number;
}

//login
export const createUserSession = async (req: Request, res: Response) => {
  //   const { username, password } = req.body as UserLoginDocument;
  const user = await verifyUser(req.body as UserLoginType);

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const resUser = responseUser(user);

  const accessToken = signJwt(resUser, {
    expiresIn: process.env.ACCESS_TOKEN_DURATION,
  });
  const refreshToken = signJwt(resUser, {
    expiresIn: process.env.REFRESH_TOKEN_DURATION,
  });

  return res.json({ user: resUser, access_token: accessToken, refresh_token: refreshToken });
};

export const getUserSession = (req: Request, res: Response) => {
  if (req.user) {
    return res.status(200).json(req.user);
  }
};

export const refreshUserSession = (req: Request, res: Response) => {
  const refreshToken = req.body.refresh_token;

  const { decoded, expired } = verifyJwt(refreshToken);
  if (expired) {
    return res.status(403).json({
      message: "token expired",
    });
  }

  if (decoded) {
    const user = removeIatExp(decoded as JwtPayload) as UserType;
    const newAccessToken = signJwt(user, {
      expiresIn: process.env.ACCESS_TOKEN_DURATION,
    });

    return res.status(201).json({ access_token: newAccessToken });
  }

  return res.status(401).json({
    message: "invalid token",
  });
};

const removeIatExp = (jwtPayload: JwtPayload) => {
  const forRemoveEssential = jwtPayload as TokenEssential;
  delete forRemoveEssential.exp;
  delete forRemoveEssential.iat;
  return forRemoveEssential;
};
