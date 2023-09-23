import React from "react";
import IconTitle from "../../components/icontitle/IconTitle";
import Navbreadcrum from "../../components/navbreadcrum/Navbreadcrum";
import CreateAccountForm from "../../components/createaccountform/CreateAccountForm";

const CreateAccount = () => {
  return (
    <div>
      <Navbreadcrum text="Créer un compte à l'Espace Numérique de Formation" />
      <IconTitle
        iconpath="./power.png"
        alt="Power Icon"
        title="CRÉATION D'UN COMPTE"
      />
      <CreateAccountForm />
    </div>
  );
};

export default CreateAccount;
