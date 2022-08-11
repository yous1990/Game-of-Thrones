import React, { useState, useContext } from "react";

import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PreviewIcon from "@mui/icons-material/Preview";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { useLocation } from "react-router-dom";

import CharacterCard from "../CharacterCard";

import { charactersListStyle, modalStyle } from "./styles";
import { AppContext } from "../../store/reducers";
import { setCharacterData } from "../../store/actions";
import { pageSize, firstIndex } from "../../constants";

export default function Characters() {
  const [, dispatch] = useContext(AppContext);

  const [openModal, setOpenModal] = React.useState(false);
  const [page, setPage] = useState(1);

  const location = useLocation();
  const data = location.state?.data;

  const [dataCharacters, setdataCharacters] = React.useState(
    data.slice(0, pageSize)
  );

  const handleOpenCharacterCard = async (characterData) => {
    await dispatch(setCharacterData(characterData));
    setOpenModal(true);
  };
  const handleCloseCharacterCard = () => setOpenModal(false);

  const totalPages = Math.ceil(data?.length / pageSize);

  const handleChange = (event, value) => {
    setPage(value);
    setdataCharacters(
      data.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={6}
      mt={8}
      ml={3}
    >
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 2, sm: 4, md: 12 }}
      >
        {dataCharacters &&
          dataCharacters?.map((d, i) => (
            <Grid item xs={2} sm={2} md={4} key={i}>
              <Box sx={charactersListStyle}>
                <Typography variant="subtitle1" component="div">
                  {d}
                </Typography>
                <IconButton
                  aria-label="preview character"
                  color="secondary"
                  onClick={() => handleOpenCharacterCard(d)}
                >
                  <PreviewIcon />
                </IconButton>
              </Box>
            </Grid>
          ))}
      </Grid>
      <Pagination page={page} count={totalPages} onChange={handleChange} />
      <Modal open={openModal} onClose={handleCloseCharacterCard}>
        <Box sx={modalStyle}>
          <CharacterCard />
        </Box>
      </Modal>
    </Stack>
  );
}
