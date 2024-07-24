import React, { useContext, useState } from 'react'
import './EditProduct.css'
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';

const EditProduct = ({setEditStatus, itemData}) => {

  const [loading, SetLoading] = useState(false);
  const{url} = useContext(StoreContext);

  const [productInfo, setProductInfo] = useState({
    id: itemData._id,
    title: itemData.title,
    image: "",
    category: itemData.category,
    display: itemData.display,
    offer_price: itemData.offer_price,
    original_price: itemData.original_price,
  });

  function handleInfo(e) {
    setProductInfo({...productInfo, [e.target.name]: e.target.value});
  }

  function handleImage(e) {
    setProductInfo({...productInfo, image: e.target.files[0]})
  }
  
  async function handleEdit(e) {
    e.preventDefault();
    if (productInfo.image === "") {
      alert("Please select product image")
      return;
    }
    SetLoading(true);
    const formData = new FormData();
    formData.append("id",productInfo.id)
    formData.append("title",productInfo.title)
    formData.append("display",productInfo.display)
    formData.append("offer_price",productInfo.offer_price)
    formData.append("original_price",productInfo.original_price)
    formData.append("category",productInfo.category)
    formData.append("image",productInfo.image)


    const response = await axios.post(url + "/product/update", formData);
    if (response.data.success) {
      setProductInfo({
        title: "",
        image: "",
        category: "men",
        display: "new_collection",
        offer_price: "",
        original_price: ""
      });
      setEditStatus(false);
      alert(response.data.message);
    } else {
      alert("Failed");
    }
    SetLoading(false);
  }



  return (
    <div className="edit-product">
      {loading ? <div className="loadind"><p>Updating...</p></div> : <></>}
      <h1>EDIT PRODUCT</h1>
      <form action="">
        <input type="text" placeholder='Product Title' name='title' value={productInfo.title} onChange={handleInfo} />
        <input type="text" placeholder='Original Price' name='original_price' value={productInfo.original_price} onChange={handleInfo} />
        <input type="text" placeholder='Offer Price' name='offer_price'   value={productInfo.offer_price} onChange={handleInfo}/>
        <div className="edit-category">
          <p>Select Category</p>
          <select value={productInfo.category} onChange={handleInfo} name='category'>
            <option value="Men" >Men</option>
            <option value="women" >Women</option>
            <option value="kids" >Kids</option>
          </select>
        </div>
        <div className="edit-category">
          <p>Select Display Section</p>
          <select value={productInfo.display} onChange={handleInfo} name='display'>
            <option value="new_collection" >New Collection</option>
            <option value="todays_offer" >Today's Offer</option>
            <option value="bestseller" >Our BestSeller</option>
          </select>
        </div>
        <input name='image' type="file" onChange={handleImage} required />
        <button onClick={(e) => handleEdit(e)}>EDIT PRODUCT</button>
        <button onClick={() => setEditStatus(false)}>CANCEL</button>
      </form>
    </div>
  )
}

export default EditProduct