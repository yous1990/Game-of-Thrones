import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import { red } from "@mui/material/colors";

import { useCharacter } from "./useCharacter";
import { getUrl } from "../../constants";

const renderGenderAvatar = (gender) => (
  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    {gender === "Male" ? "M" : "F"}
  </Avatar>
);

export default function Character() {
  const { dataCharacter, booksData } = useCharacter();

  const { name, gender, born, died, titles, spouse, books, playedBy, culture } =
    dataCharacter;

  const idBooks = books?.map((b) => getUrl(b));

  const filteredBooks = booksData?.filter((value) =>
    idBooks?.includes(getUrl(value?.url))
  );

  const filteredBooksNames = filteredBooks?.map((b) => b.name);

  const listItems = [
    {
      title: "Culture: ",
      secondary: culture
    },
    {
      title: "Titles: ",
      secondary: titles
    },
    {
      title: "Spouse: ",
      secondary: spouse
    },
    {
      title: "Books: ",
      secondary: filteredBooksNames
    },
    {
      title: "Played By: ",
      secondary: playedBy
    },
    {
      title: "Died at: ",
      secondary: died
    }
  ];

  return (
    <Card>
      <CardHeader
        avatar={renderGenderAvatar(gender)}
        title={name}
        subheader={`Born: ${born}`}
      />
      <CardContent>
        <List>
          {listItems.map((item, i) => (
            <ListItem key={i}>
              <ListItemText
                primary={item.title}
                secondary={
                  Array.isArray(item.secondary)
                    ? item.secondary.map((i, index) => (
                        <span key={index}>
                          {i}
                          <br />
                        </span>
                      ))
                    : item.secondary
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
