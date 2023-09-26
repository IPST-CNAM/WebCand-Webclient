import React from 'react';

const RoleAssignment = ({ onBackClick }) => {
  return (
    <div>
      <h2>Attribution de Rôles</h2>
      {/* Ajoutez ici la logique pour attribuer des rôles aux utilisateurs */}
      <button onClick={onBackClick}>Retour à la Liste</button>
    </div>
  );
};

export default RoleAssignment;
