import React, { useContext } from 'react'
import './FeaturedProducts.css'
import Card from '../Card/Card'
import { StoreContext } from '../../Context/StoreContext'

const FeaturedProducts = ({title, display}) => {

  const { productList } = useContext(StoreContext);

  return (
    <div className="featured-products">
      <div className="product-title">
        <h1>{title}</h1>
      </div>
      <div className="products">
        {
          productList.map((item, index) => {
            return item.display === display ?  <Card productData={item} key={index}/> : <></>
          })
        }
      </div>
    </div>
  )
}

export default FeaturedProducts