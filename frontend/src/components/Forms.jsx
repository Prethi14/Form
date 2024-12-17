import React, { useState } from 'react';

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    email: '',
    phone: '',
    department: '',
    dateOfJoining: '',
    role: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.employeeId.trim()) newErrors.employeeId = 'Employee ID is required';
    if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.dateOfJoining) newErrors.dateOfJoining = 'Date of Joining is required';
    if (!formData.role.trim()) newErrors.role = 'Role is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch('http://localhost:5000/api/employees/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Employee added successfully');
        setFormData({
          name: '',
          employeeId: '',
          email: '',
          phone: '',
          department: '',
          dateOfJoining: '',
          role: '',
        });
        setErrors({});
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (err) {
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-gray-200 to-blue-100 flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Form Section */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-500 px-12 py-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">Add Employee</h2>
          <p className="text-gray-200 mb-8">Please fill in the details to add an employee</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-gray-800 focus:ring-4 focus:ring-blue-500 outline-none"
                required
              />
              {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Employee ID */}
            <div>
              <input
                type="text"
                name="employeeId"
                placeholder="Employee ID"
                value={formData.employeeId}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-gray-800 focus:ring-4 focus:ring-blue-500 outline-none"
                required
              />
              {errors.employeeId && <p className="text-red-300 text-sm mt-1">{errors.employeeId}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-gray-800 focus:ring-4 focus:ring-blue-500 outline-none"
                required
              />
              {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-gray-800 focus:ring-4 focus:ring-blue-500 outline-none"
                required
              />
              {errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Department */}
            <div>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-gray-800 focus:ring-4 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
              </select>
              {errors.department && <p className="text-red-300 text-sm mt-1">{errors.department}</p>}
            </div>

            {/* Date of Joining */}
            <div>
              <input
                type="date"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-gray-800 focus:ring-4 focus:ring-blue-500 outline-none"
                required
              />
              {errors.dateOfJoining && <p className="text-red-300 text-sm mt-1">{errors.dateOfJoining}</p>}
            </div>

            {/* Role */}
            <div>
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-gray-800 focus:ring-4 focus:ring-blue-500 outline-none"
                required
              />
              {errors.role && <p className="text-red-300 text-sm mt-1">{errors.role}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-white text-blue-700 font-bold py-3 rounded-md hover:bg-blue-200 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;