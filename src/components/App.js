import Banner from './layout/Banner'
import ShoppingList from './List/ShoppingList'
import Cart from './Cart'
import Footer from './layout/Footer'

function App() {
  return <>
    <Banner />
    <div>
      {/* <Cart /> */}
      <ShoppingList />
    </div>
    <Footer />
  </>
}

export default App;
