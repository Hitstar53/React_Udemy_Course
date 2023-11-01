import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { productId } = useParams()
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold">Product Detail</h1>
            <p>Product ID: {productId}</p>
            <Link to=".." relative='path' className="underline text-blue-400">
                Go back to products page
            </Link>
        </div>
    )
}

export default ProductDetail