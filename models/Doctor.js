const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: String,
    specialty: String,
    email: String,
    phone: String,
    address: String,
    availableTimes: [String],
    approved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
