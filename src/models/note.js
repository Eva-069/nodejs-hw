// src/models/student.js

import { Schema } from 'mongoose';
import { model } from 'mongoose';

const notesSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    tag: {
      type: String,
      enum: ['Work', 'Personal', 'Meeting','Shopping','Ideas','Travel','Finance','Health','Important', 'Todo' ],
      default:'Todo',
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);


export const Notes = model('Notes', notesSchema);
