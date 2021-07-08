const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  isCompleted: {
    type: Boolean,
    default: false,
    required: true,
  },
  urgent: {
    type: Boolean,
    default: false,
    required: true,
  },
  important: {
    type: Boolean,
    default: false,
    required: true,
  },
  deadline: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("todo", TodoSchema);
