const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    history: [String]
});

module.exports = mongoose.model('Patient', PatientSchema);
