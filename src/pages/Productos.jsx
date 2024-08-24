import {useEffect, useState, useContext} from 'react'
import {CardComponent} from '../components/CardComponent'
import {ProductContext} from '../context/ProductContext'
import {CartContext} from '../context/CartContext'

export const Productos = () => {

    const {productos} = useContext(ProductContext)
    const { addProduct, removeProduct} = useContext(CartContext)
    return (
    <> <h1> Productos</h1>
            <hr/>
        
            {productos.map(producto => (
                <CardComponent 
                    key={producto.id}
                    id={producto.id}
                    image={producto.image}
                    title= {producto.title}
                    description={producto.description}
                    rating={producto.rating.count}
                     price= {producto.price}
                     handlerAdd={()=> addProduct(producto)}
                     handlerRemove={() => removeProduct(producto.id)}
                />
            ))}

         

            </>
  )
}
