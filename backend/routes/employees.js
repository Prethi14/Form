const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

router.post('/add', (req, res) => {
  const { name, employeeId, email, phone, department, dateOfJoining, role } = req.body;
  const query = 'INSERT INTO employees SET ?';

  connection.query(query, { name, employeeId, email, phone, department, dateOfJoining, role }, (err, result) => {
    if (err) {
      return res.status(500).send('Error adding employee');
    }
    res.status(200).send('Employee added successfully');
  });
});

module.exports = router;
