// redux/bookSlice.js
import { createSlice } from "@reduxjs/toolkit";
import data from "../book_data_with_covers";

// Convert book_data into a genre-keyed object
const genreMap = {};
data.forEach(entry => {
  genreMap[entry.genre] = entry.books;
});

const bookSlice = createSlice({
  name: "books",
  initialState: {
    booksByGenre: genreMap,
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      const genre = newBook.genre;

      if (state.booksByGenre[genre]) {
        state.booksByGenre[genre].push(newBook);
      } else {
        // New genre - create the array
        state.booksByGenre[genre] = [newBook];
      }
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;



