import { Container, List, ListItem, ListItemText, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { recipes, getRecipe } from "./Recipes";

export function HomePage() {
  // const Apfelkuchen = getRecipe("apfelkuche.md");

  return (
    <Container>
      <p>Here are my recipes.</p>
      <Paper elevation={3}>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {recipes.map((r) => (
            <ListItem>
              {/* <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar> */}

              <ListItemText primary={<Link to={`/recipe/${r.name}`}>{r.name}</Link>} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* <Apfelkuchen /> */}
    </Container>
  );
}
