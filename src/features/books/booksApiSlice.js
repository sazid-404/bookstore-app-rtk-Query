import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
      providesTags: (result = [], error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Books", id })),
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }],
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),
    updateBook: builder.mutation({
      query: (updatedBook) => ({
        url: `books/${updatedBook.id}`,
        method: "PUT",
        body: updatedBook,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Books", id }],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Books", id }],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
