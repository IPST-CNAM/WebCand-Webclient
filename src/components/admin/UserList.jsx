import React, { useState, useEffect } from 'react';
import './UserList.css'; // Importez le fichier CSS

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Effectuez une requête GET vers votre API back-end pour récupérer les utilisateurs enregistrés
    fetch('http://localhost:9000/registeredUsers')
      .then(response => response.json())
      .then(data => {
        setUsers(data); // Mettez à jour l'état avec les données des utilisateurs
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
  }, []); // Le tableau vide [] signifie que cet effet ne se déclenchera qu'une fois, équivalent à componentDidMount

  return (
    <div>
      <h2>Liste des utilisateurs enregistrés</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Date de naissance</th>
            <th>Numéro de téléphone</th>
            {/* Ajoutez d'autres en-têtes de colonnes au besoin */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id_registered_user}>
              <td>{user.id_registered_user}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.birth_date}</td>
              <td>{user.phone_number}</td>
              {/* Affichez d'autres données de l'utilisateur au besoin */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
