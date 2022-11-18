import { Router } from "express";
import dataRoutes from "./data.routes.js";

const indexRoutes = Router();

indexRoutes.use('/data', dataRoutes)

export default indexRoutes; 