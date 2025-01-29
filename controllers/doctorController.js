const Doctor = require('../models/Doctor');

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find(req.query.search ? { name: new RegExp(req.query.search, 'i') } : {});
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create doctor' });
    }
};
