import './App.css';
import About from './Componenets/About/About';
import Admin from './Componenets/Admin/Admin';
import GateauxOrders from './Componenets/Admin/GateauxOrders';
import Category from './Componenets/Category/Category';
import Gateaux from './Componenets/Gateaux/Gateaux';
import Panier from './Componenets/Panier/Panier';
import Salé from './Componenets/Salé/Salé';
import ScrollToTop from './Componenets/ScrollToTop/ScrollToTop';
import Sweets from './Componenets/Sweets/Sweets';
import TunisianSweets from './TunisianSweets';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    function isMessengerApp() {
      let ua = navigator.userAgent || navigator.vendor || window.opera;
      return ua.includes("FBAN") || ua.includes("FBAV");
    }

    if (isMessengerApp()) {
      setShowPopup(true);
      setTimeout(() => {
        window.location.href = "googlechrome://" + window.location.href.replace("https://", "");
      }, 1000);
    }
  }, []);

  return (
    <Router>
      {showPopup && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%",
          background: "#ff0000", color: "white", padding: "10px",
          textAlign: "center", zIndex: 1000
        }}>
          ⚠️ **Please open this link in Chrome for full functionality!**
        </div>
      )}
      
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<TunisianSweets />} />
        <Route path="/Gateaux" element={<Gateaux />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/About" element={<About />} />
        <Route path="/Salé" element={<Salé />} />
        <Route path="/Sweets" element={<Sweets />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/GtxOrder" element={<GateauxOrders />} />
      </Routes>
    </Router>
  );
}

export default App;
