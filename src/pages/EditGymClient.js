import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style/EditGymClient.css'; // Import the CSS file

const EditGymClient = () => {
  const { mobilenumber } = useParams(); // Get mobile number from URL
  const [client, setClient] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const mockClientData = {
    "1234567890": {
      name: "John Doe",
      mobile: "1234567890",
      photo: "http://example.com/photo.jpg",
      joiningDate: "2023-01-01",
      feeSubmissionDate: "2023-02-01",
      fee: "500",
      validTill: "2024-01-01",
    },
    "0987654321": {
      name: "Jane Smith",
      mobile: "0987654321",
      photo: "http://example.com/photo2.jpg",
      joiningDate: "2023-03-01",
      feeSubmissionDate: "2023-04-01",
      fee: "600",
      validTill: "2024-03-01",
    }
  };

  // Fetch client details based on mobile number
  const fetchClient = (mobile) => {
    // Replace this mock data fetching with an actual API call
    const fetchedClient = mockClientData[mobile];
    if (fetchedClient) {
      setClient(fetchedClient);
      setEditMode(true);
    } else {
      alert("Client not found with this mobile number.");
    }
  };

  // Load client data when the page loads based on the mobile number
  useEffect(() => {
    if (mobilenumber) {
      fetchClient(mobilenumber);
    }
  }, [mobilenumber]);

  // Handle input change for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  // Handle form submission to save the updated client
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Client Data:", client);
    alert("Client updated successfully!");
    setEditMode(false);
  };

  return (
    <div className="form-container">
      <h2>Edit Gym Client</h2>

      {editMode && client ? (
        <form onSubmit={handleSubmit} className="gym-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={client.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="text"
              name="mobile"
              value={client.mobile}
              disabled
              required
            />
          </div>

          <div className="form-group">
            <label>Photo Link:</label>
            <input
              type="text"
              name="photo"
              value={client.photo}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Joining Date:</label>
            <input
              type="date"
              name="joiningDate"
              value={client.joiningDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Expected Fee Submission Date:</label>
            <input
              type="date"
              name="feeSubmissionDate"
              value={client.feeSubmissionDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Fee (₹):</label>
            <input
              type="number"
              name="fee"
              value={client.fee}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Valid Till Date:</label>
            <input
              type="date"
              name="validTill"
              value={client.validTill}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Update Client</button>
        </form>
      ) : (
        <p>Loading client data...</p>
      )}
    </div>
  );
};

export default EditGymClient;
