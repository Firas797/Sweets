import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find(
        item => item.name === action.payload.name && item.name2 === action.payload.name2
      );

      if (existingItem) {
        // If it exists, increase the quantity
        existingItem.cartQuantity += 1;
        toast.info("Quantité du produit augmentée", { position: "bottom-left" });
      } else {
        // If it doesn't exist, add the new item to the cart
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
        toast.success("Produit ajouté au panier", { position: "bottom-left" });
      }

      // Save the cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.cartTotalQuantity += 1;
    },

    decreaseCart: (state, action) => {
      // Find the item in the cart
      const itemIndex = state.cartItems.findIndex(
        item => item.name === action.payload.name && item.name2 === action.payload.name2
      );

      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          // Decrease the quantity if it's greater than 1
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.info("Quantité du produit diminuée", { position: "bottom-left" });
        } else {
          toast.warning("La quantité du produit ne peut pas être inférieure à 1", { position: "bottom-left" });
        }
      }

      // Save the cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      // Remove the item from the cart
      const { name, name2 } = action.payload;
      state.cartItems = state.cartItems.filter(
        item => !(item.name === name && item.name2 === name2)
      );

      // Save the cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.cartTotalQuantity--;
      toast.error("Produit retiré du panier", { position: "bottom-left" });
    },

    getTotals: (state) => {
      // Calculate total price and quantity
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = parseFloat(price) * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalAmount = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
    },

    clearCart: (state) => {
      // Clear the cart
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
