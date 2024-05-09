import mongoose, { Schema, models } from "mongoose";

const answerSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  answer: {
    type: String,
    required: false,
  },
});

const Answer = models.Answer || mongoose.model("Answer", answerSchema);
export default Answer;
