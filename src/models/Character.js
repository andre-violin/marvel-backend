const { Schema, model } = require("mongoose");
const CharacterSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: String,
    thumbnail: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = model("Character", CharacterSchema);
