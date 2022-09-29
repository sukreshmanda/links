import { Close, ContentCopyRounded } from "@mui/icons-material";
import { Button, IconButton, Link, Snackbar, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function AmazonAffiliateComponent(){
    let [url, seturl] = useState("");
    let [affiliateUrl, setAffiliateUrl] = useState("none");
    let [snackBarOpen, setSnackBarOpen] = useState(false);
    let [errorOccured, setErrorOccured] = useState(null);

    function displayGeneratedUrl(){
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        console.log(url, affiliateUrl);
        if(regex.test(url) && url.includes("amzn")){
          fetch('https://pickled-muddy-sleet.glitch.me/?url='+url)
          .then(res => res.json())
          .then(res => {
            console.log(res.url)
            setAffiliateUrl(res.url+"&tag=sukresh242-21");
            setErrorOccured(null);
          })
          .catch(err => setErrorOccured(1))
          return
        }
        if( regex.test(url) && url != "" && url != null){
            setAffiliateUrl(url+"&tag=sukresh242-21");
            setErrorOccured(null);
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
            </Typography><br/><p style={{color : "green", fontWeight: "900"}}>Give any Amazon link</p><br/>
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
            {errorOccured != null ? 
            <div>
              <Typography>Error occured</Typography>
            </div> : null}
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