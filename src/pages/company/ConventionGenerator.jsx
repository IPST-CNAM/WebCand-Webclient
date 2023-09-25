import React, { useState } from 'react';
import "./ConventionGenerator.css";

const { PDFDocument } = window.PDFLib;

const saveFile = (data) => {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
  
    window.open(url, '_blank');
  
    window.URL.revokeObjectURL(url);
  };

const PDFGenerator = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        siretNumber: '',
        numero: '',
        voie: '',
        complement: '',
        commune: '',
        telephone: '',
        courriel1: '',
        courriel2: '',
        effectif: '',
        idccCode: ''
      });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePDF = async () => {

    const existingPdfBytes = await fetch('http://localhost:9000/getLink').then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
    const form = pdfDoc.getForm();
  
   // Remplissage des champs avec les données du formulaire
  form.getTextField('Nom et prénom ou dénomination :').setText(formData.companyName);
  form.getTextField('N°SIRET de l’établissement d’exécution du contrat :').setText(formData.siretNumber);
  form.getTextField('N°').setText(formData.numero);
  form.getTextField('Voie').setText(formData.voie);
  form.getTextField('Complément').setText(formData.complement);
  form.getTextField('Commune').setText(formData.commune);
  form.getTextField('Téléphone').setText(formData.telephone);
  form.getTextField('Courriel 1').setText(formData.courriel1);
  form.getTextField('Courriel 2').setText(formData.courriel2);
  form.getTextField('Effectif total salariés de l’entreprise :').setText(formData.effectif);
  form.getTextField('Code IDCC de la convention collective applicable :').setText(formData.idccCode);
  
    // ... Remplissez d'autres champs selon votre formulaire
  
    // Serializez le PDF modifié en bytes
    const pdfBytes = await pdfDoc.save();
  
    // Ouvrir le PDF dans une nouvelle fenêtre
    saveFile(pdfBytes);
  };

  return (
    <div className="container">
      <div className="input-container">
        <label>Nom de l'entreprise</label>
        <input
          type="text"
          name="companyName"
          placeholder="Nom de l'entreprise"
          value={formData.companyName}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>N°SIRET</label>
        <input
          type="text"
          name="siretNumber"
          placeholder="N°SIRET"
          className="custom-input"
          value={formData.siretNumber}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>N°</label>
        <input
          type="text"
          name="numero"
          placeholder="N°"
          className="custom-input"
          value={formData.numero}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Voie</label>
        <input
          type="text"
          name="voie"
          placeholder="Voie"
          className="custom-input"
          value={formData.voie}
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
        <label>Courriel 1</label>
        <input
          type="text"
          name="courriel1"
          placeholder="Courriel 1"
          className="custom-input"
          value={formData.courriel1}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Courriel 2</label>
        <input
          type="text"
          name="courriel2"
          placeholder="Courriel 2"
          className="custom-input"
          value={formData.courriel2}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Effectif</label>
        <input
          type="text"
          name="effectif"
          placeholder="Effectif"
          className="custom-input"
          value={formData.effectif}
          onChange={handleInputChange}
        />
      </div>
  
      <div className="input-container">
        <label>Code IDCC</label>
        <input
          type="text"
          name="idccCode"
          placeholder="Code IDCC"
          className="custom-input"
          value={formData.idccCode}
          onChange={handleInputChange}
        />
      </div>
  
      {/* ... Ajoutez d'autres champs selon votre formulaire */}
      <button className="custom-button" onClick={generatePDF}>Générer PDF</button>
    </div>
  );
};

export default PDFGenerator;
