import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/react.svg"
const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src={logo} width="50px" className="object-contain" alt="logo" />
        <ul className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            id="bookStore"
            className={({ isActive }) => isActive ? "cursor-pointer font-semibold" : "cursor-pointer"}
          >
            <li>Book Store</li>
          </NavLink>
          <NavLink
            to="/add-book"
            id="addBook"
            className={({ isActive }) => isActive ? "cursor-pointer font-semibold" : "cursor-pointer"}
          >
            <li>Add Book</li>
          </NavLink>
        </ul>
        <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              type="text"
              placeholder="Filter books..."
              className="search"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
