import { useContext, useEffect, useState } from "react";

import { AppContext } from "../../store/reducers";

export const useCharacter = () => {
  const [state] = useContext(AppContext);
  const [dataCharacter, setdataCharacter] = useState({});

  const { characterLink, books: booksData } = state;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(characterLink);
      const data = await response.json();
      setdataCharacter(data);
    };

    fetchData();
  }, [characterLink]);

  return {
    dataCharacter,
    booksData
  };
};
