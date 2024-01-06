

export default function CartItem({ item }) {
  const handleIncreaseQuantity = (itemId) => {
    // Implement logic to increase quantity for the item with itemId
  };

  const handleDecreaseQuantity = (itemId) => {
    // Implement logic to decrease quantity for the item with itemId
  };

  return (
    <div className="border-b p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img 
          src={item.image}
          alt="Product img"
          className="h-20 w-20 object-contain text-black"
        />
        <div>
          <p className="font-semibold">{item.title}</p>
          <p>Price / Unit: ₹{item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleDecreaseQuantity(item.id)}
          className="bg-gray-300 text-gray-700 py-1 px-2 rounded-full"
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => handleIncreaseQuantity(item.id)}
          className="bg-gray-300 text-gray-700 py-1 px-2 rounded-full"
        >
          +
        </button>
      </div>
    </div>
  )
}


