import axios from 'axios'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'



const Product = ({product}) => {
  const{addToCart,cartItems} = useContext(CartContext)
  const cartItemAmount = cartItems[product.id]
  return (
    <div className='product'>
      <div className="imageContainer">
        <img src={product.image} alt="" />
      </div>
     <div className="description">
      <p>
        <b>{product.title}</b>
      </p>
      <p>${product.price}</p>
      {/* <p>{product.description.length <= 125 ? product.description : `${(product.description).slice(0,125)}...`}</p> */}
     </div>
    
     <button className='addToCartBttn' onClick={()=>addToCart(product.id)} >Add To Cart {cartItemAmount>0 && <> ({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product