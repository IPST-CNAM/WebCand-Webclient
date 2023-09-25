import React, { useState } from "react";
import {  Link , useNavigate } from 'react-router-dom'
import axios from "axios";
import "./CompanyOffers.css";

const CompanyOffer = () => {
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [requiredDegreeLevel, setRequiredDegreeLevel] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [idRegisteredUser, setIdRegisteredUser] = useState("");
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      duration,
      start_date: startDate,
      required_degree_level: requiredDegreeLevel,
      title,
      description,
      id_registered_user: idRegisteredUser,
    };

    try {
      const response = await axios.post("http://localhost:9000/submitOffers", formData);
      console.log("Offer submitted successfully:", response.data);
      setSuccessMessage("Offre ajoutée avec succès !");
      // Redirect or update state after successful update
      setTimeout(() => {
        navigate('/ManageOffers'); // Redirect to the desired path
      }, 2000);
    } catch (error) {
      console.error("Error submitting offer:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Soumettre une offre</h2>
      <br></br>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Duration:</label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="text"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Required Degree Level:</label>
          <input
            type="text"
            className="form-control"
            value={requiredDegreeLevel}
            onChange={(e) => setRequiredDegreeLevel(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>ID Registered User:</label>
          <input
            type="text"
            className="form-control"
            value={idRegisteredUser}
            onChange={(e) => setIdRegisteredUser(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Offer
        </button>
        <Link to={`/ManageOffers`} >Voir les offres</Link>
      </form>
    </div>
  );
};

export default CompanyOffer;
