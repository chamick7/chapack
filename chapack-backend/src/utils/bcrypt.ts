import * as bcrypt from "bcrypt";

export const compareHash = (hash: string, plain: string) => bcrypt.compareSync(plain, hash);
