import { Router } from "express";
import { classRoutes } from './classRoutes';

const routes = Router();

routes.use('/class', classRoutes);

export default routes;