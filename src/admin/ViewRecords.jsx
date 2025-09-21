import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

export default function ViewRecords() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");

  const displayRecords = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallmedicalrecords`);
      setRecords(response.data);
    } catch (err) {
      setError("Failed to fetch records data ... " + err.message);
    }
  };

  useEffect(() => {
    displayRecords();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center", color: "black", fontWeight: "bolder" }}>
        <u>View All Health Records</u>
      </h3>
      {error ? (
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
          {error}
        </p>
      ) : records.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
          No Health Records Found
        </p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Record ID</th>
              <th>Diagnosis</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Patient Name</th>
              <th>Doctor Name</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.diagnosis}</td>
                <td>{record.treatment}</td>
                <td>{record.date}</td>
                <td>{record.patient?.name}</td>
                <td>{record.doctor?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
