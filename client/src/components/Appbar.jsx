import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Appbar() {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className="fixed top-0 w-full bg-gray-800 text-slate-200 z-50">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold">
          <span>Fake </span>
          <span className='text-slate-400'>E-Commerce</span>
        </Link>
        <ul className="flex gap-5 font-semibold items-center">
          <Link to="/shopping-cart" className="hover:underline">
            <span>My Cart</span>
            {totalItems > 0 && (
              <span className="bg-green-500 text-white px-2 py-1 rounded-full ml-1">
                {totalItems}
              </span>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}