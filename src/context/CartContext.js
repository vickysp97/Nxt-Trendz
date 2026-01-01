import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  paymentMethod: '',
  orderPlaced: false,
  setPaymentMethod: {},
  setOrderPlaced: {},
  resetPayment: {},
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
