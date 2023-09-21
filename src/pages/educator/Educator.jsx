import React from "react";
import { Link } from "react-router-dom";

const Educator = () => {

    return (
        <div>
            {/* START acces for feature test */}
            <h1>Page enseignant</h1>
            <Link to="/assignedStudents">Visualiser les élèves assignés</Link>
            {/* END acces for feature test */}
        </div>    
    );
};

export default Educator