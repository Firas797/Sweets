import React, { useState, useEffect } from "react";
import './Gateaux.css'
import Navbar from '../Navbar/Navbar'
import Bodys from './Bodys'
import { useSelector, useDispatch } from "react-redux";
import { createGateauxOrder } from '../../Redux/Order/GateauxOrder';
import { useNavigate } from 'react-router-dom';

function Gateaux() {

  const dispatch = useDispatch();  // Initialize dispatch
  
  const [buttonDisabled, setButtonDisabled] = useState(true);  // Button is initially disabled
  const [formError, setFormError] = useState(""); // To store error message


   const [formData, setFormData] = useState({
      name: "",
      phone: "",
      location: "",
      numberOfPeople: "",
      message: "",
    });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Envoyer");

  const handleClick = () => {
    setButtonText("⏳"); // Change text to spinner when clicked
    setTimeout(() => {
      navigate('/SC'); // Redirect to /SC after 3 seconds
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (Object.values(formData).some(field => field === "")) {
      setFormError("Veuillez remplir tous les champs."); // Show error message when clicking submit
      return;
    }
  
    setFormError(""); // Clear error when form is complete
    dispatch(createGateauxOrder(formData)); // Dispatch action with form data
    setButtonText("⏳"); // Change button text to a loading state
  
    setTimeout(() => {
      navigate('/SC'); // Redirect after 3 seconds
    }, 5000);
  };
  useEffect(() => {
    // Check if all fields are filled
    const isFormComplete = Object.values(formData).every(field => field !== "");
    setButtonDisabled(!isFormComplete);
    setFormError(isFormComplete ? "" : "Veuillez remplir tous les champs.");
  }, [formData]); // Dependency on formData to track changes


  const handleCommandeClick = () => {
    window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom when the button is clicked
  };
  return (
    <div>
<div>
  <div className="hero_area">
    {/* header section strats */}   <Navbar/>
    <header className="header_section long_section px-0">

    </header>
    <section className="about_section layout_padding long_section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="img-box">
            <img src="images/about-img.png" alt />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h1 className="header-title">
              Meilleurs Gâteaux
              </h1>
            </div>
            <p>
            Découvrez nos délicieux gâteaux préparés avec amour et des ingrédients de qualité. Laissez-vous séduire par nos créations et profitez de moments gourmands.
            </p>
         
            <button 
      className="buy-now" 
      onClick={handleCommandeClick}
    >
      Commander Maintenant
    </button>
          </div>
          <div className="col-md-4">
         
        </div>
        
        </div>
        
      </div>
    </div>
  </section>
  <br/>
    {/* <section className="client_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h1 className="header-title" >
          Les Commentaires
        
        </h1 >
      </div>
      <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-11 col-lg-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.jpg" alt />
                  </div>
                  <div></div>
                  <div className="detail-box">
                    <div className="name">
                      <i className="fa fa-quote-left" aria-hidden="true" />
                      <h6>
                        Siaalya
                      </h6>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable cIt is a long established fact
                      that a reader will be distracted by the readable c
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-11 col-lg-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <div className="name">
                      <i className="fa fa-quote-left" aria-hidden="true" />
                      <h6>
                        Siaalya
                      </h6>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable cIt is a long established fact
                      that a reader will be distracted by the readable c
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-11 col-lg-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <div className="name">
                      <i className="fa fa-quote-left" aria-hidden="true" />
                      <h6>
                        Siaalya
                      </h6>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable cIt is a long established fact
                      that a reader will be distracted by the readable c
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="carousel_btn-container">
          <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
            <i className="fa fa-long-arrow-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section> */}
  <section className="blog_section layout_padding">
    <div className="container">
    <div className="heading_container">
        <h1 className="header-title" >
          Besty
        
        </h1 >
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="images/b1.jpg" alt />
            </div>
            <div className="detail-box">
              <h5>
              Gâteaux Sur-Mesure pour Tous Vos Événements 🎂✨              </h5>
              <p>
              Que ce soit pour un anniversaire, une surprise ou une occasion spéciale, nos gâteaux sont disponibles en plusieurs tailles et saveurs pour s’adapter à vos envies.               </p>
             <br/>
             <button 
      className="buy-now" 
      onClick={handleCommandeClick}
    >
      Commander 
    </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="images/b2.jpg" alt />
            </div>
            <div className="detail-box">
              <h5>
              Best-Seller : Brownies Gâteau  🍫✨              </h5>
              <p>
              Découvrez notre nouvelle tendance gourmande : le Brownies Gâteau , créé par nos clients et devenu rapidement un incontournable ! Une texture fondante, un goût intense… Essayez-le et succombez à son plaisir unique. 😍🍰              </p>
              <br/>
              <button 
      className="buy-now" 
      onClick={handleCommandeClick}
    >
      Commander 
    </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="images/b3.jpg" alt />
            </div>
            <div className="detail-box">
              <h5>
              Gâteau d'Anniversaire 🎉🎂
</h5>              <br/>

              <p>
              Nous réalisons des gâteaux d'anniversaire sur mesure pour tous les âges, des enfants aux adultes ! Des créations uniques et gourmandes pour rendre chaque fête encore plus spéciale. 🎈✨              </p>
              <br/>
              <button 
      className="buy-now" 
      onClick={handleCommandeClick}
    >
      Commander 
    </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  {/* furniture section */}
  <section className="furniture_section layout_padding">
    <div className="container">
 
      <Bodys/>
    
    </div>
  </section>
  {/* end furniture section */}
  {/* about section */}

  {/* end about section */}
  {/* blog section */}

  {/* end blog section */}
  {/* client section */}

  {/* end client section */}
  {/* contact section */}
  <section className="contact_section  long_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <div className="heading_container">
              <h1 className="header-title">
              Commander Gâteaux Maintenant
              </h1>
              <br/>
              <div className="contact_footer">
              <p> Apres Remplir le formulaire , Nous vous appellerons bientôt.</p>
            </div>
            </div>
            <form onSubmit={handleSubmit}>
  <div>
    <input
      type="text"
      name="name"
      placeholder="Nom et Prénom"
      value={formData.name}
      onChange={handleInputChange}
      required
    />
  </div>
  <div>
    <input
      type="text"
      name="phone"
      placeholder="Téléphone"
      value={formData.phone}
      onChange={handleInputChange}
      required
    />
  </div>
  <div>
  <input
              type="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
  </div>
  <div>
    <input
      type="text"
      name="location"
      placeholder="Adresse"
      value={formData.location}
      onChange={handleInputChange}
      required
    />
  </div>
  <div>
    <input
      type="number"
      name="numberOfPeople"
      placeholder="Nombre de personnes"
      value={formData.numberOfPeople}
      onChange={handleInputChange}
      required
    />
  </div>
  <button
                        type="submit"
                        disabled={buttonDisabled}
                        style={{ backgroundColor: buttonDisabled ? "gray" : "#825a21" }}
                      >
                        {buttonText}
                      </button>
</form>
          </div>
        </div>
        <div className="col-md-6">
      
        </div>
      </div>
    </div>
    <hr/>
   <br/>
   <br/>

   
  </section>
  
  {/* end contact section */}
  {/* info section */}
  {/* <section className="info_section long_section">
    <div className="container">
      <div className="contact_nav">
        <a href>
          <i className="fa fa-phone" aria-hidden="true" />
          <span>
            Call : +01 123455678990
          </span>
        </a>
        <a href>
          <i className="fa fa-envelope" aria-hidden="true" />
          <span>
            Email : demo@gmail.com
          </span>
        </a>
        <a href>
          <i className="fa fa-map-marker" aria-hidden="true" />
          <span>
            Location
          </span>
        </a>
      </div>
      <div className="info_top ">
        <div className="row ">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="info_links">
              <h4>
                QUICK LINKS
              </h4>
              <div className="info_links_menu">
                <a className href="index.html">Home <span className="sr-only">(current)</span></a>
                <a className href="about.html"> About</a>
                <a className href="furniture.html">Furniture</a>
                <a className href="blog.html">Blog</a>
                <a className href="contact.html">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mx-auto">
            <div className="info_post">
              <h5>
                INSTAGRAM FEEDS
              </h5>
              <div className="post_box">
                <div className="img-box">
                  <img src="images/f1.png" alt />
                </div>
                <div className="img-box">
                  <img src="images/f2.png" alt />
                </div>
                <div className="img-box">
                  <img src="images/f3.png" alt />
                </div>
                <div className="img-box">
                  <img src="images/f4.png" alt />
                </div>
                <div className="img-box">
                  <img src="images/f5.png" alt />
                </div>
                <div className="img-box">
                  <img src="images/f6.png" alt />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info_form">
              <h4>
                SIGN UP TO OUR NEWSLETTER
              </h4>
              <form action>
                <input type="text" placeholder="Enter Your Email" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
              <div className="social_box">
                <a href>
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* end info_section */}
  {/* footer section */}
 
  {/* footer section */}
  {/* jQery */}
  {/* bootstrap js */}
  {/* custom js */}
  {/* Google Map */}
  {/* End Google Map */}
</div>

    </div>
  )
}

export default Gateaux
