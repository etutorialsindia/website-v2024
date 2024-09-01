import { Router } from "express";

const router = Router();
router.use("/api/v1", (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Ban jane do pehle",
  });
});
export default router;
