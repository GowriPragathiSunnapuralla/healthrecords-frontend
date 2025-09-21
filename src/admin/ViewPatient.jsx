import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function ViewPatient() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState("");

  const displayPatients = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallpatients`);
      setPatients(response.data);
    } catch (err) {
      setError("Failed to fetch patients data ... " + err.message);
    }
  };

  useEffect(() => {
    displayPatients();
  }, []);

  const deletePatient = async (id) => {
    try {
      const response = await axios.delete(`${config.url}/admin/deletepatient?patientid=${id}`, {
        withCredentials: true
      });
      toast.success(response.data);
      displayPatients();
    } catch (err) {
      const errorMessage = err.response?.data || "Unexpected Error Occurred";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center", color: "black", fontWeight: "bolder" }}>
        <u>View All Patients</u>
      </h3>
      <ToastContainer position="top-center" autoClose={4000} />
      {error ? (
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
          {error}
        </p>
      ) : patients.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
          No Patient Data Found
        </p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Username</th>
              <th>Mobile No</th>
              <th>Location</th>
              <th>Age</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.gender}</td>
                <td>{patient.dob}</td>
                <td>{patient.email}</td>
                <td>{patient.username}</td>
                <td>{patient.mobileno}</td>
                <td>{patient.location}</td>
                <td>{patient.age}</td>
                <td>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => deletePatient(patient.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
