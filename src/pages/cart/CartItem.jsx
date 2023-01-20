import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'

const CartItem = ({product}) => {
  const {removeFromCart, addToCart, cartItems,updateCartItemCount} = useContext(CartContext)
  return (
    <div className='cartItem'>
     <img src={product.image} alt="" />
     <div className='description'>
          <p>
               <b>{product.title}</b>
          </p>
          <p>Price: ${product.price * cartItems[product.id] }</p>
          <div className="countHandler">
            <button onClick={()=>removeFromCart(product.id)} >-</button>
            <input value={cartItems[product.id]} onChange={(e)=>updateCartItemCount(e.target.value,product.id)} />
            <button onClick={()=>addToCart(product.id)} >+</button>
          </div>
     </div>
    </div>
  )
}

export default CartItem