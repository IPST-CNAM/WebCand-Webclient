import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Connection from "./pages/connection/Connection";
import ForgotPassword from "./pages/forgot_password/ForgotPassword";
import CreateAccount from "./pages/create_account/CreateAccount";
import News from "./pages/news/News";
import Layout from "./pages/layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="connection" element={<Connection />} />
          <Route path="forgot_password" element={<ForgotPassword />} />
          <Route path="create_account" element={<CreateAccount />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
