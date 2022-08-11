import React, { useContext, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";

import { Link as RouterLink } from "react-router-dom";

import { AppContext } from "../../store/reducers";

const NavBar = () => {
  const [state] = useContext(AppContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { favoriteBooks } = state;

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            color="secondary"
            variant="body2"
          >
            <Typography variant="h6" component="div">
              BOOKS
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={openPopover}
            color="secondary"
          >
            <Badge
              badgeContent={
                favoriteBooks.length === 0 ? "0" : favoriteBooks.length
              }
              color="secondary"
            >
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={closePopover}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
          >
            {favoriteBooks.length > 0 ? (
              favoriteBooks?.map((favoriteBook, index) => (
                <Typography
                  key={index}
                  sx={{ p: 2 }}
                  gutterBottom
                  component="div"
                >
                  {favoriteBook}
                </Typography>
              ))
            ) : (
              <Typography sx={{ p: 2 }} gutterBottom>
                Vous n'avez pas encore choisi de livre favori!
              </Typography>
            )}
          </Popover>
          <Box sx={{ flexGrow: 0.05 }} />
          <img src="logo.png" alt="logo" style={{ width: 150, height: 100 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
