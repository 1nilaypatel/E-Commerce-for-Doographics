import { Link } from 'react-router-dom';

export default function Appbar() {
  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white z-50">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold">
          E-Commerce
        </Link>
        <ul className="flex gap-5">
          <Link to="/shopping-cart" className="hover:underline">
            Your Cart
          </Link>
          <Link to="/checkout" className="hidden sm:inline hover:underline">
            Checkout
          </Link>
        </ul>
      </div>
    </header>
  );
}
