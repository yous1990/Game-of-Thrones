import React from "react";

import Grid from "@mui/material/Grid";

import Book from "../Book";

import { useBooks } from "./useBooks";
import { StyledBooksContainer } from "./styles";

export default function Books() {
  const { books } = useBooks();

  return (
    <StyledBooksContainer
      container
      spacing={{ xs: 1, md: 2 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {books.map((book, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Book {...book} />
        </Grid>
      ))}
    </StyledBooksContainer>
  );
}
