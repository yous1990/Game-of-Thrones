import React, { useContext } from "react";

import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Link } from "react-router-dom";

import { AppContext } from "../../store/reducers";
import {
  addFavoriteBook,
  removeFavoriteBook as removeBookfromFavorite
} from "../../store/actions";

export default function Book(props) {
  const {
    name,
    released,
    publisher,
    authors,
    country,
    isbn,
    mediaType,
    characters
  } = props;

  const [state, dispatch] = useContext(AppContext);

  const cardData = [
    {
      title: "Authors",
      datum: authors[0]
    },
    {
      title: "Isbn",
      datum: isbn
    },
    {
      title: "Publication Date",
      datum: released
    },
    {
      title: "Media Type",
      datum: mediaType
    }
  ];

  const addToFavoriteBooks = async () => {
    await dispatch(addFavoriteBook(name));
  };

  const removeFavoriteBook = async () => {
    await dispatch(removeBookfromFavorite(name));
  };

  const { favoriteBooks } = state;

  const isFavoriteBook = favoriteBooks.includes(name);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name} subheader={`${publisher} - ${country}`} />
      <CardContent>
        {cardData.map((d, i) => (
          <div key={i}>
            <Typography variant="h6" component="div">
              {d.title} :{" "}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {d.datum}
            </Typography>
          </div>
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          color="secondary"
          onClick={isFavoriteBook ? removeFavoriteBook : addToFavoriteBooks}
        >
          {isFavoriteBook ? (
            <FavoriteIcon color="secondary" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <Link to="characters" state={{ data: characters }}>
          <Tooltip title="Voir les personnages du livre" placement="top">
            <IconButton aria-label="persons">
              <PersonIcon />
            </IconButton>
          </Tooltip>
        </Link>
      </CardActions>
    </Card>
  );
}

Book.propTypes = {
  name: PropTypes.string,
  released: PropTypes.string,
  publisher: PropTypes.string,
  authors: PropTypes.string,
  country: PropTypes.string,
  isbn: PropTypes.string,
  mediaType: PropTypes.string,
  characters: PropTypes.string
};
