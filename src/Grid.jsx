

const Grid = () => {
    const products = Array(8).fill({
  name: "Shoes",
  price: "₹3900",
  discount: "20%",
  finalPrice: "₹2400",
  image: "https://picsum.photos/300/200",
});

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((product, index) => (
    <div
      key={index}
      className="rounded-lg border shadow-md overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>

        <p className="line-through text-gray-500">{product.price}</p>

        <p className="text-green-600">
          Discount {product.discount}
        </p>

        <p className="text-2xl font-bold">
          {product.finalPrice}
        </p>

        <button className="mt-4 w-full rounded bg-green-500 py-2 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>
    </>
  )
}

export default Grid