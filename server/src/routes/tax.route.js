import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createTax,
  getTaxes,
  updateTax,
  deleteTax,
} from "../controllers/tax.controller.js";

const taxRouter = Router();
taxRouter.use(auth);

taxRouter.route("/").post(isAdmin, createTax).get(isAdmin, getTaxes);

taxRouter.route("/:taxId").patch(isAdmin, updateTax).delete(isAdmin, deleteTax);

export default taxRouter;
