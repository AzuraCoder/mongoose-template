// Read more visit https://expressjs.com/en/guide/routing.html

import express from "express";
import { getUser, login, register } from "../controllers/userController.js";
import { authentication } from "../middlewares/auth.js";


const router = express.Router();

// Route Auth
router.post('/register', register)
router.post('/login', login)
router.get('/user', authentication, getUser)

export default router;
