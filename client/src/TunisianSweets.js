import React, { useState } from 'react';
import './TunisianSweets.css';
import BG from './backgroudHeader.webp';
import LOGO from '../src/Componenets/Navbar/logo.png';
import Makroudh from './Products Pictures/MAKROUDH.webp';
import Baklawa from './Products Pictures/BAKLAWA.jpg';
import KAAKWARKA from './Products Pictures/KAAKWARKA.jpg';
import YOYO from './Products Pictures/YOYO.jpg';
import G1 from './Products Pictures/Gateaux/G1.jpeg';
import G2 from './Products Pictures/Gateaux/G2.jpg';
import G3 from './Products Pictures/Gateaux/G3.jpg';
import G5 from './Products Pictures/Gateaux/G4.jpg';
import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import Category from './Componenets/Category/Category';
import About from './Componenets/About/About';
import Container from 'react-bootstrap/Container';
import { FaShippingFast } from 'react-icons/fa';
import { MdAddIcCall } from 'react-icons/md';
import { PiGlobeStandFill } from 'react-icons/pi';
import Sc from '../src/Componenets/Panier/Sc.png';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from './Redux/Cart/cartSlice'
const TunisianSweets = () => {

  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector(
    (state) => state.cart
  );
  const handleAcheterClick = (item) => {
    console.log("Item to add to cart:", item);
    dispatch(addToCart(item));
    setShowCartMessage(true); // Show the message next to the cart
    setTimeout(() => setShowCartMessage(false), 2000); // Hide the message after 2 seconds
  };
  const [cartCount, setCartCount] = useState(0); // State to keep track of the cart count
  const [showCartMessage, setShowCartMessage] = useState(false); // State to control the message visibility
  const navigate = useNavigate(); // Define the navigate function

  const sweets = [
    { name: 'Baklawa', description: ' Baklawa tunisienne.', price: '15 DT', image: Baklawa },
    { name: 'Makroud', description: 'Semolina pastry filled with dates.', price: '10 DT', image: Makroudh },
    { name: 'Kaak Warka', description: 'Almond-filled pastry flavored with rosewater.', price: '12 DT', image: KAAKWARKA },
    { name: 'Yoyo', description: 'Deep-fried pastry with honey.', price: '8 DT', image: YOYO },
  ];
  const Gateaux = [
    { name: 'Chocolat', description: 'Gâteaux ganach chocolat', price: '15 DT', image: G1 },
    { name: 'Russe', description: 'Gâteaux russe pistache', price: '10 DT', image: G2 },
    { name: 'G3', description: 'Almond-filled pastry flavored with rosewater.', price: '12 DT', image: G3 },
    { name: 'Anniversaire', description: 'Gâteaux anniversaire', price: '8 DT', image: G5 },
  ];

  const handleBuyNow = () => {
    setCartCount(cartCount + 1); // Increment cart count
    setShowCartMessage(true); // Show the message next to the cart
    setTimeout(() => setShowCartMessage(false), 2000); // Hide the message after 2 seconds
  };

  return (
    <div className="App">
      <div className="sweets-container">
        {/* Header Section */}
        <div className="header-image" style={{ backgroundImage: `url(${BG})` }}>
          <Navbar />
          <h1 className="header-titlee">Découvrez les meilleures douceurs tunisiennes</h1>
     

        </div>
        <br />
    
        <hr />
        <Category />
        <br />
        <div className="title">
          <h1 className="header-title">Découvrez les meilleures douceurs tunisiennes</h1>
          <div className="sweets-grid">
            {sweets.map((item, index) => (
              <div key={index} className="sweet-card">
                <img src={item.image} alt={item.name} className="sweet-image" />
                <h3 className="sweet-name">{item.name}</h3>
                <p className="sweet-description">{item.description}</p>
                <p className="sweet-name">{item.price}</p>
                <button
                  className="buy-now"
                  onClick={() => handleAcheterClick(item)}
                >
                  Acheter
                </button>
              </div>
            ))}
          </div>
          <br />

          <button 
      className="buy-now" 
      onClick={() => navigate('/Sweets')}
    >
      Voir Plus ...
    </button>
          <br />
          <div className="title">
            <h1 className="header-title">Nos Gateaux</h1>
            <div className="sweets-grid">
              {Gateaux.map((item, index) => (
                <div key={index} className="sweet-card">
                  <img src={item.image} alt={item.name} className="sweet-image" />
                  <h3 className="sweet-name">{item.name}</h3>
                  <p className="sweet-description">{item.description}</p>
                  <p className="sweet-name">{item.price}</p>
                  <button
                    className="buy-now"
                    onClick={() => handleAcheterClick(item)}
                    >
                    Acheter
                  </button>
                </div>
              ))}
            </div>
            <br />
            <button 
      className="buy-now" 
      onClick={() => navigate('/Gateaux')}
    >
      Voir Plus ...
    </button>
          </div>
          <hr />
          <Container>
            <About />
          </Container>
          <hr />
        </div>
        {/* Footer Section */}
        <footer className="footer">
          <p>&copy; 2025 Jury. @Med Firas Bechedli.</p>
        
        </footer>
      </div>
      {/* Sticky Cart Icon */}
      <div className="cart-container"  onClick={() => navigate('/Panier')}>
        
        <img src={Sc} alt="Shopping Cart" />
        <span className="cart-count">{cartTotalQuantity}</span>
        {showCartMessage && (
          <div className="cart-message">Voir Panier !</div>
        )}
      </div>
    </div>
  );
};

export default TunisianSweets;
