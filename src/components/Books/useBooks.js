import { useEffect, useContext } from "react";

import { AppContext } from "../../store/reducers";
import { getBooks } from "../../store/actions";

export const useBooks = () => {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://anapioficeandfire.com/api/books");
      const data = await response.json();
      dispatch(getBooks(data));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { books } = state;

  return {
    books
  };
};
