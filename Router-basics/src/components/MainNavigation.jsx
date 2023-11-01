import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-10 py-5">
        <Link to=".." className="text-2xl font-semibold hover:text-gray-400">
          Router SPA
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-gray-400">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? "text-gray-400 pb-1 border-b-2" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink
                to="products"
                className={({ isActive }) =>
                  isActive ? "text-gray-400 pb-1 border-b-2" : ""
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation