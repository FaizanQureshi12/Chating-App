import { register } from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.post("/register", register);

export default router;

// const {register}= require("../controllers/userController"); // same
// const router = require("express").Router(); // same

// router.post("/register",register); // same

// module.exports = router; // same




