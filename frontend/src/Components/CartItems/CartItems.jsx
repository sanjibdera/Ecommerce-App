import React, { useContext } from 'react'
import './CartItems.css'
import { StoreContext } from '../../Context/StoreContext'

const CartItems = ({cartData}) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <>
    <div className="cart-items">
      <img src={cartData.image} alt="" />
      <p>{cartData.title}</p>
      <p>₹ {cartData.offer_price}</p>
      <p>{cartItems[cartData._id]}</p>
      <p>₹ {cartData.offer_price*cartItems[cartData._id]}</p>
      <p onClick={() => addToCart(cartData._id)} className='add'>Add</p>
      <p onClick={() => removeFromCart(cartData._id)} className='remove'>Remove</p>
    </div>
    <hr />
    </>
    
  )
}

export default CartItems