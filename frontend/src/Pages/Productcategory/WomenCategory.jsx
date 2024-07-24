import React, { useContext } from 'react'
import './Category.css'
import Card from '../../Components/Card/Card'
import banner_women from '../../assets/banner_women.png'
import { StoreContext } from '../../Context/StoreContext'

const WomenCategory = () => {

  const { productList } = useContext(StoreContext);

  return (
    <>
    <img src={banner_women} alt="" />
    <div className="category">
      <div className="products">
        {
          productList.map((item, index) => {
            return item.category === 'women' ?  <Card productData={item} key={index}/> : <></>
          })
        }
      </div>
    </div>
    </>
  )
}

export default WomenCategory