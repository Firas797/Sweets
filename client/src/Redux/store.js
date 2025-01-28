import { configureStore } from '@reduxjs/toolkit';
import cardReducer, { getTotals } from '../Redux/Cart/cartSlice'
import orderReducer from './Order/orderSlice'
import GtxSlice from './Order/GateauxOrder'

const store = configureStore({
  reducer: {
    cart: cardReducer,
order : orderReducer,
Gtx : GtxSlice,
  },
});
store.dispatch(getTotals());

export default store;
