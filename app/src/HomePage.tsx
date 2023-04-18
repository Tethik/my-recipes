import { Container, List, ListItemButton, ListItemText, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { recipes } from "./Recipes";

export function HomePage() {
  // const Apfelkuchen = getRecipe("apfelkuche.md");

  return (
    <Container>
      <p>Here are my recipes.</p>
      <Paper elevation={3}>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {recipes.map((r) => (
            <ListItemButton component={Link} to={`/recipe/${r.name}`}>
              <ListItemText primary={r.name} />
            </ListItemButton>
          ))}
        </List>
      </Paper>

      {/* <Apfelkuchen /> */}
    </Container>
  );
}
