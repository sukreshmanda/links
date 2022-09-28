import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import data from "../data";

function HomeComponent(){
    var dt = JSON.parse(JSON.stringify(data()));
    var df = dt.filter(item => {
        return item["link"] != "/"; 
    })
    return(
        <div>
            {df.map(item => {
                return(<div key={item["link"]}>
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
                        <Link to={item["link"]} >{item["name"]}</Link>
                    </Typography>
                </div>
                );
            })}
        </div>
    );
}
export default HomeComponent;