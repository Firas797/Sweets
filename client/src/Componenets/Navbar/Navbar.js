import React, { useState } from 'react';
import LOGO from '../Navbar/logo.png';
import BG from '../../backgroudHeader.webp';
import './Nav.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Sc2 from './sc2.png';

function Navbar() {
  const navigate = useNavigate();
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="Nav">
      <br />
      <nav className="nav">
        <div className="logo">
          {/* Logo Image */}
          <img src={LOGO} alt="Tunisian Sweets Logo" className="logo-image" />
          JURY
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/Sweets">Sucré</a></li>
          <li><a href="/Gateaux">Gateaux</a></li>
          <li><a href="/Salé">Salé</a></li>
          <li><a href="/Panier">Panier</a></li>

        
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
