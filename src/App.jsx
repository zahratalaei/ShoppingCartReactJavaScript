import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import { ProductsContextProvider } from './context/ProductsProvider'
import { CartContextProvider } from './context/CartProvider'
function App() {
  

  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Shop/>} />
                <Route path='cart' element={<Cart/>} />
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  )
}

export default App
