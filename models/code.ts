import { Schema, model } from "mongoose";

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

const Code = model("code", CodeSchema);
export default Code;
