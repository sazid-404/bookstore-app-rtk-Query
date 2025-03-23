# Bookstore Management with RTK Query & Vite React App

This project is a Bookstore application that demonstrates the use of React, Redux Toolkit (with RTK Query), React Router, and Tailwind CSS. It fetches book data from a JSON Server, allowing you to view, add, edit, and delete books. The design strictly follows the provided HTML/CSS templates, preserving all class names, IDs, and structural attributes.

# Features

## View Book List:

On page load, books are fetched from a JSON Server using RTK Query. The list can be filtered between "All" and "Featured" books. A search bar allows filtering by book name.

## Add Book:

A dedicated page allows you to add a new book. The form data is submitted via an RTK Query mutation. On success, you are redirected to the home page.

## Edit Book:

Each book card includes an "Edit" button that navigates to an edit page with a pre-filled form. Changes are updated via an RTK Query mutation, and the user is redirected to the home page upon success.

## Delete Book:

A "Delete" button on each book card allows you to remove a book from the JSON Server using an RTK Query mutation.

## Responsive Design:

The project uses Tailwind CSS for styling. The design strictly matches the provided HTML/CSS (including specific class names and IDs).

## Routing:

Uses react-router-dom for navigation. The active link in the Navbar is styled with font-semibold using the <NavLink> component.

# Project Structure

my-bookstore-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
├── index.css // Contains Tailwind directives and provided custom CSS
├── main.jsx // Application entry point
├── App.jsx // Main App component with routing
├── store.js // Redux store configuration
├── features/
│ └── books/
│ └── booksApiSlice.js // RTK Query API slice for book operations
├── components/
│ └── Navbar.jsx // Navigation component with search input
└── pages/
├── BookList.jsx // Home page: Displays list of books with filtering and search
├── AddBook.jsx // Page to add a new book
└── EditBook.jsx // Page to edit an existing book

# Dependencies

## Runtime Dependencies

## react

## react-dom

## react-router-dom

## react-redux

## @reduxjs/toolkit

Install these with:

bash

npm install react react-dom react-router-dom react-redux @reduxjs/toolkit

# Development

## Hot Reloading:

Vite supports hot module replacement. Changes in the src directory will update the app automatically.

## Routing:

The app uses react-router-dom for navigation. The active route is highlighted in the Navbar using the <NavLink> component.

## Styling:

All HTML templates and CSS classes (like "bookStore", "text-input", "book-form", etc.) are preserved to match the provided design exactly.

## RTK Query Operations:

The API slice in src/features/books/booksApiSlice.js handles GET, POST, PUT, and DELETE operations against the JSON Server.

# License

This project is licensed under the MIT License.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
