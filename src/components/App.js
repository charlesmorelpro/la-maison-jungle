import Banner from './layout/Banner'
import ShoppingList from './List/ShoppingList'
import Cart from './Cart'
import Footer from './layout/Footer'

function App() {
  return <>
    <Banner />
    <div className="flex flex-col sm:flex-row pt-24">
      <Cart />
      <ShoppingList />
    </div>
    <Footer />
  </>
}

export default App;
