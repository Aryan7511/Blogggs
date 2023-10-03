import mongoose from "mongoose";
/* MONGOOSE SETUP */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database Connected Successfully");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;