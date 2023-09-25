import React, { useState, useEffect } from "react";
import {  Link , useParams, useNavigate, } from 'react-router-dom'
import axios from "axios";
import "./EditOffers.css"

const EditOfferPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
  const [duration, setDuration] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [requiredDegreeLevel, setRequiredDegreeLevel] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [idRegisteredUser, setIdRegisteredUser] = useState("");

  useEffect(() => {
    // Fetch offer details based on offerId and populate the state accordingly
    const fetchOfferDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/editOfferGet/${id}`);

        const {
          duration,
          start_date,
          required_degree_level,
          title,
          description,
          id_registered_user,
        } = response.data[0];

        console.log("Duration:", duration);
        console.log("Start Date:", start_date);
        console.log("Required Degree Level:", required_degree_level);
        console.log("Title:", title);
        console.log("Description:", description);
        console.log("ID Registered User:", id_registered_user);

        setDuration(duration);
        console.log(duration);
        setStartDate(start_date);
        setRequiredDegreeLevel(required_degree_level);
        setTitle(title);
        setDescription(description);
        setIdRegisteredUser(id_registered_user);

      } catch (error) {
        console.error("Error fetching offer details:", error);
      }
    };

    fetchOfferDetails();
  }, [id]);

  const handleUpdateOffer = async (event) => {
    event.preventDefault();

    const updatedOfferData = {
      duration,
      start_date: startDate,
      required_degree_level: requiredDegreeLevel,
      title,
      description,
      id_registered_user: idRegisteredUser,
    };

    try {
      const response = await axios.put(
        `http://localhost:9000/editOfferPut/${id}`,
        updatedOfferData
      );
      console.log("Offer updated successfully:", response.data);
      setSuccessMessage("Mise à jour réussie !");
      // Redirect or update state after successful update
      setTimeout(() => {
        navigate('/ManageOffers'); // Redirect to the desired path
      }, 2000);
    } catch (error) {
      console.error("Error updating offer:", error);
    }
  };

  
  return (
    <div className="container">
      <h2>Edit Offer</h2>
      <br></br>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <br></br>
      <form onSubmit={handleUpdateOffer}>
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
          Save Changes
        </button>
        <Link to={`/ManageOffers`} >Revenir en arrière</Link>
      </form>
    </div>
  );
};

export default EditOfferPage;
