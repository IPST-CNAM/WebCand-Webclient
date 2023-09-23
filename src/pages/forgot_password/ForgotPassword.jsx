import React from "react";
import IconTitle from "../../components/icontitle/IconTitle";
import Navbreadcrum from "../../components/navbreadcrum/Navbreadcrum";
import ForgotPswdForm from "../../components/forgotpswdform/ForgotPswdForm";

const ForgotPassword = () => {
  return (
    <div>
      <Navbreadcrum text="Mot de passe oublié" />
      <IconTitle
        iconpath="./power.png"
        alt="Power Icon"
        title="RÉCUPÉRATION D'UN MOT DE PASSE"
      />
      <ForgotPswdForm />
    </div>
  );
};

export default ForgotPassword;
