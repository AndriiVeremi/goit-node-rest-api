import express from "express";
import { isEmpty } from "../middlewares/isEmpty.js";
import contactsControllers from "../controllers/contactsControllers.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", contactsControllers.getOneContact);

contactsRouter.delete("/:id", contactsControllers.deleteContact);

contactsRouter.post("/", contactsControllers.createContact);

contactsRouter.put("/:id", isEmpty, contactsControllers.updateContact);

export default contactsRouter;
