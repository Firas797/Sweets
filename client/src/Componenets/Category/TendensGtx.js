import React from "react";
import "./Category.css";
import Sal1 from './Sal.png'; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import b3 from './imgsT/b3.jpg'
import g2 from './imgsT/g2.jpg'
import g8 from './imgsT/g8.jpg'
import g7 from './imgsT/g7.jpg'

const TendensGtx = () => {

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Russe",
      description: "This is an amazing product.",
      image: b3,
      date: "20 May 2023",
      link: "/Gateaux", // Add link here

    },
    {
      id: 2,
      title: "Anniv",
      description: "This product is worth checking out.",
      image: g7, // Use the imported Sal1 image for this product
      date: "20 May 2023",
      link: "/Gateaux", // Add link here


      
    },
    {
      id: 3,
      title: "Pistache",
      description: "Discover the features of this product.",
      image: g8,
      date: "20 May 2023",
      link: "/Gateaux", // Add link here

    },
  ];

  return (
    <div className="product-grid">

      <div className="grid-container">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => navigate(product.link)} // Navigate to the link
          >
            <div className="image-containerr">
              <h1 className="header-title">{product.title}</h1>
              <img src={product.image} alt={product.title} />
              <div className="overlay">
                <span>Voir Plus</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TendensGtx;
