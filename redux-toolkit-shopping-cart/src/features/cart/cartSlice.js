import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/cartData";

const initialState = {
  cartItems,
  amount: 3,
  total: 60,
};

// Crea un nuevo slice (característica)
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // Elimina todos los elementos del cart
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // Obtiene el id del item
      const itemId = action.payload;

      // Elimina el item dado su id
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItemAmount: (state, { payload }) => {
      // Busca el elemento dado su id
      const cartItem = state.cartItems.find((item) => item.id === payload);

      // Incrementa la cantidad del item
      cartItem.amount++;
    },
    decreaseItemAmount: (state, { payload }) => {
      // Busca el elemento dado su id
      const cartItem = state.cartItems.find((item) => item.id === payload);

      // Decrementa la cantidad del item
      cartItem.amount--;
    },
    calculateTotals:(state)=>{
      let amount=0;
      let total=0;
       state.cartItems.forEach(item=>{
        amount+=item.amount;
        total+=item.amount*item.price
       })
      //modifica el estado
       state.amount=amount;
       state.total=total;
    }
  },
});

export const { clearCart, removeItem, increaseItemAmount, decreaseItemAmount,calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
