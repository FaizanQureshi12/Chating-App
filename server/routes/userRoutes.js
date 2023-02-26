// import {register} from '../controllers/userControll'
// import express from 'express'
const {register}= require("../controllers/userControll");
const router = require("express").Router();
// const router = express.Router();

router.post("/register",register);

// export default router
module.exports = router;

