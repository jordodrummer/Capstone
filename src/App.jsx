import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import ProductList from './components/ProductList'
import Home from './components/Home'
import SingleProduct from './components/SingleProduct'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
  <Routes>
    <Route path="/" element= {<Home />} />
    <Route path="/products" element={<ProductList />} />
    <Route path="/products/:productId" element={<SingleProduct />} />
  </Routes>        
      <h1>Capstone</h1>
      <div className="card">
          
      </div>
    </>
  )
}

export default App
