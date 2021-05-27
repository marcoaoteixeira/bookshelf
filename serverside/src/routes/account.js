import express from "express";
import accountController from "../controllers/account";

const router = express.Router();

router.post("/auth", accountController.auth);

export default router;
