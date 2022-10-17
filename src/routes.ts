import { Router } from "express";

import userRoutes from "./database/routes/user/userRoutes";

const routes = Router();

routes.use(userRoutes)

export default routes;
