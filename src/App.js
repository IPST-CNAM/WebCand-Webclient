import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Connection from './pages/connection/Connection';
import Layout from './pages/layout/Layout';
import AdminPage from './pages/Administrateur/AdminPage'; // Importez AdminPage
import CandidatGenerator from './pages/Candidat/CandidatGenerator';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="connection" element={<Connection />} />
          <Route path="admin" element={<AdminPage />} /> {/* Ajoutez cette route pour la page d'administration */}
          <Route path="CandidatGenerator" element={<CandidatGenerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
