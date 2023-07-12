import React from "react";
import IconTitle from "../../components/icontitle/IconTitle";
import Navbreadcrum from "../../components/navbreadcrum/Navbreadcrum";
import LoginForm from "../../components/loginform/LoginForm";

const Connection = () => {

    return (
        <div>
            <Navbreadcrum text="Authentification à l'Espace Numérique de Formation" />
            <IconTitle iconpath="./power.png" alt="Power Icon" title="AUTHENTIFICATION" />
            <LoginForm />
        </div>    
    );
};

export default Connection
