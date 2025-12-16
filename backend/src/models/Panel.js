import mongoose from "mongoose";

const panelSchema = new mongoose.Schema(
  {
    location: { type: String, required: true, trim: true },

    avgMonthlyElectricityBillIdr: { type: Number, min: 0, default: 0 },

    buildingType: {
      type: String,
      enum: ["School", "Small Business", "Home", "Farm"],
      required: true,
    },
    roofAvailability: { type: String, enum: ["Yes", "No"], required: true },
    installationDate: { type: Date },
    totalInstallationCostRp: { type: Number, min: 0, default: 0 },
    totalAreaCoveredM2: { type: Number, min: 0, default: 0 },
    avgMonthlyElectricityConsumedKwh: { type: Number, min: 0, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Panel", panelSchema);