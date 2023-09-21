import React from "react";
import './CvViewer.css';
let url = process.env.PUBLIC_URL + 'cv_viewer.pdf'
let name = "Cellier Hadrien";
let email = 'hadrien.cellier.auditeur@lecnam.net'

const CvViewer = () => {

    return (
        <div>
            <h1>Visualisation CV</h1>
            <div className="block-info">
                <p><b>{name}</b></p>
                <p><b>Email :</b> {email}</p>
            </div>
            <a href={url} download={url}>
                <button>Télécharger PDF</button>
            </a>
            <div className="cv-container">
                <embed src={url} type="application/pdf"></embed>
            </div>
        </div>    
    );
};

export default CvViewer