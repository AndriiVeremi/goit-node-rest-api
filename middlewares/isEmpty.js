import HttpError from "../helpers/HttpError.js";

export const isEmpty = (req, res, next) => {
  const { length } = Object.keys(req.body);
  if (!length) {
    return next(HttpError(400, "Body mast have"));
  }
  next();
};
