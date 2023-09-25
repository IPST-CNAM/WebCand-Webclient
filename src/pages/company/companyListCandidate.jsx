import React, { useState, useEffect } from "react";
import axios from "axios";
import "./companyListCandidate.css"


const CompanyListCandidate = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get("http://localhost:9000/candidateAdmitted");
        setCandidates(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des candidats :", error);
      }
    };

    fetchCandidates();
  }, []);

  return (
<div className="wrap">
  <h2 className="my-4">Liste des candidats admis</h2>
  <table className="table">
    <thead>
      <tr>
        <th>Prénom</th>
        <th>Nom</th>
        <th>Email</th>
        <th>Numéro INE</th>
        <th>Dernier diplôme obtenu</th>
        <th>Expériences professionnelles</th>
        <th>Genre</th>
        <th>Compétences</th>
      </tr>
    </thead>
    <tbody>
      {candidates.map(candidate => (
        <tr key={candidate.first_name}>
          <td>{candidate.first_name}</td>
          <td>{candidate.last_name}</td>
          <td>{candidate.internal_email}</td>
          <td>{candidate.ine_number}</td>
          <td>{candidate.last_degree}</td>
          <td>{candidate.work_experiences}</td>
          <td>{candidate.gender}</td>
          <td>{candidate.skills}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default CompanyListCandidate;
