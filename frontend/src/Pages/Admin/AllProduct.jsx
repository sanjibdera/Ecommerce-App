import React, { useContext, useState } from 'react'
import './AllProduct.css'
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext'
import EditProduct from './EditProduct';

const AllProduct = () => {

  const {productList, url} = useContext(StoreContext);
  const [editStatus, setEditStatus] = useState(false);
  const [itemData, setItemData] = useState({});
  

  async function removeItem(itemId) {
    if (itemId) {
      const res = await axios.post(url + "/product/remove", {itemId})
      if (res.data.success) {
        alert(res.data.message);
      } else {
        alert("Failed");
      }
    }
  }
  

  return (
    editStatus ? 
    <div className="edit-product">
       <EditProduct setEditStatus={setEditStatus} itemData={itemData}/>
    </div> :
    <div className="all-product">
      <div className="header"><h1>ALL PRODUCTS</h1></div>

        { productList.length !== 0 ? 
          productList.map((item, index) => (
            <div className="product-container" key={index}>
            <div className="product" >
              <img className='product-img' src={item.image} alt="" />
              <p>{item.title}</p>
              <p>₹ {item.offer_price}</p>
              <p className='original-price'>₹ {item.original_price}</p>
              <p>{item.category}</p>
              <p>{item.display}</p>
              <p onClick={() => removeItem(item._id)} className='delete-btn'>Delete</p>
              <p onClick={() => {setEditStatus(true), setItemData(item)}} className='edit-btn'>Edit</p>
            </div>
            <hr />
            </div>
          )) : <div className=""><h2>No Data Found</h2></div>
        }
      </div>
  )
}

export default AllProduct