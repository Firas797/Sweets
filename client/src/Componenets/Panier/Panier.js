import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../Redux/Cart/cartSlice";
import { createOrder } from '../../Redux/Order/orderSlice';
import { Modal, Button } from 'react-bootstrap';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Panier.css';

function Panier() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [userInformationComplete, setUserInformationComplete] = useState(false);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [initiatePayment, setInitiatePayment] = useState(false);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleProceedToPay = () => {
    const orderData = {
      cartItems: cartItems.map((item) => ({
        name: item.name,
        name2: item.name2,
        cartQuantity: item.cartQuantity,
        PrixResultatOffre: item.price,
      })),
      userInformation: {
        fullName,
        address,
        phoneNumber,
        location,
      },
      totalAmount: cartTotalAmount,
    };
    dispatch(createOrder(orderData));
  };

  useEffect(() => {
    if (fullName && address && phoneNumber && location) {
      setUserInformationComplete(true);
    } else {
      setUserInformationComplete(false);
    }
  }, [fullName, address, phoneNumber, location]);

  useEffect(() => {
    if (initiatePayment) {
      handleProceedToPay();
      setShowModal(true);
      setInitiatePayment(false);
    }
  }, [initiatePayment]);

  return (
    <section className="h-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Panier</h3>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Retourne au</span>{' '}
                  <a href="/" className="text-body">ACCUEIL</a>
                </p>
              </div>
            </div>

            {cartItems.map((item) => (
              <div className="card rounded-3 mb-4" key={item.name}>
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                  src={item.image || 'img/antique-cafe-bg-02.jpg'}
                  alt={item.name}
                  className="img-fluid rounded-3"
                />
                      {/* <img
                        src={
                          (() => {
                            try {
                              return require(`../BAImages/${item.OffersNo}.png`);
                            } catch (error) {
                              try {
                                return require(`../Products/img/${item.OffersNo}_1.png`);
                              } catch (error) {
                                return "path/to/default/image.png";
                              }
                            }
                          })()
                        }
                        className="img-fluid rounded-3"
                        alt={item.DescriptionOffre}
                      /> */}
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">{item.DescriptionOffre}</p>
                      <p>
                        <span className="text-muted">Nom: </span>{item.name}
                        <br />
                        <span className="text-muted">Nom': </span>{item.name2}
                        <br />
                        <span className="text-muted">Prix: </span>{item.price} 
                        <br />
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                      <button
                        onClick={() => handleDecreaseCart(item)}
                        className="button-minus border rounded-circle icon-sm mx-1"
                      >
                        -
                      </button>
                      <span>{item.cartQuantity}</span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="button-plus border rounded-circle icon-sm lh-0"
                      >
                        +
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">
                            {console.log('Item:', item, 'Price:', item.price, 'Quantity:', item.cartQuantity)}

                            {(() => {
  const rawPrice = item.price?.toString().replace(' DT', '').trim(); // Ensure it's a string before replacing
  const price = parseFloat(rawPrice); // Convert to number
  const quantity = Number(item.cartQuantity);

  console.log('Parsed Price:', price, 'Parsed Quantity:', quantity);

  return (!isNaN(price) && !isNaN(quantity))
    ? (price * quantity).toFixed(2) // Ensure a valid number with two decimals
    : 0;
})()}            <DeleteOutlineIcon onClick={() => handleRemoveFromCart(item)} />
                        
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="card mb-4">
              <div className="card-body p-4">
                <h5 className="mb-0">Total commandes: <span className='green'>{cartTotalAmount} DT</span></h5>
                <br/>
                <h5 className="mb-0">Livraison: <span className='green'>7 DT</span></h5>

              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body p-4">
                <h3 className="fw-normal mb-3">Informations sur l’utilisateur</h3>
                <input type="text" placeholder="Nom & Prénom" className="form-control mb-3" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <input type="text" placeholder="Adresse" className="form-control mb-3" value={address} onChange={(e) => setAddress(e.target.value)} />
                <input type="text" placeholder="Numéro de téléphone" className="form-control mb-3" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <input type="text" placeholder="Cité" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
            </div>
            

            <button
              className="btn btn-warning btn-block btn-lg"
              onClick={() => setInitiatePayment(true)}
              disabled={!userInformationComplete || cartItems.length === 0 || cartTotalAmount === 0}
            >
              Valider
            </button>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>Félicitations</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Merci, nous vous appellerons bientôt pour confirmer votre commande.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  href="/"
                  variant="primary"
                  onClick={() => {
                    handleClearCart();
                    setShowModal(false);
                  }}
                >
                  Confirmer
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Panier;
