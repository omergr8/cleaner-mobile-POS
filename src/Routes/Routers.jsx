import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Registration from "../pages/Registration";
import QRPage from "../pages/QRPage";
import EnterNumber from "../pages/EnterNumber";
import LoadBin from "../pages/loadBin/LoadBin";
import GreatJob from "../pages/greatJob/GreatJob";
import UltimateClean from "../pages/UltimateClean";
import UltimateCleanSelect from "../pages/ultimateCleanSelect/UltimateCleanSelect";
import UltimateCleanDetergent from "../pages/ultimateCleanDetergent/UltimateCleanDetergent";
import PaymentFail from "../pages/paymentFail/PaymentFail";
import FinishPay from "../pages/finishPay/FinishPay";
import ConfirmSelection from "../pages/confirmSelection/ConfirmSelection";
import HowToPay from "../pages/howToPay/HowToPay";
import CancelPopup from "../pages/cancelPopup/CancelPopup";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/scan-qr" element={<QRPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/enter-number" element={<EnterNumber />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/load-bin" element={<LoadBin />} />
          <Route path="/cancel-popup" element={<CancelPopup />} />
          <Route path="/great-job" element={<GreatJob />} />
          <Route path="/ultimate-clean" element={<UltimateClean />} />
          <Route path="/ultimate-clean-select" element={<UltimateCleanSelect />} />
          <Route path="/ultimate-clean-detergent" element={<UltimateCleanDetergent />} />
          <Route path="/confirm-selection" element={<ConfirmSelection />} />
          <Route path="/finish-pay" element={<FinishPay />} />
          <Route path="/how-to-pay" element={<HowToPay />} />
          <Route path="/payment-fail" element={<PaymentFail />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
