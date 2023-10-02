import { useState } from 'react'
// import './App.css'
import {Route, Routes} from 'react-router-dom'
// import ProductList from './components/ProductList'
import Home from './components/Home'
import SingleProduct from './components/SingleProduct'
import { CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <CssBaseline />
    {/* pass user state into NavBar and Outlet context */}
    <NavBar />
    <Routes>
    <Route path="/" element= {<Home />} />
    {/* <Route path="/products" element={<ProductList />} /> */}
    <Route path="/:productId" element={<SingleProduct />} />
  </Routes>        
    </>
  )
}

export default App
