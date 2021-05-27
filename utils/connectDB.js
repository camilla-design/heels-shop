import mongoose from "mongoose";

let MONGODB_URL = "mongodb+srv://user:Noroff2021@cluster0.gufgl.mongodb.net/userData?retryWrites=true&w=majority";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected.");
    return;
  }
  mongoose.connect(
    MONGODB_URL,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    err => {
      if (err) throw err;
      console.log("Connected to mongodb.");
    }
  );
};

export default connectDB;
