import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  upateUserProfile,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, upateUserProfile);

router.route("/:id").delete(protect, admin, deleteUser)  

export default router;
