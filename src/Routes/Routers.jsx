import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Registration from "../pages/Registration";
import QRPage from "../pages/QRPage";
import EnterNumber from "../pages/EnterNumber";
import LoadBin from "../pages/LoadBin";
import GreatJob from "../pages/GreatJob";
import UltimateClean from "../pages/UltimateClean";
import UltimateCleanSelect from "../pages/ultimateCleanSelect/UltimateCleanSelect";
import UltimateCleanDetergent from "../pages/ultimateCleanDetergent/UltimateCleanDetergent";
import PaymentFail from "../pages/paymentFail/PaymentFail";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/great-job" element={<GreatJob />} />
          <Route path="/load-bin" element={<LoadBin />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/enter-number" element={<EnterNumber />} />
          <Route path="/scan-qr" element={<QRPage />} />
          <Route path="/ultimate-clean" element={<UltimateClean />} />
          <Route path="/ultimate-clean-select" element={<UltimateCleanSelect />} />
          <Route path="/ultimate-clean-detergent" element={<UltimateCleanDetergent />} />
          <Route path="/payment-fail" element={<PaymentFail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
