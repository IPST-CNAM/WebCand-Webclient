import React, { useState } from 'react';
import './ConventionGenerator.css'

const { PDFDocument } = window.PDFLib;

const saveFile = (data) => {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
  
    window.open(url, '_blank');
  
    window.URL.revokeObjectURL(url);
  };

const PDFGenerator = () => {
    const [formData, setFormData] = useState({
        nomNaissance: '',
        nomUsage: '',
        premierPrenom: '',
        nir: '',
        adresse: '',
        numeroVoie: '',
        complement: '',
        codePostal: '',
        commune: '',
        telephone: '',
        courriel: '',
        courriel2: '',
        dateNaissance: '',
        sexe: '',
        departementNaissance: '',
        communeNaissance: '',
        nationalite: '',
        regimeSocial: '',
        sportifHautNiveau: '',
        travailleurHandicape: '',
        situationAvantContrat: '',
        dernierDiplome: '',
        derniereClasseAnnee: '',
        intituleDernierDiplome: '',
        diplomePlusEleve: '',
        projetCreationEntreprise: '',
        nomRepresentantLegal: '',
        adresseRepresentantLegal: '',
        numeroVoieRepresentantLegal: '',
        complementRepresentantLegal: '',
        codePostalRepresentantLegal: '',
        communeRepresentantLegal: '',
        courrielRepresentantLegal: '',
      });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePDF = async () => {

    const existingPdfBytes = await fetch('http://localhost:9000/getGetLinksCerfaCandidat').then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
    const form = pdfDoc.getForm();
  
    // Remplissage des champs avec les données du formulaire
    form.getTextField('Nom de naissance de l’apprenti(e) :').setText(formData.nomNaissance);
    form.getTextField('Nom d’usage').setText(formData.nomUsage);
    form.getTextField('Le premier prénom de l’apprenti(e) selon l’état civil :').setText(formData.premierPrenom);
    form.getTextField('NIR de l’apprenti(e)').setText(formData.nir);
    form.getTextField('Adresse de l’apprenti(e) N°').setText(formData.adresse);
    form.getTextField('Adresse de l’apprenti(e) Voie').setText(formData.numeroVoie);
    form.getTextField('Adresse de l’apprenti(e) Complément').setText(formData.complement);
    form.getTextField('Adresse de l’apprenti(e) CP').setText(formData.codePostal);
    form.getTextField('Adresse de l’apprenti(e) Commune').setText(formData.commune);
    form.getTextField('Adresse de l’apprenti(e) Téléphone').setText(formData.telephone);
    form.getTextField('Adresse de l’apprenti(e) Courriel1').setText(formData.courriel);
    form.getTextField('Adresse de l’apprenti(e) Courriel2').setText(formData.courriel2);
    form.getTextField('Apprenti Date naissance_af_date').setText(formData.dateNaissance);
    form.getTextField('Département naissance apprenti').setText(formData.departementNaissance);
    form.getTextField('Commune naissance apprenti').setText(formData.communeNaissance);
    form.getTextField('Nationalité apprenti').setText(formData.nationalite);
    form.getTextField('Régime social apprenti').setText(formData.regimeSocial);
    form.getTextField('Situation avant ce contrat').setText(formData.situationAvantContrat);
    form.getTextField('Dernier diplôme ou titre préparé').setText(formData.dernierDiplome);
    form.getTextField('Dernière classe / année suivie').setText(formData.derniereClasseAnnee);
    form.getTextField('Intitulé précis du dernier diplôme ou titre préparé :').setText(formData.intituleDernierDiplome);
    form.getTextField('Diplôme ou titre le plus élevé obtenu').setText(formData.diplomePlusEleve);
   
  
    // ... Remplissez d'autres champs selon votre formulaire
  
    // Serializez le PDF modifié en bytes
    const pdfBytes = await pdfDoc.save();
  
    // Ouvrir le PDF dans une nouvelle fenêtre
    saveFile(pdfBytes);
  };

  return (
    <div className="container">
      <div className="input-container">
        <label>Nom de naissance</label>
        <input
          type="text"
          name="nomNaissance"
          placeholder="Nom de naissance de l’apprenti(e)"
          value={formData.nomNaissance}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Nom d'usage</label>
        <input
          type="text"
          name="nomUsage"
          placeholder="Nom d’usage"
          className="custom-input"
          value={formData.nomUsage}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>prénom</label>
        <input
          type="text"
          name="premierPrenom"
          placeholder="Le premier prénom de l’apprenti(e) selon l’état civil"
          className="custom-input"
          value={formData.premierPrenom}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>NIR</label>
        <input
          type="text"
          name="nir"
          placeholder="NIR de l’apprenti(e)"
          className="custom-input"
          value={formData.nir}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Adresse</label>
        <input
          type="text"
          name="adresse"
          placeholder="Adresse de l’apprenti(e)"
          className="custom-input"
          value={formData.adresse}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>N°</label>
        <input
          type="text"
          name="numeroVoie"
          placeholder="N° Voie"
          className="custom-input"
          value={formData.numeroVoie}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Complément</label>
        <input
          type="text"
          name="complement"
          className="custom-input"
          placeholder="Complément"
          value={formData.complement}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Code postal</label>
        <input
          type="text"
          name="codePostal"
          placeholder="Code postal"
          className="custom-input"
          value={formData.codePostal}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Commune</label>
        <input
          type="text"
          name="commune"
          placeholder="Commune"
          className="custom-input"
          value={formData.commune}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Téléphone</label>
        <input
          type="text"
          name="telephone"
          placeholder="Téléphone"
          className="custom-input"
          value={formData.telephone}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Courriel</label>
        <input
          type="text"
          name="courriel"
          placeholder="Courriel"
          className="custom-input"
          value={formData.courriel}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-container">
        <label>Courriel 2</label>
        <input
          type="text"
          name="courriel2"
          placeholder="Courriel2"
          className="custom-input"
          value={formData.courriel2}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Date de naissance</label>
        <input
          type="text"
          name="dateNaissance"
          placeholder="Date de naissance"
          className="custom-input"
          value={formData.dateNaissance}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Sexe</label>
        <input
          type="text"
          name="sexe"
          placeholder="Sexe"
          className="custom-input"
          value={formData.sexe}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Département de naissance</label>
        <input
          type="text"
          name="departementNaissance"
          placeholder="Département de naissance"
          className="custom-input"
          value={formData.departementNaissance}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Commune de naissance</label>
        <input
          type="text"
          name="communeNaissance"
          placeholder="Commune de naissance"
          className="custom-input"
          value={formData.communeNaissance}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Nationalité</label>
        <input
          type="text"
          name="nationalite"
          placeholder="Nationalité"
          className="custom-input"
          value={formData.nationalite}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Régime social</label>
        <input
          type="text"
          name="regimeSocial"
          placeholder="Régime social"
          className="custom-input"
          value={formData.regimeSocial}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Situation avant ce contrat</label>
        <input
          type="text"
          name="situationAvantContrat"
          placeholder="Situation avant ce contrat"
          className="custom-input"
          value={formData.situationAvantContrat}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Dernier diplôme ou titre préparé</label>
        <input
          type="text"
          name="dernierDiplome"
          placeholder="Dernier diplôme ou titre préparé"
          className="custom-input"
          value={formData.dernierDiplome}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Dernière classe / année suivie</label>
        <input
          type="text"
          name="derniereClasseAnnee"
          placeholder="Dernière classe / année suivie"
          className="custom-input"
          value={formData.derniereClasseAnnee}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Intitulé dernier diplôme</label>
        <input
          type="text"
          name="intituleDernierDiplome"
          placeholder="Intitulé précis du dernier diplôme ou titre préparé"
          className="custom-input"
          value={formData.intituleDernierDiplome}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Dernier diplôme obtenu</label>
        <input
          type="text"
          name="diplomePlusEleve"
          placeholder="Diplôme ou titre le plus élevé obtenu"
          className="custom-input"
          value={formData.diplomePlusEleve}
          onChange={handleInputChange}
        />
      </div>
  
  
      {/* ... Ajoutez d'autres champs selon votre formulaire */}
      <button className="custom-button" onClick={generatePDF}>Générer PDF</button>
    </div>
  );
};

export default PDFGenerator;
