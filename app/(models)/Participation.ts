import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const participationsSchema = new Schema(
  {
    idOfUser: String,
    participation: Boolean,
    idOfRasso:String,
  },
  {
    timestamps: true,
  }
);

const Participations = mongoose.models.Participations || mongoose.model("Participations", participationsSchema);

export default Participations;
