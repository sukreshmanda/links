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
                return(
                <div className="item" style={{justifyContent: "center", display: "flex"}}>
                    <div className="item-inside">
                        <div key={item["link"]}>
                            <p 
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
                            </p>
                        </div>
                        <Link to={item["link"]}>
                            <img src={item["image"]} alt={item["Amazon Associates"]} width="100vw" height="100vw"/>
                        </Link>
                    </div>
                </div>
                );
            })}
        </div>
    );
}
export default HomeComponent;