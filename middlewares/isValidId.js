import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

export const isValidId = (req, res, next) => {

  const { id } = req.params;

  if (!isValidObjectId()) {
    return next(HttpError(404, `${id} not valid ID`));
  }

  next();

};

