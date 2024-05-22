import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const datePostSchema = new Schema(
  {
    date: String,
    title: String,
    lieu:String,
    horaire:String,
    duree:String,
    tag1:String,
    tag2:String,
    tag3:String,
    objectif:String,
    content: String,
    idOfUser:String,
  },
  {
    timestamps: true,
  }
);

const Date = mongoose.models.Date || mongoose.model("Date", datePostSchema);

export default Date;
