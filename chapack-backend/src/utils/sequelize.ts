import { Sequelize } from "sequelize";
require("dotenv").config();

const DATABASE = process.env.DATABASE as string;
const HOST = process.env.HOST as string;
const USERNAME = process.env.USERNAME as string;
const PASSWORD = process.env.PASSWORD as string;

export const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "mysql",
});
