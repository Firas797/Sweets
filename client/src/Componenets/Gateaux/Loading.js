import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function Loading() {
  const navigate = useNavigate();

  return (
    <div className='App'>
      <br/>
      <br/>
      <Navbar />
      <div>    
        <h1 className="header-title">
          Votre commande a été envoyée correctement ! Merci ❤️ 😍🍰
          Nous vous appellerons bientôt pour obtenir tous les détails de votre part.
        </h1>
        <br/>
        <br/>
        <br/>
        <h1 className="header-title">
          تم إرسال طلبك بنجاح! شكرًا ❤️ 😍🍰
          سوف نتصل بك قريبًا للحصول على جميع التفاصيل منك.
        </h1>
      </div>
      <br/>
      <br/>
      <br/>
      <button 
        className="buy-now" 
        onClick={() => navigate("/")} // Navigate to home page
      >
        Revenir à la page d'accueil
      </button>
    </div>
  );
}

export default Loading;
