import { createContext, useState,useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext()

export const ProductsContextProvider = ({children}) =>{
     const[products,setProducts] = useState([])
     
     useEffect(()=>{
          fetchProducts()
          console.log(products);

     },[])

     const fetchProducts = async() =>{
          await axios.get('https://fakestoreapi.com/products')
          .then((res)=>{
               setProducts(res.data)
          })
     }
     
     return(
          <ProductsContext.Provider value={{products}}>
               {children}
          </ProductsContext.Provider>
     )
}