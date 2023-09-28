import react, { useState, useEffect } from 'react'
import { Paper, Typography, Box, Button } from "@mui/material"
import { Link } from 'react-router-dom'
import SingleProduct from './SingleProduct'


export default function ProductList(){

    const [products, setProducts] = useState([])
// console.log(products, 'ProuctList line 8')
    const fetchProducts = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const result = await response.json();
        //   console.log(result, "posts from ProductList.jsx line 10")
          setProducts(result)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(()=>{
    fetchProducts()
  },[])
const singleProductButton = (singleProduct) => {

}
    return (
<>
            {products.map((singleProduct) => {
                return (
                    <Paper key={singleProduct.id} elevation={3} sx={{ width: { xs: 1, md: 320 } }}>
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h3">{singleProduct.title}</Typography>
                            <Typography sx={{ mt: 2 }}>{singleProduct.description}</Typography>
                            <Button variant='contained' sx={{ m: 2 }}>Details</Button>
                        </Box>
                        <Link to={`${singleProduct.id}`}>test</Link>
                        {/* <SingleProduct singleProduct={singleProduct}/> */}
                    </Paper>
                )
            })}
        </>
    )
}