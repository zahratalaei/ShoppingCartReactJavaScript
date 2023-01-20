import { createContext, useContext, useState } from "react";
import { ProductsContext } from "./ProductsProvider";
import useProducts from "../hooks/useProducts";

export const CartContext = createContext(null)
 const getProducts =() =>{
     const {products} = useProducts()
return products
 }
const getDefaultCart = () => {
     let items = getProducts()
     let cart = {}
     for(let i=1; i < items.length +1; i++){
          cart[i] = 0
     }
     return cart
}

export const CartContextProvider = ({children}) => {

     const [cartItems, setCartItems] = useState(getDefaultCart)

     const getTotalCartAmount =()=>{
          let totalAmount = 0;
          let products = getProducts()
          for(const item in cartItems){
               if(cartItems[item] > 0){
                    let itemInfo = products.find((product)=> product.id === Number(item))
                    totalAmount +=cartItems[item] * itemInfo.price 
               }
          }
          return totalAmount
     }
     
     const addToCart = (itemId) => {
          setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        };
      
        const removeFromCart = (itemId) => {
          setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        };
        
        const updateCartItemCount = (newAmount,itemId) => {
          setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
        };
        const checkout = () => {
          setCartItems(getDefaultCart);
        };
     const contextValue = {
          cartItems,
          addToCart,
          removeFromCart,
          updateCartItemCount,
          getTotalCartAmount,
          checkout
     }
     return <CartContext.Provider value={contextValue}>
          {children}
     </CartContext.Provider>
}