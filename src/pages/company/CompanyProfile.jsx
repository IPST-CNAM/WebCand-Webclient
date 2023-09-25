import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CompanyProfile.css";

const CompanyPage = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [offers, setOffers] = useState([]);
  const [partners, setPartners] = useState([]);
  const [description, setDescription] = useState('')
  const [isFocused, setIsFocused] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await axios.get('http://localhost:9000/getCompanyInfo');
        setCompanyInfo(response.data[0]);
        setDescription(response.data[0]?.description || '');
        setPartners([
            { name: 'Partenaire 1', imageSrc: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
            { name: 'Partenaire 2', imageSrc: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
            // ... ajoutez les autres partenaires
        ]);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'entreprise:', error);
      }
    };

    // Appel de la fonction pour récupérer les infos au chargement initial
    if (!companyInfo) {
      fetchCompanyInfo();
    }
  }, [companyInfo]);

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

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Mettez à jour la description à chaque changement
  };

  const handleSaveDescription = async () => {
    try {
      // Mettez à jour la description dans la base de données
      await axios.put('http://localhost:9000/updateCompanyDescription', {
        description: description,
        name : companyInfo.name
      });
        window.location.reload();
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la description:', error);
    }
  };

  const handleCancelEdit = () => {
    // Réinitialiser la description avec la valeur de l'entreprise
    setDescription(companyInfo?.description || '');
    setIsEditing(false);
  };

  return (
    <div className="company-page">
      <div className="column">
        <div className="company-image">
          {/* Insérez ici l'image de la company */}
          <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Description" />
        </div>
        <section className="company-info">
          {/* Conditionally render company information */}
          {companyInfo ? (
            <>
              <h2>Nom de l'entreprise: {companyInfo.name}</h2>
              <p>Secteur d'activité: {companyInfo.business_sector}</p>
              <p>Taille: {companyInfo.size}</p>
              <p>Valeurs: {companyInfo.company_values}</p>
            </>
          ) : (
            <p>Loading company information...</p>
          )}
        </section>
      </div>

      <div className="column">
        <textarea
          className="description-textarea"
          value={isEditing ? description : companyInfo?.description || ''}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          readOnly={!isEditing}
          onChange={handleDescriptionChange}
          placeholder="Modifier la description de l'entreprise"
        />
        {!isEditing && <button onClick={handleStartEditing}>Modifier</button>}
        {isEditing && (
          <>
            <button style={{ marginRight: '5px' }} onClick={handleSaveDescription}>Enregistrer</button>
            <button onClick={handleCancelEdit}>Annuler</button>
          </>
        )}
        <h2>Liste des offres</h2>
        <div className="offers">
          {/* Affichez ici les offres de l'entreprise */}
          <table className="table">
        <thead>
          <tr>
            <th>ID Offre</th>
            <th>Durée</th>
            <th>Date de début</th>
            <th>Niveau de diplôme requis</th>
            <th>Titre</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {offers
            .map((offer) => (
              <tr key={offer.id_company_offer}>
                <td>{offer.id_company_offer}</td>
                <td>{offer.duration}</td>
                <td>{offer.start_date}</td>
                <td>{offer.required_degree_level}</td>
                <td>{offer.title}</td>
                <td>{offer.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
        </div>
      </div>

      <div className="column">
        {/* Affichez ici les informations complémentaires */}
        <div className="partners">
          <h3>Partenaires de l'entreprise :</h3>
          {partners.map((partner, index) => (
            <div key={index} className="partner">
              <img src={partner.imageSrc} alt={`Logo ${partner.name}`} />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
