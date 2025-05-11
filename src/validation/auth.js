// src/validation/auth.js

import Joi from 'joi';
import { passwordValidator } from '../utils/passwordValidator.js';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: passwordValidator,
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const sendResetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  password: passwordValidator,
});

export const loginWithGoogleOAuthSchema = Joi.object({
  code: Joi.string().required(),
});
