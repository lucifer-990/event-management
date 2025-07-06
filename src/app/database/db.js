import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://subhajitshaw16:Lucifer@lucifer.s8xrf.mongodb.net/events?retryWrites=true&w=majority&appName=lucifer"
);

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export const User = mongoose.model("User", userSchema);
