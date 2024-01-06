import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Appbar from './components/Appbar';
import Checkout from './pages/Checkout';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';

export default function App() {
  return (
    <div>
      <Router>
        <Appbar/>
        <Routes>
          <Route path={"/"} element={<ProductListing/>} />
          <Route path={"/checkout"} element={<Checkout/>} />
          <Route path={"/shopping-cart"} element={<ShoppingCart/>} />
        </Routes>
      </Router>
    </div>
  )
}
