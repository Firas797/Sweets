import React, { useState } from 'react';
import './TunisianSweets.css';
import BG from './backgroudHeader.webp';
import LOGO from '../src/Componenets/Navbar/logo.png';
import Makroudh from './Products Pictures/MAKROUDH.webp';
import b2 from './Products Pictures/b2.jpg';
import Sm from './Products Pictures/16.jpg';
import YOYO from './Products Pictures/YOYO.jpg';
import G1 from './Products Pictures/Gateaux/G1.jpg';
import G22 from './Products Pictures/Gateaux/G22.jpg';
import G3 from './Products Pictures/Gateaux/G3.jpg';
import G16 from './Products Pictures/Gateaux/G16.jpg';
import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import Category from './Componenets/Category/Category';
import About from './Componenets/About/About';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from './Redux/Cart/cartSlice';
import TendensGtx from './Componenets/Category/TendensGtx';
import Sc from '../src/Componenets/Panier/Sc.png';

const TunisianSweets = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // State for modal image preview
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCartMessage, setShowCartMessage] = useState(false);

  const handleAcheterClick = (item) => {
    dispatch(addToCart(item));
    setShowCartMessage(true);
    setTimeout(() => setShowCartMessage(false), 2000);
  };

  // Function to open modal with selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  const sweets = [
    { name: 'Brownies 60+ pieces', description: 'برونيس 60+ قطعة', price: '35 DT', image: b2 },
    { name: 'Makroud', description: 'مقروض', price: '14 DT', image: Makroudh },
    { name: 'Samesa Jiljlan', description: 'صمصمة جلجلان', price: '35 DT', image: Sm },
    { name: 'Yoyo', description: 'يويو', price: '14 DT', image: YOYO },
  ];

  const Salé = [
    { name: 'Zouza Salé', description: 'زوزا مالحة', price: '50 DT', image: G1 },
    { name: 'Baklewa salé poulet', description: 'بقلاوة مالحة دجاج', price: '50 DT', image: G22 },
    { name: 'Mini hamburger poulet', description: 'ميني هامبرغر دجاج', price: '50 DT', image: G3 },
    { name: 'Tartelette Salé', description: 'تارتلات مالحة', price: '50 DT', image: G16 },
  ];

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
                <img
                  src={item.image}
                  alt={item.name}
                  className="sweet-image"
                  onClick={() => handleImageClick(item.image)}
                />
                <h3 className="sweet-name">{item.name}</h3>
                <p className="sweet-description">{item.description}</p>
                <p className="sweet-name">{item.price}</p>
                <button className="buy-now" onClick={() => handleAcheterClick(item)}>
                  Acheter
                </button>
              </div>
            ))}
          </div>
          <button className="buy-now" onClick={() => navigate('/Sweets')}>
            Voir Plus Sucré ...
          </button>
          <br />
          <h1 className="header-title">Nos Salé</h1>

          <div className="sweets-grid">
            {Salé.map((item, index) => (
              <div key={index} className="sweet-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="sweet-image"
                  onClick={() => handleImageClick(item.image)}
                />
                <h3 className="sweet-name">{item.name}</h3>
                <p className="sweet-description">{item.description}</p>
                <p className="sweet-name">{item.price}</p>
                <button className="buy-now" onClick={() => handleAcheterClick(item)}>
                  Acheter
                </button>
              </div>
            ))}
          </div>

          <br />
          <button className="buy-now" onClick={() => navigate('/Salé')}>
            Voir Plus Salé ...
          </button>
          <br />

          <div className="title">
            <h1 className="header-title">Nos Gateaux</h1>
            <TendensGtx />
            <br />
            <button className="buy-now" onClick={() => navigate('/Gateaux')}>
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
      <div className="cart-container" onClick={() => navigate('/Panier')}>
        <img src={Sc} alt="Shopping Cart" />
        <span className="cart-count">{cartTotalQuantity}</span>
        {showCartMessage && (
          <div className="cart-message">Voir Panier !</div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Enlarged Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TunisianSweets;
