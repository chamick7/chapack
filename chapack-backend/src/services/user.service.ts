import User from "../models/user.model";
import { UserLoginType, UserType } from "../types/user.types";
import { compareHash } from "../utils/bcrypt";

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
