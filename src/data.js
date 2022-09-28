import AmazonAffiliateComponent from "./components/AmazonAffiliateComponent";
import HomeComponent from "./components/HomeComponent";

function data(){
    var data = [
        {
            "name": "Amazon Affiliate Link Generator",
            "link": "/amazon-affiliate",
            "isProductionReady": false,
            "component": AmazonAffiliateComponent
        },
        {
            "name": "Amazon Affiliate Link Generator",
            "link": "/amazo-affiliate",
            "isProductionReady": false,
            "component": AmazonAffiliateComponent
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