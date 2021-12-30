import { Request, Response } from "express";
import InviteToken from "../models/invite-token.model";
import { signJwt, verifyJwt } from "../utils/jwt.util";
import dayjs from "dayjs";
import { verifyTokenAndDecode } from "../services/token.service";
import User from "../models/user.model";
import { hash } from "../utils/bcrypt";
import { checkDuplicateEmail, checkDuplicateUsername, createUser } from "../services/user.service";

export const createInviteToken = (req: Request, res: Response) => {
  const inviter = req.user;

  const token = signJwt(
    { inviter: inviter.firstName },
    { expiresIn: process.env.INVITE_TOKEN_DURATION }
  );

  InviteToken.create({
    token: token,
    expired_date: dayjs().add(2, "day").toDate(),
    inviter_id: inviter.id,
  })
    .then((result) => {
      res.status(201).json({
        token: token,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const verifyInviteToken = async (req: Request, res: Response) => {
  const token = req.params.token;

  const decoded = await verifyTokenAndDecode(token);
  if (decoded) {
    return res.status(200).json({
      valid: true,
      inviter: decoded.inviter,
    });
  }

  return res.status(403).json({
    message: "token Invalid",
  });
};

export const createUserWithInviteToken = async (req: Request, res: Response) => {
  const { invite_token, email, firstName, lastName, username, password } = req.body;

  const decoded = await verifyTokenAndDecode(invite_token);
  if (decoded) {
    const user = new User();
    user.email = email.trim();
    user.firstName = firstName.trim();
    user.lastName = lastName.trim();
    user.username = username.trim();
    user.password = password.trim();

    if (await checkDuplicateEmail(user.email)) {
      return res.status(409).json({
        duplicate: "email",
      });
    }

    if (await checkDuplicateUsername(user.username)) {
      return res.status(409).json({
        duplicate: "username",
      });
    }

    const user_created = await createUser(user);
    if (user_created) {
      const inviteToken = await InviteToken.update(
        {
          valid: false,
          receiver_id: user_created.id,
        },
        { where: { token: invite_token } }
      );
      if (inviteToken) {
        return res.status(201).json({
          message: "user created",
        });
      }
    }

    return res.status(400).send();
  }

  return res.status(403).json({
    message: "token Invalid",
  });
};
