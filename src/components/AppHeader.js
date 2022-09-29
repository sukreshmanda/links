import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function AppHeader(){
  return(
    <div>
      <AppBar position="static">
          <Toolbar>
            <Link to="/" style={{textDecoration : "none", color: "white"}}>
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
            </Link>
          </Toolbar>
      </AppBar>
    </div>
  );
}
export default AppHeader;