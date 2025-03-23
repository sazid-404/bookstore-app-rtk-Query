import React, { useState } from 'react';
import { useAddBookMutation } from '../features/books/booksApiSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    author: '',
    thumbnail: '',
    price: '',
    rating: '',
    featured: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      ...formData,
      price: parseFloat(formData.price),
      rating: parseInt(formData.rating)
    };

    try {
      await addBook(newBook).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Failed to add book: ', error);
    }
  };

  return (
    <div className="container py-6">
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="bookName">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="bookName"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="author">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="thumbnail">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="thumbnail"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="rating">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                min="1"
                max="5"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="featured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={formData.featured}
              onChange={handleChange}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>
          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
