import React, { useContext } from 'react'
import './Category.css'
import Card from '../../Components/Card/Card'
import banner_kids from '../../assets/banner_kids.png'
import { StoreContext } from '../../Context/StoreContext'

const KidsCategory = () => {

  const { productList } = useContext(StoreContext);

  return (
    <>
    <img src={banner_kids} alt="" />
    <div className="category">
      <div className="products">
        {
          productList.map((item, index) => {
            return item.category === 'kids' ?  <Card productData={item} key={index}/> : <></>
          })
        }
      </div>
    </div>
    </>
  )
}

export default KidsCategory