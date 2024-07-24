import React, { useContext } from 'react'
import './ProductDetails.css'
import { StoreContext } from '../../Context/StoreContext'

const ProductDetails = ({productData}) => {

  const data = {...productData};
  const { addToCart } = useContext(StoreContext);

  return (
    <div className="product-details">
      <div className="product-details-left">
        <img src={data.image} alt="" />
      </div>

      <div className="product-details-right">
        <div className="product-title"><h2>{data.title}</h2></div>
        <div className="product-price">
          <p className="oldprice">₹ {data.original_price}</p>
          <p className="newprice">₹ {data.offer_price}</p>
        </div>
        
        <div className="product-size">
          <h1>Select Size</h1>
          <div className="product-size-list">
            <div className="">S</div>
            <div className="">M</div>
            <div className="">L</div>
            <div className="">XL</div>
            <div className="">XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(data._id)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails