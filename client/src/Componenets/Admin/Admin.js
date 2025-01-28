import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../Redux/Order/orderSlice';
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import '../Admin/Admin.css';

function Admin() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="admin-container">
      <h2 className="admin-title">Orders</h2>
      {loading ? (
        <p className="loading-text">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="no-orders-text">No orders available.</p>
      ) : (
        <MDBTable className="order-table text mb-0">
          <MDBTableHead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Name Client</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Done</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Phone</th>
              <th scope="col">Cart Items</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className={order.isPaid ? 'paid-row' : 'unpaid-row'} // Highlight unpaid rows
              >
                <th>{order._id}</th>
                <td>{order.userInformation.fullName}</td>
                <td>{order.userInformation.address}</td>
                <td>{order.userInformation.location}</td>
                <td>{order.isPaid ? 'Yes' : 'No'}</td>
                <td>{order.totalAmount} DT</td>
                <td>{order.userInformation.phoneNumber}</td>
                <td>
                  {order.cartItems.length > 0 ? (
                    <div className="cart-items-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.cartItems.map((item, index) => (
                            <tr key={index}>
                              <td>{item.name || 'N/A'}</td>
                              <td>{item.cartQuantity} Kg</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="empty-cart-text">No items in the cart</p>
                  )}
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      )}
    </div>
  );
}

export default Admin;
