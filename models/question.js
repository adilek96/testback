import mongoose, { Schema, models } from "mongoose";

const questionSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  lang: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Object,
    required: true,
  },
  image: {
    type: Array,
    required: false,
  },
});

const Question = models.Question || mongoose.model("Question", questionSchema);
export default Question;

// {
//   id: 1;
//   lang: "az";
//   type: "math";
//   question: "Funksiyanın f(x) = 3x^2 - 4x + 2 x = 2 nöqtəsində türevi hansıdır?";
//   options: {
//     A: "8";
//     B: "10";
//     C: "12";
//     D: "14";
//   }
// }
