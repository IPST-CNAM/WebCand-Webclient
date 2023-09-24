import React from "react";
import { Link } from "react-router-dom";
const candidateId = 1;
const Educator = () => {

    return (
        <div>
            {/* START acces for feature test */}
            <h1>page enseignant</h1>
            {/* <Link to="/faturePage">lien vers la page</Link> */}
            <Link to={`/viewcvcandidate?id=${candidateId}`}>Vue CV</Link>
            {/* END acces for feature test */}
        </div>    
    );
};

export default Educator