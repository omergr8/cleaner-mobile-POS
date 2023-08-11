import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Registration from "../pages/Registration";
import QRPage from "../pages/QRPage";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/scan-qr" element={<QRPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
