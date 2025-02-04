import React, { useState } from 'react';
import '../Gateaux/Gateaux.css'
import Navbar from '../Navbar/Navbar'
import SaléJson from './SaléJson'
import BG1 from './SaléImages/BG1.jpg'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../Redux/Cart/cartSlice';
import Sc from '../Panier/Sc.png'
import { useNavigate } from "react-router-dom";
function Salé() {
    const dispatch = useDispatch();
      const navigate = useNavigate(); // Define the navigate function
    
    const [showCartMessage, setShowCartMessage] = useState(false); // State to control the message visibility
  
    const handleAcheterClick = (item) => {
      console.log("Item to add to cart:", item);
      setShowCartMessage(true); // Show the message next to the cart
      setTimeout(() => setShowCartMessage(false), 2000); // Hide the message after 2 seconds
      dispatch(addToCart(item));
    };
    const { cartTotalQuantity } = useSelector(
      (state) => state.cart
    );
  
  return (
<div>
  {/* Intro */}
  <div id="intro" className="" data-parallax="scroll" data-image-src="img/antique-cafe-bg-01.jpg">
 <Navbar/>
    <div className="container mx-auto px-2 ">
      <div className="sm: sm:pt-88 py-20">
        <div className="bg-black bg-opacity-70 p-12 mb-5 text-center"   style={{
          backgroundImage: `url(${BG1})`,
          backgroundPosition: 'center', // Centers the image
        }}>
                <div className="  p-6 inline-block rounded-md">
          <h1 className="tm-text-gold  bg-opacity-70 bg-black text-5xl tm-logo-font mb-5">Salé </h1>
          <p className="tm-text-gold bg-opacity-70 bg-black tm-text-2xl">Meilleur Salé tunisiennes</p>
        </div>
              </div>      
       
        <div className="text-center">
          <div className="inline-block">
            <a href="#menu" className="flex justify-center items-center bg-black bg-opacity-70 py-6 px-8 rounded-lg font-semibold tm-text-2xl tm-text-gold hover:text-gray-200 transition">
              <i className="fas fa-coffee mr-3" />
              <span>Nos Menu...</span>                        
            </a>
          </div>                    
        </div>                
      </div>
    </div>        
  </div>
  {/* Cafe Menu */}
  <div id="menu" className="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-02.jpg">
    <div className="container mx-auto tm-container ">
    <div className="sweets-grid">
        {SaléJson.map((item, index) => (
          <div key={index} className="sweet-card">
            <img src="img/antique-cafe-bg-02.jpg" alt={item.name} className="sweet-image" />
            <h3 className="sweet-name">{item.name}</h3>
            <p className="sweet-name">{item.name2}</p>
            <p className="sweet-name">{item.price} dt</p>
            <button
                  className="buy-now"
                  onClick={() => handleAcheterClick(item)}
                >
                  Acheter
                </button>
          </div>
        ))}
      </div>
    </div>        
  </div>
  <div id="about" className="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-03.jpg">
    <div className="container mx-auto tm-container py-24 sm:py-48">
      <div className="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4">
        <div className="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
          <h2 className="mb-6 tm-text-green text-4xl font-medium">About our cafe</h2>
          <p className="mb-6 text-base leading-8">
            Images are taken from Pexels, a great stock photo website. This template used Tailwind CSS. You may modify Antique Cafe template in any way you prefer and use it for your website.
          </p>
          <p className="text-base leading-8">
            If you wish to <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">support us</a>, please make a little donation via PayPal. That would be
            very helpful. Another way is to tell your friends about Tooplate website. Thank you. </p>
        </div>
        <a href="#contact" className="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md">
          <i className="far fa-comments mr-4" />
          Contact
        </a>
      </div>           
    </div>        
  </div>
  <div id="contact" className="parallax-window relative" data-parallax="scroll" data-image-src="img/antique-cafe-bg-04.jpg">
    <div className="container mx-auto tm-container pt-24 pb-48 sm:py-48">
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-stretch">
        <div className="flex-1 rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container">
          <h2 className="text-3xl mb-6 tm-text-green">Contact Us</h2>
          <p className="mb-6 text-lg leading-8">
            Praesent tellus magna, consectetur sit amet volutpat eu, pulvinar vitae sem.
            Sed ultrices. bg white 80% alpha. btn #066    
          </p>
          <p className="mb-10 text-lg">
            <span className="block mb-2">Tel: <a href="tel:0100200340" className="hover:text-yellow-600 transition">010-020-0340</a></span>
            <span className="block">Email: <a href="mailto:info@company.com" className="hover:text-yellow-600 transition">info@company.com</a></span>                        
          </p>
          <div className="text-center">
            <a href="https://www.google.com/maps" className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
              <i className="fas fa-map-marked-alt mr-8" />
              Open Maps
            </a>
          </div>                    
        </div>
        <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container">
          <form action method="POST" className="text-lg">
            <input type="text" name="name" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Name" required />
            <input type="email" name="email" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Email" required />
            <textarea rows={6} name="message" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Message..." required defaultValue={""} />
            <div className="text-right">
              <button type="submit" className="text-white hover:text-yellow-500 transition">Send it</button>
            </div>                        
          </form>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 w-full">
        <div className="text-white container mx-auto tm-container p-8 text-lg flex flex-col md:flex-row justify-between">
          <span>Copyright 2022 Antique Cafe. All rights reserved.</span>
          <span className="mt-5 md:mt-0">Design: <a href="https://www.tooplate.com" target="_parent">Tooplate</a></span>
        </div>                
      </footer>
    </div>        
  </div>    
      <div className="cart-container"  onClick={() => navigate('/Panier')}>
               
               <img src={Sc} alt="Shopping Cart" />
               <span className="cart-count">{cartTotalQuantity}</span>
               {showCartMessage && (
                 <div className="cart-message">Voir Panier !</div>
               )}
             </div>
</div>
  )
}

export default Salé
