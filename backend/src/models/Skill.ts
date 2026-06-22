import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  category: String,

  skills: [
    {
      name: String,
      level: Number,
    },
  ],
});

export default mongoose.model("Skill", skillSchema);