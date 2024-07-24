
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import MenCategory from './Pages/Productcategory/MenCategory'
import WomenCategory from './Pages/Productcategory/WomenCategory'
import KidsCategory from './Pages/Productcategory/KidsCategory'
import Register from './Pages/Register/Register'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
import AdminDashboard from './Pages/Admin/AdminDashboard' 
import AdminAddProduct from './Pages/Admin/AdminAddProduct'


function App() {

  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<MenCategory/>}/>
        <Route path='/women' element={<WomenCategory/>}/>
        <Route path='/kids' element={<KidsCategory/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/addproduct' element={<AdminDashboard/>}/>
        <Route path='/allproduct' element={<AdminAddProduct/>}/>
      </Routes>
    </div>
  )
}

export default App
