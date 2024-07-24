import React, { useContext, useNavigate, useState } from 'react'
import './Cart.css'
import CartItems from '../../Components/CartItems/CartItems'
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {

  const { productList, cartItems, getCartTotal } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="header"><h1>CART</h1></div>
      <div className="cart-top">
        <div className="cart-titles">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add</p>
          <p>Remove</p>
        </div>
        <hr />

        {
          productList.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return <CartItems key={index} cartData={item}/>
            }
          })
        }
        
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="">
            <div className="details">
              <p>Subtotal</p>
              <p>₹{getCartTotal()}</p>
            </div>
            <hr />
            <div className="details">
              <p>Delivery Fee</p>
              <p>₹{getCartTotal() ? 99 : 0}</p>
            </div>
            <hr />
            <div className="details">
              <b>Total</b>
              <b>₹{getCartTotal() ? getCartTotal() + 99 : 0}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PLACE ORDER</button>
        </div>
        <div className="promocode">
          <div className="">
            <p>Enter promo code</p>
            <div className="promocode-input">
              <input type="text" placeholder='promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart