import AmazonAffiliateComponent from "./components/AmazonAffiliateComponent";
import HomeComponent from "./components/HomeComponent";
import YoutubeComponent from "./components/YoutubeComponent";

function data(){
    var data = [
        {
            "name": "Amazon Affiliate Link Generator",
            "link": "/amazon-affiliate",
            "isProductionReady": false,
            "component": AmazonAffiliateComponent
        },
        {
            "name": "Youtube",
            "link": "/youtube",
            "isProductionReady": false,
            "component": YoutubeComponent
        },
        {
            "name": "Home ",
            "link": "/",
            "component": HomeComponent
        }
    ]
        
    return data;
}
export default data;