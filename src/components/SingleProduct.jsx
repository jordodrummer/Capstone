import react, {useState} from 'react'
import { Paper, Typography, Box, Button, Link } from "@mui/material"
import { useParams } from 'react-router-dom'


export default function SingleProduct() {
  const {productId} = useParams() 

    const [singleProduct, setSingleProduct]=useState({})
    console.log('SingleProduct')
    const fetchProduct = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
          const result = await response.json();
          console.log(result, "posts from ProductList.jsx line 10")
            setSingleProduct(result)
        } catch (error) {
          console.log(error)
        }
      }

    fetchProduct()


return (
        <Paper key={singleProduct.id} elevation={3} sx={{ width: { xs: 1, md: 320 } }}>
            <Box sx={{ m: 3 }}>
                <Typography variant="h3">{singleProduct.title}</Typography>
                <Typography sx={{ mt: 2 }}>{singleProduct.description}</Typography>
                {/* <Button variant='contained' sx={{ m: 2 }}>Details</Button> */}
            </Box>
        </Paper>
)

}