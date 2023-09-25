import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Connection from "./pages/connection/Connection";
import CompanyListCandidate from "./pages/company/companyListCandidate";
import CompanyOffers from "./pages/company/CompanyOffers";
import ManageOffers from "./pages/company/ManageOffers";
import EditOffers from "./pages/company/EditOffers";
import ConventionGenerator from "./pages/company/ConventionGenerator";
import CompanyProfile from "./pages/company/CompanyProfile";
import Layout from './pages/layout/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="connection" element={<Connection />} />
          <Route path="companyListCandidate" element={<CompanyListCandidate />} />
          <Route path="CompanyOffers" element={<CompanyOffers />} />
          <Route path="ManageOffers" element={<ManageOffers />} />
          <Route path="EditOffers/:id" element={<EditOffers />} />
          <Route path="ConventionCompany" element={<ConventionGenerator />} />
          <Route path="CompanyProfile" element={<CompanyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);