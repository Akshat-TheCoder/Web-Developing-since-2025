import mongoose from "mongoose";
const { Schema } = mongoose;

const TrackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: (v) => v.length > 0 && v.length <= 100,
      default: "Anonymous",
    },
    binary: {
      type: Buffer,
      required: false,
    },
    living: {
      type: Boolean,
      default: true,
    },
    updated: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    age: {
      type: Number,
      required: true,
      get: (v) => Math.floor(v), // Round down age
      set: (v) => Math.round(v), // Round on set
      min: 18,
      max: 100,
    },
    rating: {
      type: Number,
      immutable: false,
    },
    price: {
      type: Schema.Types.Decimal128, // Fixed: Types (plural)
      required: true,
    },
    mixed: {
      type: Schema.Types.Mixed,
      _required: function () {
        return this.name !== "instrumental";
      },
      validate: (v) => typeof v === "object" && Object.keys(v).length > 0,
    },
    duration: {
      type: Number,
      default: 180,
    },
  },
  {
    selectDefaults: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  },
);

export const Track = mongoose.model("Track", TrackSchema);
