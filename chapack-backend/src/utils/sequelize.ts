import { Sequelize } from "sequelize-typescript";
import User from "../models/user.model";
import InviteToken from "../models/invite-token.model";
require("dotenv").config();

const DATABASE = process.env.DATABASE as string;
const HOST = process.env.HOST as string;
const USERNAME = process.env.USERNAME as string;
const PASSWORD = process.env.PASSWORD as string;

export const sequelize = new Sequelize({
  host: HOST,
  database: DATABASE,
  dialect: "mysql",
  username: USERNAME,
  password: PASSWORD,
});

sequelize.addModels([User, InviteToken]);
