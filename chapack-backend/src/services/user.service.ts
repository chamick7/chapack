import { Op } from "sequelize";
import User from "../models/user.model";
import { UserLoginType, UserType } from "../types/user.types";
import { compareHash, hash } from "../utils/bcrypt";

export const verifyUser = async (input: UserLoginType): Promise<User | null> => {
  const user = await User.findOne({
    where: {
      username: input.username,
    },
    raw: true,
  });

  if (user) {
    if (compareHash(user.password!, input.password)) {
      return user;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export const responseUser = (user: User): UserType => {
  delete user.password;
  return user as UserType;
};

export const createUser = async (user: User): Promise<User | null> => {
  const hashPassword = hash(user.password!);
  const user_created = await User.create({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    password: hashPassword,
  }).catch(error => {console.log(error);
  });

  if (user_created) return user_created;

  return null;
};

export const checkDuplicateEmail = async (email: string): Promise<boolean> => {
  const user = await User.findOne({
    where: {
      email,
    },
    raw: true,
  });

  if (user) return true;

  return false;
};

export const checkDuplicateUsername = async (username: string): Promise<boolean> => {
  const user = await User.findOne({
    where: {
      username,
    },
    raw: true,
  });

  if (user) return true;

  return false;
};

export const checkDuplicateEmailOrUsername = async (
  email: string,
  username: string
): Promise<boolean> => {
  const user = await User.findOne({
    where: {
      [Op.or]: [{ username }, { email }],
    },
    raw: true,
  });

  if (user) return true;

  return false;
};
