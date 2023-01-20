import axios from 'axios'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import Product from './Product'
import './Shop.css'
import { ProductsContext } from '../../context/ProductsProvider'

const Shop = () => {
     const{products} = useContext(ProductsContext)

   return (
    <div className='shop'>
     <div>
          <h1>Persian Art</h1>
     </div>
     <div className='products'>
          {products.map((product) => <Product key={product.id} product={product}/>)}
     </div>
    </div>
  )
}

export default Shop