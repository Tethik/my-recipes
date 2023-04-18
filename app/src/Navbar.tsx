import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const buttonSx = {
  color: "#ffffff",
  ":active": {
    color: "#fff",
  },
  ":hover": {
    color: "rgba(255, 255, 255, 0.16)",
  },
  "&.Mui-selected": {
    color: "rgba(255, 255, 255, 0.40)",
  },
};

export function Navbar() {
  const location = useLocation();
  let navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      value={location.pathname}
      onChange={(event, newValue) => {
        navigate(newValue);
      }}
      sx={{
        bgcolor: "#121212",
      }}
    >
      {/* Find icons here: https://mui.com/material-ui/material-icons/ */}
      <BottomNavigationAction label="Recipes" icon={<MenuBookIcon />} value="/" sx={buttonSx} />
      {/* <BottomNavigationAction label="Categories" icon={<AssignmentIcon />} value="/categories" sx={buttonSx} disabled />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} value="/search" sx={buttonSx} disabled /> */}
    </BottomNavigation>
  );
}
