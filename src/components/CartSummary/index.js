// Write your code here
import CartContext from '../../context/CartContext'
import PaymentPopup from '../PaymentPopup'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const total = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )

      return (
        <div className="cart-summary">
          <h1 className="order-total">
            Order Total: <span>Rs {total}/-</span>
          </h1>
          <p className="items-count">{cartList.length} Items in cart</p>

          <PaymentPopup />
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
