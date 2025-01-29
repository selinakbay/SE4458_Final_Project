const Patient = require('../models/Patient');

exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createPatient = async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create patient' });
    }
};
