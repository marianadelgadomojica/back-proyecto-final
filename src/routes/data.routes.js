import { Router } from 'express'
import { DataControllers } from "../controllers/data.controller.js"

const dataRoutes = Router()

const dataController = new DataControllers()

dataRoutes.route("/")
    .get(dataController.getAll)

export default dataRoutes