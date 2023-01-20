import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsProvider'
import CartItem from './CartItem'
import './Cart.css'
import useCart from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const {products} = useContext(ProductsContext)
  const{cartItems,getTotalCartAmount,checkout} = useCart()
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>
          Your cart items
        </h1>
      </div>
      <div className="cartItems">
        {products.map((product)=>{
          if (cartItems[product.id] !== 0){
            return <CartItem key={product.id} product={product}/>
          }
        })}
      </div>
      {totalAmount > 0 ?(
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ):(<h1> Your Shopping Cart is Empty</h1>)}
    </div>
  )
}

export default Cart