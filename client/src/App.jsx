import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './components/checkout';
import ProductListing from './components/productListing';
import ShoppingCart from './components/shoppingCart';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/product-listing"} element={<ProductListing/>} />
          <Route path={"/checkout"} element={<Checkout/>} />
          <Route path={"/shopping-cart"} element={<ShoppingCart/>} />
        </Routes>
      </Router>
    </div>
  )
}
