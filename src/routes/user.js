import { Router } from 'express';
const user = require('../controllers/user.controller');
const router = Router();

router.get("/:id", user.getUser); // GET /users/:id
router.post("", user.createUser) // POST /users
router.patch("/:id", user.updateUser)

export default router;