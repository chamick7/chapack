import { sequelize } from "../utils/sequelize";
import { DataTypes, Model } from "sequelize";
import InviteToken from "./invite-token.model";

class User extends Model {
  id!: number;
  username!: string;
  email!: string;
  password?: string;
  firstName!: string;
  lastName!: string;
  role!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "member",
    },
  },
  {
    sequelize: sequelize,
  }
);

User.hasMany(InviteToken, {
  as: "inviter",
  foreignKey: "inviter_id",
});

User.hasMany(InviteToken, {
  as: "receiver",
  foreignKey: "receiver_id",
});

export default User;
