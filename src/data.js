import AmazonAffiliateComponent from "./components/AmazonAffiliateComponent";
import HomeComponent from "./components/HomeComponent";
import YoutubeComponent from "./components/YoutubeComponent";

function data(){
    var data = [
        {
            "name": "Amazon Affiliate Link Generator",
            "link": "/amazon-affiliate",
            "image": "https://thesbjournal.com/wp-content/uploads/2017/10/Amazon-1-1200x545_c.png",
            "image-alt" : "Amazon Associates",
            "isProductionReady": false,
            "component": AmazonAffiliateComponent
        },
        {
            "name": "Youtube",
            "link": "/youtube",
            "image": "https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg",
            "image-alt" : "Youtube Channel",
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