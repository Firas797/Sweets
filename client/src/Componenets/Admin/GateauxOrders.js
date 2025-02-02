import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import '../Admin/Admin.css';

function GateauxOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/GateauOrder/get-gateaux-orders');
        setOrders(response.data); // Set the fetched orders into state
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        setError('Something went wrong while fetching the orders');
        setLoading(false);
      }
    };

    fetchOrders(); // Call the function to fetch orders
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="admin-container">
      <h2 className="admin-title">Gateaux Orders</h2>
      {loading ? (
        <p className="loading-text">Loading orders...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : orders.length === 0 ? (
        <p className="no-orders-text">No orders available.</p>
      ) : (
        <MDBTable className="order-table text mb-0">
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Location</th>
              <th scope="col">Number of People</th>
              <th scope="col">Message</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.gateauxMessage?.name || 'N/A'}</td>
                <td>{order.gateauxMessage?.phone || 'N/A'}</td>
                <td>{order.gateauxMessage?.location || 'N/A'}</td>
                <td>{order.gateauxMessage?.numberOfPeople || 'N/A'}</td>
                <td>{order.gateauxMessage?.message || 'N/A'}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      )}
    </div>
  );
}

export default GateauxOrders;
