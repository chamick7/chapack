import { sequelize } from "../utils/sequelize";
import { DataTypes, Model } from "sequelize";
import User from "./user.model";

class InviteToken extends Model {
  id!: number;
  token!: string;
  inviter!: User;
  inviter_id?: number;
  receiver?: User;
  receiver_id?: number;
  expired_date!: Date;
  valid!: boolean;
}

InviteToken.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inviter_id: {
      type: DataTypes.INTEGER,
    },
    receiver_id: {
      type: DataTypes.INTEGER,
    },
    expired_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    valid: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize: sequelize,
  }
);

export default InviteToken;
