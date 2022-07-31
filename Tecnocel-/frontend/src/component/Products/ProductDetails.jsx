import Card from '@mui/material/Card';
import './Productdetails.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import productActions from '../../redux/actions/productActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link as LinkRouter } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function ProductDetails() {
    const {id}=useParams()
    
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(productActions.getOneProduct(id))
        // eslint-disable-next-line
    }, []);

    let card = useSelector(store => store.productReducer.oneProduct)
  
    const addToCart = async (id) => {

        await dispatch(productActions.agregarCarrito(id))
  
      
      };
   

    return (
        <>

         {card && 
          
          <div key={card?._id} className='details'> 
        <Card className='cardDetails' key='index' sx={{maxWidth: "100vw"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={card?.images}
                    alt={card?.name}
                />
                <CardContent className='infodetalles' >
                    <Typography style={{color: "white", fontSize:'large', textAlign: 'center' }} gutterBottom variant="h5" component="div">
                        {card?.name}
                        
                    </Typography>
                    <p style={{color: "#88D317", fontSize: 'medium',textAlign: 'center' }}>{card?.description},{card?.brand},{card?.color},{card?.sizeTv},{card?.RAM},{card?.stock},{card?.system},{card?.disc},{card?.processor},</p>
                    <p style={{color: "#88D317", fontSize: 'medium', textAlign: 'center'  }}>Marca: {card?.brand}, Color: {card?.color}, Pulgadas de pantalla: {card?.sizeTv}, Memoria ram: {card?.RAM}, Sistema operativo: {card?.system}, Disco: {card?.disc}, Prpcesador: {card?.processor}</p>
                    <p style={{color: "white", fontSize: 'medium', textAlign: 'center'  }}>Precio: USD: {card?.price}, Stock: {card?.stock}</p>
               </CardContent>
               <CardActions>
                <div  className='stackDetail' >
               <Stack direction="row" spacing={2} className='stackDetail' >
                <Button onClick={()=>{addToCart(card._id)}}>
                <AddShoppingCartIcon sx={{ color: '#88D317', fontSize: 'xx-large' }}>
                </AddShoppingCartIcon> 
               </Button>
               </Stack>
               </div>
              </CardActions>
            </CardActionArea>
        </Card>
        
        
         </div>   
        
        } 
        
        </>
    )
        ;
}