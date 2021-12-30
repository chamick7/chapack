import jwt from "jsonwebtoken";
require("dotenv").config();

export const signJwt = (object: Object, options?: jwt.SignOptions) => {
  const secretKey = process.env.JWT_SECRET as string;
  return jwt.sign(object, secretKey, { ...options, algorithm: "HS256" });
};

export const verifyJwt = (token: string) => {
  const secretKey = process.env.JWT_SECRET as string;

  try {
    const decoded = jwt.verify(token, secretKey);
    return {
      valid: true,
      expired: false,
      decoded: decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
};
