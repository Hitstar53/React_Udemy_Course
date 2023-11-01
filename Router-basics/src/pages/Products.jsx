import React from 'react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
  },
]

const Products = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Products</h1>
      <ul className="mt-5">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              to={`${product.id}`}
              className="text-blue-400 font-semibold"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products