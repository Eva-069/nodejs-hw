
import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      default:'',
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

noteSchema.index({ title: 'text',content: 'text'});

export const Note = model('Note', noteSchema);
