import React, { createContext, useReducer } from "react";

import { initialState } from "./initialState";
import {
  ADD_FAVORITE_BOOK,
  SET_CHARACTER_DATA,
  REMOVE_FAVORITE_BOOK,
  GET_BOOKS
} from "./constants";

export const AppContext = createContext();

const reducer = (state, action) => {
  switch (action?.type) {
    case ADD_FAVORITE_BOOK:
      return {
        ...state,
        favoriteBooks: state.favoriteBooks.concat(action.favoriteBook)
      };
    case REMOVE_FAVORITE_BOOK:
      return {
        ...state,
        favoriteBooks: state.favoriteBooks.filter(
          (favoriteBook) => favoriteBook !== action.favoriteToRemove
        )
      };
    case SET_CHARACTER_DATA:
      return {
        ...state,
        characterLink: action.characterLink
      };
    case GET_BOOKS:
      return {
        ...state,
        books: action.books
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
