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
import { useEffect } from 'react';

function App() {
  
  // ✅ Detect Messenger & Force Open in Browser
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    if (ua.includes("FBAN") || ua.includes("FBAV")) {
      window.location.href = "https://juryapp-frondend.enalle.easypanel.host/";
    }
  }, []);

  // ✅ Function to Open in Chrome/Safari Manually
  const openInBrowser = () => {
    const url = "https://juryapp-frondend.enalle.easypanel.host/";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Router>
      <ScrollToTop />
      <div style={{ textAlign: "center", padding: "20px" }}>
        {/* Button to Force Open in Browser */}
        <button 
          onClick={openInBrowser} 
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Open in Browser
        </button>
      </div>
      
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
