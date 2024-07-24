import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../../Components/ProductDetails/ProductDetails';
import SimilarProducts from '../../Components/SimilarProducts/SimilarProducts';
import { StoreContext } from '../../Context/StoreContext';

const Product = () => {


  const { productList } = useContext(StoreContext);
  const {productId} = useParams();
  const productData = productList.find(item => item._id === productId);

  return (
    <div className="">
      <ProductDetails productData={productData}/>
      <SimilarProducts productData={productData} productId={productId}/>
    </div>
  )
}

export default Product