import React from "react";
import "./Category.css";
import Sal1 from './Sal.png'; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

const Category = () => {

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Sucré",
      description: "This is an amazing product.",
      image: "https://media.istockphoto.com/id/1137312508/photo/assortment-of-products-with-high-sugar-level.jpg?s=612x612&w=0&k=20&c=pfMfQfo4pHnTfESlJCSB_wCrOvlHhtZ3Eqdu3CY5LDY=", // Replace with actual image URLs
      date: "20 May 2023",
      link: "/Sweets", // Add link here

    },
    {
      id: 2,
      title: "Salé",
      description: "This product is worth checking out.",
      image: Sal1, // Use the imported Sal1 image for this product
      date: "20 May 2023",
      link: "/Salé", // Add link here


      
    },
    {
      id: 3,
      title: "Gateaux",
      description: "Discover the features of this product.",
      image: "https://mongraindesucre.com/wp-content/uploads/2024/01/1705364533_gateau-ballon-danniversaire-recette-facile-et-originale-1-1024x701.jpg",
      date: "20 May 2023",
      link: "/Gateaux", // Add link here

    },
  ];

  return (
    <div className="product-grid">
      <h1 className="header-title">Nos Categories</h1>

      <div className="grid-container">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => navigate(product.link)} // Navigate to the link
          >
            <div className="image-container">
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

export default Category;
