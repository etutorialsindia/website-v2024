import { Router } from "express";
import { ExpressRoute } from "../utils/index.js";
import {CategoryController, CourseController, default as defaultController} from "../controller/index.js"

const router = Router();
router.get("/api/v1/courses",ExpressRoute(CourseController.list));
router.get("/api/v1/categories",ExpressRoute(CategoryController.list));
router.use("/api/v1", ExpressRoute(defaultController));
export default router;
