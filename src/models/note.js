
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
    default: false,
  },
  tag: {
    type: String,
    trim: true,
    enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important'],
    default: 'Todo',
  },
  onDuty: {
    type: Boolean,
    default: false,
  },
},
{
    timestamps: true,
});

export const Note = mongoose.model('Note', noteSchema);
