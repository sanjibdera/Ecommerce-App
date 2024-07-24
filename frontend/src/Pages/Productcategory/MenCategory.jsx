import React, { useContext } from 'react'
import './Category.css'
import Card from '../../Components/Card/Card'
import banner_mens from '../../assets/banner_mens.png'
import { StoreContext } from '../../Context/StoreContext'

const MenCategory = () => {
  
  const { productList } = useContext(StoreContext);
  
  return (
    <>
    <img src={banner_mens} alt="" />
    <div className="category">
      <div className="products">
        {
          productList.map((item, index) => {
            return item.category === 'men' ?  <Card productData={item} key={index}/> : <></>
          })
        }
      </div>
    </div>
    </>
  )
}

export default MenCategory