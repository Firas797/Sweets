import React, { useState } from 'react';
import './Sweets.css';
import Navbar from '../Navbar/Navbar';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../Redux/Cart/cartSlice';
import SweetsJson from './SweetsJson'; // JSON file containing the list of sweets
import Sc from '../Panier/Sc.png';
import { useNavigate } from "react-router-dom";
import BG1 from '../Sweets/SweetsImages/ca.PNG';

function Sweets() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State to control modal image

  const handleAcheterClick = (item) => {
    setShowCartMessage(true);
    setTimeout(() => setShowCartMessage(false), 2000);
    dispatch(addToCart(item));
  };

  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div>
      {/* Intro Section */}
      <div id="intro" className="" data-parallax="scroll">
        <Navbar />
        <div className="container mx-auto px-2">
          <div className="sm:pt-88 py-20">
            <div
              className="bg-black bg-opacity-70 p-12 mb-5 text-center"
              style={{ backgroundImage: `url(${BG1})`, backgroundSize: 'cover', backgroundPosition: 'Bottom' }}
            >
              <div className="p-6 inline-block rounded-md">
                <h1 className="tm-text-gold bg-opacity-70 bg-black text-5xl tm-logo-font mb-5">Sucré</h1>
                <p className="tm-text-gold bg-opacity-70 bg-black tm-text-2xl">Meilleur Sucré tunisiennes</p>
              </div>
            </div>
            <div className="text-center">
              <a href="#menu" className="btn">Nos Menu...</a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div id="menu" className="parallax-window">
        <div className="container mx-auto tm-container">
          <div className="sweets-grid">
            {SweetsJson.map((item, index) => (
              <div key={index} className="sweet-card">
                <img
                  src={item.image || 'img/antique-cafe-bg-02.jpg'}
                  alt={item.name}
                  className="sweet-image"
                  onClick={() => setSelectedImage(item.image)} // Open modal
                />
                <h3 className="sweet-name">{item.name2}</h3>
                <p className="sweet-name">{item.name}</p>
                <p className="sweet-name">{item.price}dt</p>
                <button className="buy-now" onClick={() => handleAcheterClick(item)}>Acheter</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close-btn" onClick={() => setSelectedImage(null)}>×</span>
            <img src={selectedImage} alt="Sweet Preview" className="modal-image" />
          </div>
        </div>
      )}

      {/* Cart Section */}
      <div className="cart-container" onClick={() => navigate('/Panier')}>
        <img src={Sc} alt="Shopping Cart" />
        <span className="cart-count">{cartTotalQuantity}</span>
        {showCartMessage && <div className="cart-message">Voir Panier !</div>}
      </div>
    </div>
  );
}

export default Sweets;