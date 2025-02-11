import './App.css';
import About from './Componenets/About/About';
import Admin from './Componenets/Admin/Admin';
import GateauxOrders from './Componenets/Admin/GateauxOrders';
import Category from './Componenets/Category/Category';
import Gateaux from './Componenets/Gateaux/Gateaux';
import Loading from './Componenets/Gateaux/Loading';
import Panier from './Componenets/Panier/Panier';
import Salé from './Componenets/Salé/Salé';
import ScrollToTop from './Componenets/ScrollToTop/ScrollToTop';
import Sweets from './Componenets/Sweets/Sweets';
import TunisianSweets from './TunisianSweets';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   
    <Router >
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
          <Route path="/SC" element={<Loading />} />


        </Routes>
      </Router>
  
  );
}

export default App;
