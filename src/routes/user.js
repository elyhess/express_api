import { Router } from 'express';
const user = require('../controllers/user.controller');
const router = Router();

router.get("/:id", user.getUser); // GET /users/:id
router.get("", user.getUsers); // GET /users
router.post("", user.createUser) // POST /users
router.patch("/:id", user.updateUser) // UPDATE /users/:id
router.delete("/:id", user.deleteUser); // DELETE /users/:id

export default router;