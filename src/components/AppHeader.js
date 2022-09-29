import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function AppHeader(){
  return(
    <div>
      <AppBar position="static">
          <Toolbar>
            <Typography
            variant="h6"
            to="/"
            sx={{
              mr: 2,
              to:"/",
              fontFamily: 'monospace',
              fontWeight: 900,
              color: 'inherit',
              textDecoration: 'none',
            }}>
                Sukresh Links
            </Typography>
          </Toolbar>
      </AppBar>
    </div>
  );
}
export default AppHeader;