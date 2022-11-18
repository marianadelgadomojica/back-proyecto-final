import express from "express";
import "reflect-metadata";
import cors from "cors";

import indexRoutes from "./routes/index.routes.js";

const app = express();


//puerto de variable de entorno o 4000
app.set("port", process.env.PORT || 4000);


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", indexRoutes);

export default app;