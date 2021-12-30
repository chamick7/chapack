import express, { Express } from "express";
import authRouter from "./routers/auth.route";
import userRouter from "./routers/user.route";
const apiRouter = express.Router();

function routes(app: Express) {
  app.get("/api/healthcheck", (req, res) => res.send(200));
  app.use("/api", apiRouter);
}

apiRouter.use("/user", userRouter);
apiRouter.use("/auth", authRouter);

export default routes;
