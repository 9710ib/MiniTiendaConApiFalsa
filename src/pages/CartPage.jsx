import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import Swal from "sweetalert2"


export const CartPage = () => {

const {shoppingList , removeProduct, incrementQuantity, decrementQuantity} = useContext (CartContext)

const calculateTotal =() =>{
  return shoppingList.reduce((total, producto)=> total + producto.price * producto.quantity, 0).toFixed(2)
}

const handlerPurchase= () => {
  const productosPurchased= shoppingList.map(producto => `${producto.title} x ${producto.quantity}`).join('\n')
  Swal.fire({
    icon: 'success',
    title: 'La compra se ha realizado con exito',
    html: `<p>Has comprado: </p>  <pre>${productosPurchased}</pre>`
  })
}

  return (
    <>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre  </th>
      <th scope="col">Precio</th>
      <th scope="col" className='col-can'>Cantidad</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>

    {shoppingList.map(producto => (
      <tr key={producto.id}>
      <th scope="row">{producto.title}</th>
      <td>$ {producto.price}</td>
      <td>
          <button className='btn btn-outline-danger btn-car' onClick={() => decrementQuantity(producto.id)}> -</button>
          <button className='btn btn-success btn-car '>  {producto.quantity} </button>
          <button className='btn btn-outline-primary btn-car'onClick={() => incrementQuantity(producto.id)}> + </button>
      
    
      </td>
      <td>
      <button className='btn btn-danger' 
      onClick={() => removeProduct(producto.id)}
      >Eliminar</button></td>
    </tr>
    ))}
 <tr>
    <ht><b>Total</b></ht>
      <td></td>
      <td></td>
      <td>$ {calculateTotal()}</td>
      </tr>
  </tbody>
</table>
<div className="d-grid gap-2 col-6 mx-auto">

  <button className="btn btn-primary" type="button" onClick={handlerPurchase}>Comprar</button>
</div>

    </>
  )
}
