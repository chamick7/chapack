declare namespace Express {
import { UserType } from '../chapack-frontend/src/types/user.type';
  export interface Request {
    user: UserType;
  }
}
