// src/validation/contacts.js

import Joi from 'joi';
import { typeList } from '../constants/index.js';
import { isValidObjectId } from 'mongoose';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'any.required': 'The name should be between 3 and 20 characters.',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'any.required': 'The phone number should be between 3 and 20 characters.',
  }),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...typeList)
    .required()
    .messages({
      'any.required': 'Specify the type of contact!',
    }),
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('User id should be a valid mongo id');
    }
    return true;
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...typeList),
});
