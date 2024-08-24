import {Badge } from '@mui/material'
import {ShoppingCart } from '@mui/icons-material'
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import '../index.css'
import '../styles/NavBarComponents.css'

export const NavBarComponents = () => {

  const { shoppingList} = useContext(CartContext)

  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <NavLink to='/home' className="navbar-brand" ><img src='../../logo.png' className='img-logo'/></NavLink>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
          <li className="nav-item">
            <NavLink to='/carrito' className="nav-link" > Carrito </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/' className="nav-link" >Productos</NavLink>
          </li>

        </ul>
        <form className="d-flex align-items-center justify-content-center mx-auto w-50" role="search">
          <input className="form-control me-2 mx-auto none " type="search" placeholder="Busca productos, marcas y más..." />
          <button className="btn buscar none" type="submit">Buscar</button>
        </form>
      </div>
        <NavLink className='cart-icon' to='/carrito'>
        <Badge badgeContent={shoppingList.length} color="primary" className='my-3'>
    <ShoppingCart color="action" />
  </Badge>
        </NavLink>
    </div>


  </nav>

  )
}
