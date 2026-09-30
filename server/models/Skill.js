const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Database", "DevOps", "Other"],
      default: "Other",
    },
    proficiency: {
      type: Number,
      min: 1,
      max: 100,
      default: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
