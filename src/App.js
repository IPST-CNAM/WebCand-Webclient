import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Connection from "./pages/connection/Connection";
import Layout from './pages/layout/Layout';
import Educator from './pages/educator/Educator';
import FillEvaluationGrid from './pages/educator/fillEvaluationGrid/FillEvaluationGrid';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="connection" element={<Connection />} />
          <Route path="educator" element={<Educator />} />
          <Route path="fillEvaluationGrid" element={<FillEvaluationGrid />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);