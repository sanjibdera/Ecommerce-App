import React, { useContext } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Card = ({productData, backToTop}) => {

  const {addToCart} = useContext(StoreContext);

  return (
    <div className="card">
    <Link to={`/product/${productData._id}`}>
    <img onClick={backToTop} src={productData.image} alt="" />
    </Link>
      <p>{productData.title}</p>
      <div className="card-price">
        <p className='old-price'>{`₹${productData.original_price}`}</p>
        <p className='new-price'>{`₹${productData.offer_price}`}</p>
        <div className='add-btn' onClick={() => addToCart(productData._id)}><p>+</p></div>
      </div>
      <div className="card-status">
      <p className='product-stock'>{'In Stock'}</p>
      <p className='delivery-status'>{'Free Delivery'}</p>
      </div>
    </div>
  )
}

export default Card