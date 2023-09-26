import React from 'react';

const UserProfile = ({ user, onBackClick }) => {
  return (
    <div>
      <h2>Profil de l'Utilisateur</h2>
      {user && (
        <div>
          <p>Nom : {user.name}</p>
          <p>Email : {user.email}</p>
          {/* Affichez d'autres détails du profil ici */}
        </div>
      )}
      <button onClick={onBackClick}>Retour à la Liste</button>
    </div>
  );
};

export default UserProfile;
