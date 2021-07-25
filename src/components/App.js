import Banner from './layout/Banner'
import ShoppingList from './List/ShoppingList'
import Cart from './Cart'
import Footer from './layout/Footer'
import { useState, useEffect } from 'react'

function App() {
  const savedCart = localStorage.getItem("cart")
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return <>
    <Banner />
    <div className="flex flex-col sm:flex-row pt-24">
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart} />
    </div>
    <Footer />
  </>
}

export default App;
