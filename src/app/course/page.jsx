'use client';

import { useState } from 'react';

const AdmissionForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    aadharNumber: '',
    mobileNumber: '',
    email: '',
    dob: '',
    gender: '',
    caste: '',
    village: '',
    post: '',
    district: '',
    pinCode: '',
    state: '',
    photo: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle image upload (photo)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted! You can now print it.');
  };

  // Function to print the form data
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
      <head>
        <title>Admission Form Print</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h2 { text-align: center; }
          .form-section { margin-bottom: 20px; }
          .form-section label { display: block; font-weight: bold; margin-top: 10px; }
          .form-section p { margin: 5px 0; }
          .img-preview { margin-top: 10px; display: flex; justify-content: flex-end; }
          img { max-width: 150px; height: auto; position: absolute; top: 20px; right: 20px; }
        </style>
      </head>
      <body>
        <h2>Admission Form</h2>
        <div class="img-preview">
          <div>
            <label>Uploaded Photo:</label>
            <img src="${formData.photo ? URL.createObjectURL(formData.photo) : ''}" alt="Uploaded Photo" />
          </div>
        </div>
        <div class="form-section">
          <label>Student Name:</label>
          <p>${formData.studentName}</p>
          <label>Father's Name:</label>
          <p>${formData.fatherName}</p>
          <label>Aadhar Number:</label>
          <p>${formData.aadharNumber}</p>
          <label>Mobile Number:</label>
          <p>${formData.mobileNumber}</p>
          <label>Email:</label>
          <p>${formData.email}</p>
          <label>Date of Birth:</label>
          <p>${formData.dob}</p>
          <label>Gender:</label>
          <p>${formData.gender}</p>
          <label>Caste:</label>
          <p>${formData.caste}</p>
          <label>Village:</label>
          <p>${formData.village}</p>
          <label>Post:</label>
          <p>${formData.post}</p>
          <label>District:</label>
          <p>${formData.district}</p>
          <label>Pin Code:</label>
          <p>${formData.pinCode}</p>
          <label>State:</label>
          <p>${formData.state}</p>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="container mx-auto p-4">
      {/* Admission Form */}
      <h2 className="text-2xl font-bold mb-4">Admission Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Aadhar Number</label>
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Caste</label>
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Village</label>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Post</label>
            <input
              type="text"
              name="post"
              value={formData.post}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Right Side: Upload Photo */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Upload Photo</label>
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              accept="image/*"
              required
            />
          </div>
        </div>
      </form>

      <div className="flex space-x-4 mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handlePrint}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default AdmissionForm;
