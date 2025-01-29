const Appointment = require('../models/Appointment');

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('doctorId').populate('patientId');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create appointment' });
    }
};
