import Joi from 'joi';

export const passwordValidator = Joi.string()
  .min(6)
  .max(64)
  .pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+=\\-{}\\[\\]:;"\'<>,.?/]+$'))
  .required()
  .messages({
    'string.min': 'Password must be at least 6 characters.',
    'string.max': 'Password must not exceed 64 characters.',
    'string.pattern.base': 'Password contains invalid characters.',
    'any.required': 'Password is required.',
  });
