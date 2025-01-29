const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    doctorId: mongoose.Schema.Types.ObjectId,
    patientId: mongoose.Schema.Types.ObjectId,
    date: Date,
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
