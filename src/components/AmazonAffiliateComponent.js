import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

function AmazonAffiliateComponent(){
    let [url, seturl] = useState("");
    return(
        <div>
            <Typography
            variant="h6"
            sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}>Generate Amazon Affiliate Links
            </Typography><br/>
            <TextField required label="Amazon URL" onChange={(e) => seturl(e.target.value)}></TextField>
            <Button onClick={() => {console.log(url)}}>Generate</Button>
        </div>
    );
}
export default AmazonAffiliateComponent;