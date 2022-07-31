import React from 'react'
import './EmptyCart.css'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const EmptyCart = () => {
  return (
    <div className='empty-cart'>
        <h2>Aún no agregaste productos a tu bolsa de compras</h2>
        <RemoveShoppingCartIcon style={{fontSize: "10rem", color: "#88D317"}}/>
    </div>
  )
}

export default EmptyCart