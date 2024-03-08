import mongoose, { Schema, model } from "mongoose";

const CodeSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  used: {
    type: Boolean,
    default: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.Code || mongoose.model("Code", CodeSchema);

export default User;
