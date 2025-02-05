import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css"; // Don't forget to import Bootstrap CSS
import "./About.css";
import { useDispatch } from 'react-redux';  // Import useDispatch from redux
import { createGateauxOrder } from '../../Redux/Order/GateauxOrder';
import { useNavigate } from "react-router-dom";

const About = () => {
  const dispatch = useDispatch();  // Initialize dispatch
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    navigate(`/${category}`);
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    numberOfPeople: "",
    message: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);

  const portfolioItems = [
    { id: 1, title: "Artwork", category: "Branding", image: "https://mongraindesucre.com/wp-content/uploads/2024/01/1705364533_gateau-ballon-danniversaire-recette-facile-et-originale-1-1024x701.jpg" },
    { id: 2, title: "Smart Band", category: "Illustration", image: "https://mongraindesucre.com/wp-content/uploads/2024/01/1705364533_gateau-ballon-danniversaire-recette-facile-et-originale-1-1024x701.jpg" },
    { id: 3, title: "Clock", category: "Web", image: "https://mongraindesucre.com/wp-content/uploads/2024/01/1705364533_gateau-ballon-danniversaire-recette-facile-et-originale-1-1024x701.jpg" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Dispatch createGateauxOrder action with formData directly
    dispatch(createGateauxOrder(formData)); // Send formData directly as gateauxData
  
    setSuccessPopupVisible(true);
    setIsOpen(false); // Close the modal after submission
  };
  

  return (
    <div className="agency-showcase">
      {/* Header Section */}
      <section className="intro">
        <div className="intro-text">
          <h1>Hello!!!<br />Birthday !!!</h1>
          <p>
          Faites de chaque moment une fête ! 🎉 Commandez votre délicieux gâteau d'anniversaire ou de surprise dès aujourd'hui ! 🎂✨
          </p>
          <button className="cta-button" onClick={() => setIsOpen(true)}>
          ENVOYER UN MESSAGE          </button>
        </div>
        <div className="intro-image">
          <img src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/9e456be5-c701-45d8-b8bd-856ef7c5a7e8/Derivates/db88f78a-89d4-4507-ac81-8531e1da2c3f.jpg" alt="Creative Agency" />
        </div>
      </section>

      {/* Gateaux Order Modal */}
      <Modal show={modalIsOpen} onHide={() => setIsOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Merci de vous envoyez votre details et on va <span>vous appeler</span>  Bientot </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Nom"
              placeholder="Nom"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <hr />
            <br/>

            <input
              type="Tel"
              name="Tel"
              placeholder="Tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <hr />
            <br/>

            <input
              type="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <hr />
            <br/>

            <input
              type="text"
              name="Localisation"
              placeholder="Localisation"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
            <hr />
            <br/>
            <input
              type="number"
              name="Nombre de personnes"
              placeholder="Nombre de personnes"
              value={formData.numberOfPeople}
              onChange={handleInputChange}
              required
            />
            <hr />
            <br/>

            <p className="arabic1">
              برجاء ارسال التفاصيل الخاصة بك وسوف <span className="call"> نتصل بك</span>
            </p>
            <br/>


            <Button type="submit" variant="primary">Envoyer</Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Success Popup */}
      {successPopupVisible && (
        <div className="success-popup">
          <p>Votre commande a été envoyée correctement ! Merci ❤️</p>
        </div>
      )}

      {/* Portfolio Showcase */}
      <section className="portfolio">
        <h2> DÉLICIEUX SWEETS TUNISIENS.</h2>
        <div className="portfolio-filters">
          <button className="filter active">Tous</button>
          <button className="filter" onClick={() => handleNavigation("Sweets")}>Sucré</button>
      <button className="filter" onClick={() => handleNavigation("Salé")}>Salé</button>
      <button className="filter" onClick={() => handleNavigation("Gateaux")}>Gateaux</button>
   
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div className="portfolio-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="item-overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="load-more">Voir Plus</button>
      </section>
    </div>
  );
};

export default About;
