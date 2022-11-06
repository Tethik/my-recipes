import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import { Container } from "@mui/system";
import { Paper, Typography } from "@mui/material";

export function SampleListPage() {
  const tasks = ["fetch butter for mormor", "draw a nice picture of a flower", "make coffee"];

  return (
    <Container>
      <Typography variant={"h3"}>Tasks</Typography>
      <Paper elevation={3}>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {tasks.map((player, i) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={player} secondary="123 points" />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
