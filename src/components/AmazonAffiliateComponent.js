import { Close, ContentCopyRounded } from "@mui/icons-material";
import { Button, IconButton, Link, Snackbar, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function AmazonAffiliateComponent(){
    let [url, seturl] = useState("");
    let [affiliateUrl, setAffiliateUrl] = useState("none");
    let [snackBarOpen, setSnackBarOpen] = useState(false);

    function displayGeneratedUrl(){
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        console.log(url, affiliateUrl);
        if( regex.test(url) && url != "" && url != null){
            setAffiliateUrl(url+"&tag=sukresh242-21");
        }
    }
    function handleClose(){
        setSnackBarOpen(false);
    }
    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

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
            </Typography><br/><br/>
            <div>
                <TextField required label="Amazon URL" onChange={(e) => seturl(e.target.value)}></TextField>
                <Button onClick={displayGeneratedUrl} variant="contained" sx={{ml:2}}>Generate</Button>
            </div>
            
            {affiliateUrl != 'none' ?
                <div style={{marginTop : "40px"}}>
                    URL : <Link href={affiliateUrl}>{"Affiliate Link"}</Link>
                        <ContentCopyRounded fontSize="small" sx={{ml:3}} onClick={() => {
                            navigator.clipboard.writeText(affiliateUrl);
                            setSnackBarOpen(true);
                        }}/>
                </div>
            : null}
            <Snackbar
                open={snackBarOpen}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Link copied"
                action={action}>
            </Snackbar>
        </div>
    );
}
export default AmazonAffiliateComponent;