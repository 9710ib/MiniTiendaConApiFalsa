import {useState, useContext, useEffect} from 'react'
import{MiComponente} from './SelectComponet'
import '../styles/CardComponets.css'
import {CartContext} from '../context/CartContext'

export const CardComponent = ({id, image, title, description, price, rating, handlerAdd, handlerRemove}) => {

  
  const { shoppingList} = useContext(CartContext)

    const [added, setAdded] = useState(false)
    const addProduct = () => {
      handlerAdd()
      setAdded(true)
    }
    const removeProduct = () => {
      handlerRemove()
      setAdded(false)
    }
    const checkAdded = () => {
     const boolean = shoppingList.some(producto => producto.id ==id)
     setAdded(boolean)
    }
      useEffect(() => {
        checkAdded()
      }, [])
      

  return (
    <div className='todo'>

    
    <div className="card">
                    <img src={image} alt={title} className="card-img"/>

        <div className="card-content">
                    <h3 className="card-title"> {title} </h3>
                    <p className="card-description">{description}</p>
                    <p className="card-price">$ {price}</p>

        </div>
    </div>

    <div className='costado'>
            <p className='llega'>LLega mañana por $ 4.000  </p>
            <p className='rating'> <MiComponente/> <span className='disponibles'> ({rating} disponibles) </span></p>
            
            <button  type="button" className='btn btn1 btn-primary '> comprar Ahora</button>
            {
                added?<button type='button' className='remove-btn btn1 btn btn-danger' onClick={removeProduct} >Quitar del Carrito</button>
                : <button type='button' className='add-btn btn1 btn btn-secondary' onClick={addProduct}> Agregar al carrito </button> 
            }
            </div>

    </div>
  )
}
