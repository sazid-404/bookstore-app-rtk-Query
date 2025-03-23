import React, { useState, useEffect } from 'react';
import { useGetBooksQuery, useUpdateBookMutation } from '../features/books/booksApiSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    author: '',
    thumbnail: '',
    price: '',
    rating: '',
    featured: false,
    id: ''
  });

  useEffect(() => {
    if (books) {
      const bookToEdit = books.find((book) => book.id === parseInt(id));
      if (bookToEdit) {
        setFormData({
          name: bookToEdit.name,
          author: bookToEdit.author,
          thumbnail: bookToEdit.thumbnail,
          price: bookToEdit.price,
          rating: bookToEdit.rating,
          featured: bookToEdit.featured,
          id: bookToEdit.id
        });
      }
    }
  }, [books, id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBook = {
      ...formData,
      price: parseFloat(formData.price),
      rating: parseInt(formData.rating)
    };

    try {
      await updateBook(updatedBook).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Failed to update book: ', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading book data</div>;

  return (
    <div className="container py-6">
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
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
            Edit Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
