import {
  ADD_FAVORITE_BOOK,
  SET_CHARACTER_DATA,
  REMOVE_FAVORITE_BOOK,
  GET_BOOKS
} from "./constants";

export const addFavoriteBook = (favoriteBook) => ({
  type: ADD_FAVORITE_BOOK,
  favoriteBook
});

export const removeFavoriteBook = (favoriteToRemove) => ({
  type: REMOVE_FAVORITE_BOOK,
  favoriteToRemove
});

export const setCharacterData = (characterLink) => ({
  type: SET_CHARACTER_DATA,
  characterLink
});

export const getBooks = (books) => ({
  type: GET_BOOKS,
  books
});
