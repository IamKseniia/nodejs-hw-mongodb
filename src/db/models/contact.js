// src/db/models/contact.js

import { model, Schema } from 'mongoose';
import { typeList } from '../../constants/index.js';
import { handleSaveError } from './hooks.js';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: typeList,
      required: true,
      default: typeList[2],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    photo: {
      type: String,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

contactsSchema.post('save', handleSaveError);

contactsSchema.pre('findOneAndUpdate', function (next) {
  (this.options.new = true), (this.options.runValidators = true), next();
});

contactsSchema.post('findOneAndUpdate', handleSaveError);

export const ContactsCollection = model('contact', contactsSchema);
