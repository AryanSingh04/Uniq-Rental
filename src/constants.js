import icon1 from "../src/images/about/icon1.png"
import icon2 from "../src/images/about/icon2.png"
import icon3 from "../src/images/about/icon3.png"
import ganesh from '../src/images/review/ganesh.jpeg'
import sardar from '../src/images/review/sardar.jpeg'
const li=[
    {
        path: "/",
        value: "Home",
    },{
        path: "about",
        value: "About",
    },{
        path: "vehicle",
        value: "Models",
    },{
        path: "contact",
        value: "Contact",
    },{
        path: "testimonal",
        value: "Testimonal",
    }
]

const about = {
    "carTypes" :{
        title : "Car Types",
     value:20,
     image : icon1
    },
    "rentalOutlet" : {
        title : "Rental Outlets",
        value:50,
        image : icon2,
    },
    "repairShop" : {
        title : "Repair Shop",
        value :75,
        image : icon3
    }
}
 const review = [
    {
        name:"Ganesh Gaitonde",
        loc:"Mumbai",
        img:ganesh,
        text:"Bhagwan bhi Unique Rental ka fan ban jaayega! Gaadi, ekdum bawaal, service mast – Ganesh Gaitonde ka choice!."
   
    },{
        name:"Sardar Khan",
        loc:"Dhanbad",
        img:sardar,
        text:"Uniq Rental, bhai, ek dum solid! Gaadi top, service mast, bilkul Sardar Khan style - try kar, kamaal hai!."
    }
 ]
export {li,about,review}