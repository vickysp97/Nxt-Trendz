import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import './index.css'

const PaymentPopup = () => (
  <CartContext.Consumer>
    {value => {
      const {
        cartList,
        paymentMethod,
        orderPlaced,
        setPaymentMethod,
        setOrderPlaced,
        resetPayment,
        removeAllCartItems,
      } = value

      const totalAmount = cartList.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      )

      return (
        <Popup
          modal
          trigger={
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          }
        >
          {close => (
            <div className="amazon-popup">
              {!orderPlaced ? (
                <>
                  <h1 className="popup-title">Select a payment method</h1>

                  <div className="popup-body">
                    {/* LEFT SECTION */}
                    <div className="payment-section">
                      <label className="disabled">
                        <input type="radio" disabled />
                        Credit / Debit Card
                      </label>

                      <label className="disabled">
                        <input type="radio" disabled />
                        Net Banking
                      </label>

                      <label className="disabled">
                        <input type="radio" disabled />
                        UPI
                      </label>

                      <label className="disabled">
                        <input type="radio" disabled />
                        Wallet
                      </label>

                      <label className="enabled">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'COD'}
                          onChange={() => setPaymentMethod('COD')}
                        />
                        Cash on Delivery
                      </label>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="summary-section">
                      <h2>Order Summary</h2>
                      <p>Items: {cartList.length}</p>
                      <p className="total">Order Total: Rs {totalAmount}/-</p>

                      <button
                        type="button"
                        className="confirm-btn"
                        disabled={paymentMethod !== 'COD'}
                        onClick={setOrderPlaced}
                      >
                        Confirm Order
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="success-section">
                  <p className="success-text">
                    Your order has been placed successfully
                  </p>
                  <button
                    type="button"
                    className="close-btn"
                    onClick={() => {
                      removeAllCartItems()
                      resetPayment()
                      close()
                    }}
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          )}
        </Popup>
      )
    }}
  </CartContext.Consumer>
)

export default PaymentPopup
