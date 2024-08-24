import {useReducer} from 'react'
import {CartContext} from './CartContext.js'


export const CartProvider = ({children}) => {

const   initialState=[];
const shoppingReducer= (state = initialState, action = {}) => {
  switch (action.type) {
    case '[CART] Add Product':
      return[...state, action.payload]
      case '[CART] Remove Product':
        return state.filter(producto => producto.id !== action.payload)
        case '[CART] Increment Quantity': 
        return state.map(producto=> {
          const cant = producto.quantity + 1
          if(producto.id === action.payload) return{...producto, quantity:cant}
          return producto
        })
          case '[CART] Decrement Quantity':
            return state.map(producto=> {
              const cant = producto.quantity - 1
            if(producto.id === action.payload && producto.quantity > 1) return{...producto, quantity:cant}
            return producto
            })
  
    default:
      return state
  }
}



const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)

const addProduct = (product) => {
  product.quantity = 1
  const action ={
    type: '[CART] Add Product',
    payload:product
  }
  dispatch(action)
}

const removeProduct = (id) => {
  const action ={
  type: '[CART] Remove Product',
  payload:id
  }
  dispatch(action)
}
const incrementQuantity = (id) => {
  const action ={
  type: '[CART] Increment Quantity',
  payload:id
  }
  dispatch(action)
}
const decrementQuantity = (id) => {
  const action ={
  type: '[CART] Decrement Quantity',
  payload:id
  }
  dispatch(action)
}



  return (
   <CartContext.Provider value={{shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity}}>
    {children}
   </CartContext.Provider>
  )
}
