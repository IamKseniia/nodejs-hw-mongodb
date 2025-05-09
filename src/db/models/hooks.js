// src/db/models/hooks.js

export const handleSaveError = (error, doc, next) => {
  error.status = 400;
  next();
};
