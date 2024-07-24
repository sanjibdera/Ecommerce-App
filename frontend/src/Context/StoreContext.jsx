import { createContext, useEffect, useRef, useState } from "react"
import axios from "axios";


export const StoreContext = createContext(null);


function StoreContextProvider({children}) {

  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({});
  const [productList, setProductList] = useState([]);
  const [adminStatus, setAdminStatus] = useState(false);

  const url = "https://ecommerce-app-backend-elx0.onrender.com";


  function getCartTotal() {
    let total = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = productList.find(product => product._id === item);
      total += itemInfo.offer_price * cartItems[item];
    }
  }
  return total
  }
  

  // get loggedin user function
  function getLoggedinUser() {
    if (localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"));
    }
  }

  // get product data function
  async function getProductData() {
    const res = await axios.get(url + "/product/get");
    setProductList(res.data.data);
  }

  // get cart data function
  async function getCartData(token) {
    if (token) {
      const res = await axios.post(url + "/cart/get", {}, {headers:{token}});
      setCartItems(res.data.cartData);
    }
  }     

  // add to cart function
  async function addToCart(itemId) {
    if (!cartItems[itemId]) {
      setCartItems(prev => ({...prev, [itemId]: 1}))
    } else {
      setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    if (token) {
      const res = await axios.post(url + "/cart/add", {itemId}, {headers:{token}})
      if (res.data.success) {
        alert("Product Added")
      }
    }
  }

  // remove from cart function
  async function removeFromCart(itemId) {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}))
    if (token) {
      const res = await axios.post(url + "/cart/remove", {itemId}, {headers:{token}})
      if (res.data.success) {
        alert("Product Removed")
      }
    }
  }


  useEffect(() => {
    async function loadData() {
     await getProductData();
      getLoggedinUser();
    if (localStorage.getItem("token")) {
      await getCartData(localStorage.getItem("token"));
    }
    if (localStorage.getItem("admin") === "admin@gmail.com") {
      setAdminStatus(true);
    } else {
      setAdminStatus(false);
    }
    }
    
    loadData();
  }, [])



  const contextValue = {
    token,
    cartItems,
    productList,
    adminStatus,
    url,
    setToken,
    setCartItems,
    addToCart,
    removeFromCart,
    getCartTotal,
    setAdminStatus
    
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
