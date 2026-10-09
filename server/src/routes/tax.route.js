import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createTax,
  getAllTaxes,
  updateTax,
  deleteTax,
} from "../controllers/tax.controller.js";

const taxRouter = Router();
taxRouter.use(auth);

taxRouter.route("/").post(isAdmin, createTax).get(isAdmin, getAllTaxes);

taxRouter.route("/:taxId").patch(isAdmin, updateTax).delete(isAdmin, deleteTax);

export default taxRouter;
