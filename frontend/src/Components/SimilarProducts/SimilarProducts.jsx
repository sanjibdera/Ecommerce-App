import React, { useContext } from 'react'
import './SimilarProducts.css'
import Card from '../Card/Card'
import { StoreContext } from '../../Context/StoreContext'

const SimilarProducts = ({productId, productData}) => {

  const { productList } = useContext(StoreContext);
  const backToTop = window.scrollTo(0,0);

  return (
    <div className="similar-products">
      <hr />
      <h1>Similar Products</h1>
      <div className="products">
        {
          productList.map((item, index) => {
            if (item.category === productData.category && item._id !== productId) {
              return <Card key={index} productData={item} backToTop={backToTop}/>
            } else {
              return null;
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts