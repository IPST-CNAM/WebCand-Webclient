import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./ManageOffers.css";

const CompanyOffer = () => {
  const [offers, setOffers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // État pour le terme de recherche


  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("http://localhost:9000/manageOffers");
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchOffers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/deleteOffers/${id}`);
      setSuccessMessage("Supprimé avec succès !");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wrap">
      <h2>Liste des offres de la société</h2>
      <br></br>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <br></br>
      <Link to={`/CompanyOffers`} >Ajouter une offre</Link>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={searchTerm}
        className="search-input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>ID Offre</th>
            <th>Durée</th>
            <th>Date de début</th>
            <th>Niveau de diplôme requis</th>
            <th>Titre</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {offers
            .filter((offer) => offer.title.toLowerCase().includes(searchTerm.toLowerCase())) // Filtrage basé sur le titre
            .map((offer) => (
              <tr key={offer.id_company_offer}>
                <td>{offer.id_company_offer}</td>
                <td>{offer.duration}</td>
                <td>{offer.start_date}</td>
                <td>{offer.required_degree_level}</td>
                <td>{offer.title}</td>
                <td>{offer.description}</td>
                <td>
                  <Link to={`/EditOffers/${offer.id_company_offer}`} ><button className="edit-button"><i className="fas fa-edit"></i></button></Link>
                  <button className="delete-button" onClick={() => handleDelete(offer.id_company_offer)}><i className="fas fa-trash"></i></button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyOffer;
