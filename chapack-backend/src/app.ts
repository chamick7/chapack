import express from "express";
import { sequelize } from "../src/utils/sequelize";
import routes from "./routes";
require("dotenv").config();
var morgan = require("morgan");
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


const port = process.env.APP_PORT || 4000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

    routes(app);
  });
});

// TestDatabaseConnection();
