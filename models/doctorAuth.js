const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String },
  age: { type: Number },
  contact1: { type: String },
  contact2: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: Number },
  university: { type: String },
  specialization: { type: String },
  honors: { type: String },
  yearOfExp: { type: Number },
  aboutMe: { type: String },
  invitation: [
    {
      from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  appointment: [
    {
      patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
      },
      date: Date,
      reason: String,
      status: String
    }
  ]
});

// 🔒 Hash password before saving
doctorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 🧾 Generate JWT token
doctorSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { id: this._id, role: "doctor" },
    process.env.JWT_SECRET || "secretkey",
    { expiresIn: "7d" }
  );
};

module.exports = mongoose.model("Doctor", doctorSchema);
