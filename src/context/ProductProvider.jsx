import {useEffect, useState, useContext} from 'react'
import Swal from 'sweetalert2'
import {ProductContext} from './ProductContext'


export const ProductProvider = ({children}) => {

 const [productos, setProductos] = useState([])
 const fetchProductos = async () => {
     try{
         const response = await fetch('https://fakestoreapi.com/products')
         const data = await response.json()
         setProductos(data)
     }
         catch(error){
            Swal.fire(
             {
                 icon: 'error',
                 title: 'Error!',
                 text: 'Hubo un problema al cargar los productos'
             }
            )
            console.error(error)
         }

 }

 useEffect(() => {
     fetchProductos()
 }, [])

 
  return (
    <>
    <ProductContext.Provider value={{productos}}>
        {children}
    </ProductContext.Provider>

    </>
  )
}
