
import {Route, Routes, Navigate} from 'react-router-dom'
import {NavBarComponents} from './components/NavBarComponents'
import {Productos} from './pages/Productos'
import {CartPage} from './pages/CartPage'
import {ProductProvider} from './context/ProductProvider'
import {CartProvider} from './context/CartProvider'

export const Carrito = () => {
  return (
        <ProductProvider>
        <CartProvider>
            <NavBarComponents />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Productos />}></Route>
                    <Route path='/carrito' element={<CartPage />}></Route>
                    <Route path='/*' element={<Navigate to='/'/>}></Route>
                </Routes>
            </div>
            </CartProvider>

        </ProductProvider>
)
}
