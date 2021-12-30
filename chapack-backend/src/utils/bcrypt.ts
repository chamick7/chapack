import * as bcrypt from "bcrypt";

export const hash = (data: string) => {
  return bcrypt.hashSync(data, 12);
};

export const compareHash = (hash: string, plain: string) => bcrypt.compareSync(plain, hash);
