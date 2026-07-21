// models/AdminActivity.js
import mongoose from 'mongoose';

const adminActivitySchema = new mongoose.Schema({
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  loginTime: { type: Date, default: Date.now }
});

export default mongoose.model('AdminActivity', adminActivitySchema);