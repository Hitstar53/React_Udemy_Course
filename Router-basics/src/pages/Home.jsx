import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h- items-center justify-center">
      <h1 className="text-2xl font-semibold">Home</h1>
      <p>
        Go to{" "}
        <Link to="products" className="underline text-blue-400">
          products page
        </Link>
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        onClick={() => navigate("products")}
      > 
        Go to products page
      </button>
    </div>
  );
}

export default Home