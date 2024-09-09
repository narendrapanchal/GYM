import React, { useState } from "react";
import '../style/AddGymClient.css'; // Import the CSS file

const AddGymClient = () => {
  const [client, setClient] = useState({
    name: "",
    mobile: "",
    photo: "",
    joiningDate: "",
    feeSubmissionDate: "",
    fee: "",
    validTill: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(client); // You can handle saving the data to a database here
    alert("Client Added Successfully!");
    setClient({
      name: "",
      mobile: "",
      photo: "",
      joiningDate: "",
      feeSubmissionDate: "",
      fee: "",
      validTill: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Add Gym Client</h2>
      <form onSubmit={handleSubmit} className="gym-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={client.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={client.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Photo Link:</label>
          <input
            type="text"
            name="photo"
            value={client.photo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Joining Date:</label>
          <input
            type="date"
            name="joiningDate"
            value={client.joiningDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Expected Fee Submission Date:</label>
          <input
            type="date"
            name="feeSubmissionDate"
            value={client.feeSubmissionDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Fee (₹):</label>
          <input
            type="number"
            name="fee"
            value={client.fee}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Valid Till Date:</label>
          <input
            type="date"
            name="validTill"
            value={client.validTill}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Client</button>
      </form>
    </div>
  );
};

export default AddGymClient;
