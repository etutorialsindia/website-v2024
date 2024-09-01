import { Router } from "express";
import { ExpressRoute } from "../utils/index.js";
import {default as defaultController} from "../controller/index.js"

const router = Router();
router.use("/api/v1", ExpressRoute(defaultController));
export default router;
