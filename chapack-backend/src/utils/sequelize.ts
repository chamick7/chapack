import { Sequelize } from "sequelize-typescript";
import User from "../models/user.model";
import InviteToken from "../models/invite-token.model";
import Package from "../models/package.model";
import TransportCompany from "../models/transport-company.mode";
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
  timezone: "+7:00",
});

sequelize.addModels([User, InviteToken, Package, TransportCompany]);
