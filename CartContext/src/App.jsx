import React from 'react'
import ItemList from './components/ItemList'
import Cart from './components/Cart'
import CartProvider from './context/cartContext'

const App = () => {
  return (
    <CartProvider>
      <ItemList />
      <Cart />
    </CartProvider>
  )
}

export default App