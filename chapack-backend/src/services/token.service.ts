import InviteToken from "../models/invite-token.model";
import { DecodedInviteToken } from "../types/token.types";
import { verifyJwt } from "../utils/jwt.util";

export const findInviteValidToken = async (token: string): Promise<InviteToken | null> => {
  const token_query = await InviteToken.findOne({
    where: {
      token: token,
      valid: true,
    },
    raw: true,
  });

  if (token_query) {
    return token_query;
  }

  return null;
};

export const verifyTokenAndDecode = async (token: string): Promise<DecodedInviteToken | null> => {
  const token_query = await findInviteValidToken(token);

  if (token_query) {
    const { valid, expired, decoded } = verifyJwt(token);
    if (valid && decoded) {
      const decodedInvite = decoded as DecodedInviteToken;

      return decodedInvite;
    }
  }

  return null;
};
