// Importez les bibliothèques nécessaires
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assurez-vous d'avoir installé axios
import { useHistory } from 'react-router-dom'; // Pour la navigation

// Importez les en-têtes des composants
import Header from '../../components/Header';
import UserList from '../../components/admin/UserList';
import UserProfile from '../../components/admin/UserProfile';
import RoleAssignment from '../../components/admin/RoleAssignment';

// Composant AdminPage
const AdminPage = () => {
  // État pour stocker la liste des profils d'utilisateurs
  const [userList, setUserList] = useState([]);
  // État pour stocker les données du profil sélectionné
  const [selectedUserProfile, setSelectedUserProfile] = useState(null);
  // État pour gérer l'affichage des composants
  const [activeComponent, setActiveComponent] = useState('userList');
  // Historique pour la navigation
  const history = useHistory();

  // Effectuez une vérification d'authentification ici
  useEffect(() => {
    // Vérifiez si l'utilisateur est authentifié en utilisant votre mécanisme d'authentification (par exemple, JWT)
    // Redirigez-le vers la page de connexion s'il n'est pas authentifié
    const isAuthenticated = true; // Remplacez par votre logique d'authentification
    if (!isAuthenticated) {
      history.push('/login'); // Redirigez vers la page de connexion
    }
  }, [history]);

  // Effet pour charger la liste des utilisateurs depuis l'API
  useEffect(() => {
    // Fonction pour charger la liste des utilisateurs depuis l'API
    const fetchUserList = async () => {
      try {
        const response = await axios.get('/api/user-list'); // Remplacez par votre endpoint API
        setUserList(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de la liste des utilisateurs :', error);
      }
    };

    // Appelez la fonction pour charger la liste des utilisateurs
    fetchUserList();
  }, []);

  // Fonction pour afficher le profil sélectionné
  const handleUserProfileClick = (user) => {
    setSelectedUserProfile(user);
    setActiveComponent('userProfile');
  };

  // Fonction pour afficher la page de liste des utilisateurs
  const handleBackToUserList = () => {
    setSelectedUserProfile(null);
    setActiveComponent('userList');
  };

  // Fonction pour afficher la page d'attribution de rôles
  const handleRoleAssignmentClick = () => {
    setActiveComponent('roleAssignment');
  };

  return (
    <div>
      {/* En-tête de la page d'administration */}
      <Header title="Page d'Administration" />

      {/* Affichez les composants en fonction de l'état actif */}
      {activeComponent === 'userList' && (
        <UserList
          userList={userList}
          onUserProfileClick={handleUserProfileClick}
          onRoleAssignmentClick={handleRoleAssignmentClick}
        />
      )}

      {activeComponent === 'userProfile' && (
        <UserProfile user={selectedUserProfile} onBackClick={handleBackToUserList} />
      )}

      {activeComponent === 'roleAssignment' && (
        <RoleAssignment onBackClick={handleBackToUserList} />
      )}
    </div>
  );
};

export default AdminPage;
