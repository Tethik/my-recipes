import { Box, createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./HomePage";
import { Leaderboard } from "./Leaderboard";
import { Navbar } from "./Navbar";
import { Recipe } from "./Recipe";
import { SampleListPage } from "./SampleListPage";

const theme = createTheme({
  palette: {
    mode: "light", // dark for darkmode
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <HashRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/tasks" element={<SampleListPage />} />
              <Route path="/recipe/:name" element={<Recipe />} />
            </Route>
          </Routes>
          <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
            <Navbar />
          </Paper>
        </HashRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
