import { JwtPayload } from "jsonwebtoken";

export interface DecodedInviteToken extends JwtPayload {
  inviter: string;
}
