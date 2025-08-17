import mongoose from "mongoose";

export const dbCollection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HospitalProject",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};
